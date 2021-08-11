(()=>{"use strict";const e="localhost"===location.hostname||"127.0.0.1"===location.hostname?"http://localhost:3000":"https://api-p5-openclassroom.herokuapp.com",t=JSON.parse(localStorage.getItem("produit"));function n(e){return Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(e/100)}JSON.parse(localStorage.getItem("total")),JSON.parse(localStorage.getItem("order")),(async()=>{document.getElementById("notification").innerText=null!==t?JSON.parse(localStorage.getItem("produit")).length:0;const o=function(){let e=window.location.href,t=new URL(e),n=new URLSearchParams(t.search);if(n.has("_id"))return n.get("_id")}();!function(e){document.querySelector(".jumbotron h1").textContent=`${e.name}`,document.querySelector(".jumbotron p").textContent=`${e.description}`;const o=document.getElementById("options");for(let t of e.lenses)o.innerHTML+=`<option value="${t}">${t}</option>`;document.getElementById("image").innerHTML=`<img class="card-img-top" src="${e.imageUrl}" alt="Image ${e.name}"/>`;const r=document.getElementById("quantite");for(let e=1;e<=5;e++)r.innerHTML+=`<option value="${e}">${e}</option>`;const a=document.querySelector(".prix span"),i=n(`${e.price}`);a.textContent=`${i}`,r.addEventListener("change",(t=>{let o=0;const r=document.querySelector(".prix span");o=`${e.price}`*parseInt(`${t.target.value}`);const a=n(`${o}`);r.textContent=`${a}`}));const c=document.getElementById("goToBasket"),l=document.getElementById("notification");let s=localStorage.length;const m=[],u=t;l.innerText=null!==t?u.length:0,c.addEventListener("click",(n=>{if(n.preventDefault(),document.querySelector("#alert span strong").textContent=`${e.name}`,document.getElementById("alert").classList.replace("no-show","show"),l.innerText=++s,null===t){m.push({id:e._id,nom:e.name,description:e.description,img:e.imageUrl,objectif:o.options[o.selectedIndex].value,quantite:parseInt(r.options[r.selectedIndex].value),prix:e.price});let t=JSON.stringify(m);localStorage.setItem("produit",t)}else{u.push({id:e._id,nom:e.name,description:e.description,img:e.imageUrl,objectif:o.options[o.selectedIndex].value,quantite:parseInt(r.options[r.selectedIndex].value),prix:e.price});let t=JSON.stringify(u);localStorage.setItem("produit",t)}}))}(await async function(t){return fetch(`${e}/api/cameras/${t}`).then((e=>{if(e.ok)return e.json()})).then((e=>e)).catch((e=>{alert(e)}))}(o))})()})();