import{a as P,S as v,i as y}from"./assets/vendor-BPs2jpei.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const b="https://pixabay.com/api/",x="45237784-d0fd30a4ec7a7095f46d82183",S=15;let l=1,d="";async function q(s){s!==d&&(d=s,l=1);try{const e=await P.get(b,{params:{key:x,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:S,page:l}});return l+=1,e.data}catch(e){throw new Error(e.response?e.response.status:e.message)}}const $=new v(".gallery-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});function p(s){y.error({position:"topRight",message:s})}function E(s){const e=s.map(({webformatURL:c,largeImageURL:o,tags:t,likes:r,views:a,comments:L,downloads:w})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${o}">
            <img class="gallery-image"
                src="${c}"
                alt="${t}" 
            />
        </a>
        <div class="gallery-content">
            <p class="text-title">Likes<span  class="text">${r}</span></p>
            <p class="text-title">Views<span  class="text">${a}</span></p>
            <p class="text-title">Comments<span  class="text">${L}</span></p>
            <p class="text-title">Downloads<span class="text">${w}</span></p>
        </div>
    </li>`).join("");document.querySelector(".gallery-list").insertAdjacentHTML("beforeend",e),$.refresh()}function I(){const s=document.querySelector(".gallery-list");s.innerHTML=""}const O=document.querySelector("#searchForm"),R=document.querySelector(".gallery-list"),g=document.querySelector("#searchInput"),m=document.querySelector(".loading"),i=document.querySelector(".btn"),u=15;let h="",n=1;O.addEventListener("submit",async s=>{s.preventDefault(),h=g.value.trim(),n=1,I(),i.classList.add("hidden"),await f()});i.addEventListener("click",async()=>{await f()});async function f(){if(g.value.trim().toLowerCase()){m.classList.remove("hidden");try{const e=await q(h,n,u);e.hits.length===0?p("Sorry, there are no images matching your search query. Please try again!"):(E(e.hits),n>1&&A(),e.hits.length<u||e.totalHits<=n*u?(i.classList.add("hidden"),y.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):i.classList.remove("hidden"))}catch(e){p(e.message)}finally{m.classList.add("hidden")}}}function A(){const{height:s}=R.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
