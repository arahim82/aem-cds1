export const id=660;export const ids=[660];export const modules={7758:(t,n,e)=>{e.d(n,{Z:()=>d});var o=e(4933),r=e.n(o),s=e(3476),a=e.n(s)()(r());a.push([t.id,".dropin-debugger--show-slots [data-slot-key]{\n  outline:1px dashed var(--color-neutral-600);\n  border-radius:4px;\n}\n\n.dropin-debugger--show-slots [data-slot-key]::before{\n  content:attr(data-slot-key);\n  font:var(--type-details-caption-1-font);\n  color:var(--color-informational-800);\n  background-color:var(--color-informational-200);\n  font-size:0.75rem;\n  border-radius:4px 4px 0 0;\n  padding:0.2rem 0.4rem;\n  font-weight:600;\n  position:absolute;\n  z-index:2;\n}\n\n.dropin-debugger--show-slots [data-slot]{\n  outline:2px dashed var(--color-informational-800);\n  outline-offset:3px;\n  border-radius:4px;\n  min-height:2rem;\n}\n\n.dropin-debugger--show-slots [data-slot]::before{\n  font:var(--type-details-caption-1-font);\n  content:attr(data-slot);\n  color:var(--color-informational-200);\n  background-color:var(--color-informational-800);\n  font-size:0.75rem;\n  border-radius:4px 4px 0 0;\n  padding:0.2rem 0.4rem;\n  font-weight:600;\n  position:absolute;\n  transform:translateY(-26px);\n  z-index:2;\n}\n",""]);const d=a},660:(t,n,e)=>{e.r(n),e.d(n,{default:()=>m});var o=e(1892),r=e.n(o),s=e(5760),a=e.n(s),d=e(8311),i=e.n(d),l=e(1615),p=e.n(l),c=e(8060),f=e.n(c),u=e(7758),b={attributes:{"data-dropin":"storefront-pdp","data-sdk":"0.21.0"},styleTagTransform:function(t,n){window._loadedStyles=window._loadedStyles??{};const e=t?.match(/^\.dropin-(\w+)/)?.[1],o=n.getAttribute("data-sdk"),r=e?`sdk/${e}`:n.getAttribute("data-dropin");n.setAttribute("data-dropin",r),n.removeAttribute("data-sdk");const s=window._loadedStyles[r];if(s){const r=function(t,n){const[e,o]=t.split("-"),[r,s]=n.split("-"),a=[...e.split("."),o],d=[...r.split("."),s],i=parseInt(a[0],10),l=parseInt(d[0],10);if(i!==l)return i>l?t:n;const p=parseInt(a[1],10),c=parseInt(d[1],10);if(p!==c)return p>c?t:n;const f=parseInt(a[2],10),u=parseInt(d[2],10);if(f!==u)return f>u?t:n;if(a[3]&&d[3]){const e=/(alpha|beta)(.*)/,o=a[3].match(e),r=d[3].match(e),s=o[1],i=r[1],l=parseInt(o[2],10),p=parseInt(r[2],10);if(s===i)return l>p?t:n;if("alpha"===s&&"beta"===i)return n;if("beta"===s&&"alpha"===i)return t}return a[3]?n:t}(o,s.sdk);if(!e||e&&r===s.sdk){const n=s.style.textContent;s.style.textContent=`${n}\n/* --- MERGED --- */\n${t}`}else e&&r!==s.sdk&&(s.style.textContent=`/* --- UPGRADED --- */\n${t}`);return void n.remove()}n.textContent=t,window._loadedStyles[r]={sdk:o,core:e,style:n};const a=document.querySelector("head"),{lastDropinStyleInjected:d,lastSDKStyleInjected:i}=window._loadedStyles;e?(i?a.insertBefore(n,i.nextSibling):a.insertBefore(n,a.firstChild),window._loadedStyles.lastSDKStyleInjected=n):(d?a.insertBefore(n,d.nextSibling):i?a.insertBefore(n,i.nextSibling):a.insertBefore(n,a.firstChild),window._loadedStyles.lastDropinStyleInjected=n)}};b.setAttributes=p(),b.insert=i().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=f();r()(u.Z,b);const m=u.Z&&u.Z.locals?u.Z.locals:void 0}};