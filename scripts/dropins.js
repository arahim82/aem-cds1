/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

// Drop-in Tools
import { events } from '@dropins/tools/event-bus.js';
import { setEndpoint } from '@dropins/tools/fetch-graphql.js';
import { initializers } from '@dropins/tools/initializer.js';

// Drop-ins
import * as cartApi from '@dropins/storefront-cart/api.js';
import * as authApi from '@dropins/storefront-auth/api.js';

// Libs
import { getConfigValue, getCookie } from './configs.js';

const setAuthHeader = (apis, token) => {
  apis.forEach((typeApi) => {
    typeApi.setFetchGraphQlHeader('Authorization', `Bearer ${token}`);
  });
};

const getUserTokenCookie = () => getCookie('auth_dropin_user_token');

export default async function initializeDropins() {
  events.enableLogger(true);

  // Set Fetch Endpoint (Global)
  setEndpoint(await getConfigValue('commerce-core-endpoint'));

  // Initializers (Global)
  initializers.register(authApi.initialize, {});
  initializers.register(cartApi.initialize, {});

  const apis = [cartApi, authApi];

  // After load or reload page we check token
  const token = getUserTokenCookie();

  setAuthHeader(apis, token);

  // Set auth headers
  events.on('authenticated', (isAuthenticated) => {
    if (isAuthenticated) {
      const updatedToken = getUserTokenCookie();

      setAuthHeader(apis, updatedToken);
    } else {
      setAuthHeader(apis, '');
    }
  });

  // Cache cartId in session storage
  events.on('cart/data', (data) => {
    if (data?.id) {
      sessionStorage.setItem('DROPINS_CART_ID', data.id);
    } else {
      sessionStorage.removeItem('DROPINS_CART_ID');
    }
  });

  // Mount all registered drop-ins
  if (document.readyState === 'complete') {
    initializers.mount();
    events.emit('authenticated', !!token);
  } else {
    window.addEventListener('load', () => {
      initializers.mount();
      events.emit('authenticated', !!token);
    });
  }
}
