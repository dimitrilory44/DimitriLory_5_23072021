(()=>{"use strict";const t="localhost"===location.hostname||"127.0.0.1"===location.hostname?"http://localhost:3000":"https://api-p5-openclassroom.herokuapp.com",e=JSON.parse(localStorage.getItem("produit"));JSON.parse(localStorage.getItem("total")),JSON.parse(localStorage.getItem("order")),(async()=>{document.getElementById("notification").innerText=null!==e?JSON.parse(localStorage.getItem("produit")).length:0,function(t){let e=document.getElementById("photos");for(let a of t){let t=(n=`${a.price}`,Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(n/100));e.innerHTML+=`\n            <div class="col-lg-6 mb-3">\n                <div class="card">\n                    <img class="card-img-top" src="${a.imageUrl}" alt="Image ${a.name}">\n                    <div class="card-body">\n                        <div class="d-flex flex-row justify-content-between">\n                            <h5 class="card-title">${a.name}</h5>\n                            <div><h5><strong>${t}</strong></h5></div>\n                        </div>\n                        <p class="card-text">${a.description}</p>\n                        <a href="pages/produit.html?_id=${a._id}" class="btn btn-outline-secondary btn--width">\n                            Descriptif du produit   \n                        </a>\n                    </div>\n                </div>\n            </div>\n        `}var n}(await async function(){return fetch(`${t}/api/cameras`).then((t=>{if(t.ok)return t.json()})).then((t=>t)).catch((t=>{alert(t)}))}())})()})();