(()=>{"use strict";const t="localhost"===location.hostname||"127.0.0.1"===location.hostname?"http://localhost:3000":"https://api-p5-openclassroom.herokuapp.com",e=JSON.parse(localStorage.getItem("produit"));JSON.parse(localStorage.getItem("total")),JSON.parse(localStorage.getItem("order")),(async()=>{document.getElementById("notification").innerText=null!==e?JSON.parse(localStorage.getItem("produit")).length:0,function(t){let e=document.getElementById("photos");for(let n of t){let t=(a=`${n.price}`,Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(a/100));e.innerHTML+=`\n            <div class="col-lg-6 mb-3">\n                <div class="card">\n                    <img class="card-img-top" src="${n.imageUrl}" alt="Image ${n.name}">\n                    <div class="card-body">\n                        <div class="d-flex">\n                            <h5 class="card-title">${n.name}</h5>\n                            <div class="ml-auto align-items-center"><h5><strong>${t}</strong></h5></div>\n                        </div>\n                        <p class="card-text">${n.description}</p>\n                        <a href="pages/produit.html?_id=${n._id}" class="btn btn-outline-secondary btn--width">\n                            Descriptif du produit\n                        </a>\n                    </div>\n                </div>\n            </div>\n        `}var a}(await async function(){return fetch(`${t}/api/cameras`).then((t=>{if(t.ok)return t.json()})).then((t=>t)).catch((t=>{alert(t)}))}())})()})();