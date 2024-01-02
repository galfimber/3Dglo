(()=>{"use strict";const e=(e,t,o)=>{console.log(o);const c=()=>{o+=.1;const e=requestAnimationFrame(c);o<=1?t.style.opacity=o:cancelAnimationFrame(e)},l=()=>{o-=.1;const e=requestAnimationFrame(l);o>=0?t.style.opacity=o:(cancelAnimationFrame(e),t.style.opacity=0,t.style.display="none")};"popupShow"===e?c():l()};(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),c=document.getElementById("timer-seconds");let l;const n=()=>{let e=(()=>{let e=(new Date("25 december 2023").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.timeRemaining<=0?clearInterval(l):((e.hours<10||e.minutes<10||e.seconds<10)&&(e=>{for(let t in e)"timeRemaining"!==e[t]&&e[t]<10&&(e[t]="0"+e[t])})(e),t.textContent=e.hours,o.textContent=e.minutes,c.textContent=e.seconds)};n(),l=setInterval(n,1e3)})(),(()=>{const e=document.querySelector("menu");document.addEventListener("click",(t=>{(t.target.closest(".menu")||t.target.closest("ul>li>a")||t.target.closest(".close-btn"))&&e.classList.toggle("active-menu")}))})(),(()=>{const t=document.querySelector(".popup"),o=(document.querySelector(".popup-content"),document.querySelectorAll(".popup-btn"));document.querySelector(".popup-close"),o.forEach((o=>{o.addEventListener("click",(()=>{t.style.display="block",document.documentElement.clientHeight>768?e("popupShow",t,0):t.style.opacity="1"}))})),t.addEventListener("click",(o=>{o.target.closest(".popup-content")&&!o.target.classList.contains("popup-close")||(document.documentElement.clientHeight>768?e("popupHide",t,1):t.style.display="none")}))})(),(()=>{const e=document.querySelectorAll("ul>li>a"),t=document.getElementById("next-slide");e.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),document.getElementById(e.href.slice(23)).scrollIntoView({behavior:"smooth"})}))})),t.addEventListener("click",(e=>{e.preventDefault(),document.getElementById(e.target.parentElement.href.slice(23)).scrollIntoView({behavior:"smooth"})}))})(),(()=>{const e=document.querySelectorAll(".calc-item"),t=document.querySelectorAll("form");e.forEach((e=>{e.addEventListener("input",(()=>{"SELECT"!==e.tagName&&(e.value=e.value.replace(/\D+/g,""))}))})),t.forEach((e=>{e.querySelectorAll("input").forEach((e=>{e.addEventListener("input",(()=>{"email"===e.type&&(e.value=e.value.replace(/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/g,"")),"tel"===e.type&&(e.value=e.value.replace(/[^0-9\(\)\-]/g,"")),"text"!==e.type&&"Ваше сообщение"!==e.placeholder||(e.value=e.value.replace(/[^а-яА-я\-\ ]/g,""))}))}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const c=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===c?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let c,l,n=0;const a=(e,t,o)=>{e[t].classList.remove(o)},r=(e,t,o)=>{e[t].classList.add(o)},s=()=>{a(t,n,"portfolio-item-active"),a(c,n,"dot-active"),n++,n>=t.length&&(n=0),r(t,n,"portfolio-item-active"),r(c,n,"dot-active")},i=(e=1500)=>{l=setInterval(s,e)};(()=>{for(let e=0;e<=t.length-1;e++){const e=document.createElement("li");e.classList.add("dot"),o.append(e)}c=document.querySelectorAll(".dot"),c[0].classList.add("dot-active")})(),e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(a(t,n,"portfolio-item-active"),a(c,n,"dot-active"),e.target.matches("#arrow-right")?n++:e.target.matches("#arrow-left")?n--:e.target.classList.contains("dot")&&c.forEach(((t,o)=>{e.target===t&&(n=o)})),n>=t.length&&(n=0),n<0&&(n=t.length-1),r(t,n,"portfolio-item-active"),r(c,n,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(l)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),i(2e3)})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),c=document.querySelector(".calc-square"),l=document.querySelector(".calc-count"),n=document.querySelector(".calc-day"),a=document.getElementById("total");t.addEventListener("input",(t=>{t.target!==o&&t.target!==c&&t.target!==l&&t.target!==n||(()=>{const t=+o.options[o.selectedIndex].value,r=c.value;let s=0,i=1,u=1;l.value>1&&(i+=+l.value/10),n.value&&n.value<5?u=2:n.value&&n.value<10&&(u=1.5),s=o.value&&c.value?e*t*r*i*u:0,a.textContent=s})()}))})()})();