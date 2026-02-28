import{a as f,S as p,i as a}from"./assets/vendor-dNBuWDsd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="54828616-eec4569a3e2d34c092b017f0c",m="https://pixabay.com/api/";function y(s){return f.get(m,{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            ${t.likes}
          </p>
          <p class="info-item">
            <b>Views</b>
            ${t.views}
          </p>
          <p class="info-item">
            <b>Comments</b>
            ${t.comments}
          </p>
          <p class="info-item">
            <b>Downloads</b>
            ${t.downloads}
          </p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function b(){l.innerHTML=""}function L(){u.classList.add("visible")}function v(){u.classList.remove("visible")}const n=document.querySelector(".form"),S=n.querySelector("input[name='search-text']");n.addEventListener("submit",s=>{s.preventDefault();const o=S.value.trim();if(!o){a.error({message:"Please enter a search term",position:"topRight"});return}b(),L(),y(o).then(t=>{if(!t.hits.length){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits),n.reset()}).catch(()=>{a.error({message:"Failed to fetch images. Please try again later.",position:"topRight"})}).finally(()=>{v()})});
//# sourceMappingURL=index.js.map
