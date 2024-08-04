import{S as d,i as f}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function m(r){return fetch(`https://pixabay.com/api/?key=45237784-d0fd30a4ec7a7095f46d82183&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()})}const y=new d(".gallery-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});function i(r){f.error({position:"topRight",message:r})}function h(r){const s=r.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:a,comments:u,downloads:p})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${n}">
            <img class="gallery-image"
                src="${o}"
                alt="${e}" 
            />
        </a>
        <div class="gallery-content">
            <p class="text-title">Likes<span  class="text">${t}</span></p>
            <p class="text-title">Views<span  class="text">${a}</span></p>
            <p class="text-title">Comments<span  class="text">${u}</span></p>
            <p class="text-title">Downloads<span class="text">${p}</span></p>
        </div>
    </li>`).join("");document.querySelector(".gallery-list").insertAdjacentHTML("beforeend",s),y.refresh()}function g(){const r=document.querySelector(".gallery-list");r.innerHTML=""}const L=document.querySelector("#searchForm");document.querySelector(".gallery-list");const c=document.querySelector("#searchInput"),l=document.querySelector(".loading");L.addEventListener("submit",S);function S(r){r.preventDefault();const s=c.value.trim().toLowerCase();s&&(l.classList.remove("hidden"),g(),m(s).then(o=>{o.hits.length===0?i("Sorry, there are no images matching your search query. Please try again!"):h(o.hits)}).catch(o=>{i(o.message)}).finally(()=>{l.classList.add("hidden"),c.value=""}))}
//# sourceMappingURL=commonHelpers.js.map
