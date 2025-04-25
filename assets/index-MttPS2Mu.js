(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();const u=()=>`
        <div class="header-main">
            <div class="header-logo">
                <h1>
                    <a href="/">
                        100tifi.co
                    </a>
                </h1>
            </div>

            <div class="header-nav">
                <a href="#/about/">
                    About
                </a>
            </div>
        </div>
    `,i="https://rickandmortyapi.com/api/character",d=async r=>{const e=r?`${i}/${r}`:i;try{return await(await fetch(e)).json()}catch(a){return console.error("Error fetching data:",a),null}},f=async()=>`
    <div class="characters">
      ${(await d()).results.map(a=>`
          <article class="character-item">
            <a href="#/${a.id}/">
              <img src="${a.image}" alt="${a.name}" />
              <h2>${a.name}</h2>
            </a>
          </article>
        `).join("")}
    </div>
  `,l=()=>location.hash.slice(1).toLowerCase().split("/")[1]||"/",m=async()=>{const r=l(),e=await d(r);return`
        <div class="character-inner">
            <article class="character-card"> 
                <img src="${e.image}" alt="${e.name}">
                <h2>${e.name}</h2>
            </article>

            <article class="character-card"> 
                <h3>Episodes: <span> ${e.episode.length} </span> </h3>
                <h3>Status: ${e.status} </h3>
                <h3>Species: ${e.species} </h3>
                <h3>Gender: ${e.gender} </h3>
                <h3>Origin: ${e.origin.name} </h3>
                <h3>Last location: ${e.location.name} </h3>
            </article>
        </div>  
    `},v=()=>`
        <div class="error404">
            <h2>Error 404</h2>
        </div>
    `,p=r=>r.length<=3?r==="/"?r:"/:id":`/${r}`,o={"/":f,"/:id":m,"/contact":"Contact"},h=async()=>{const r=document.getElementById("header"),e=document.getElementById("content");r.innerHTML=await u();let a=l(),s=await p(a),t=o[s]?o[s]:v;e.innerHTML=await t()};window.addEventListener("load",h);window.addEventListener("hashchange",h);
