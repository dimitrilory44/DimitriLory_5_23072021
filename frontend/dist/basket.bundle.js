(()=>{"use strict";const e=JSON.parse(localStorage.getItem("produit"));function t(e){return Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(e/100)}async function n(t){let n=t.target.getAttribute("data-index");e.splice(n,1),localStorage.setItem("produit",JSON.stringify(e)),window.location.reload()}async function a(t){let n=t.target.getAttribute("data-index");e[n].quantite<=1?(e.splice(n,1),localStorage.setItem("produit",JSON.stringify(e)),window.location.reload()):(e[n].quantite--,localStorage.setItem("produit",JSON.stringify(e)),window.location.reload())}async function s(t){let n=t.target.getAttribute("data-index");e[n].quantite++,localStorage.setItem("produit",JSON.stringify(e)),window.location.reload()}JSON.parse(localStorage.getItem("total")),JSON.parse(localStorage.getItem("order"));const l="localhost"===location.hostname||"127.0.0.1"===location.hostname?"":"https:http://localhost:3000//api-p5-openclassroom.herokuapp.com";(async()=>{document.getElementById("notification").innerText=null!==e?JSON.parse(localStorage.getItem("produit")).length:0,null===e||0===e.length?function(){const e=document.createElement("section"),t=document.getElementById("main");e.classList.add("jumbotron","d-flex","p-5","mb-4","bg-light","mt-3","flex-column"),t.appendChild(e);const n=document.createElement("h1");n.classList.add("text-secondary","text-center"),e.appendChild(n),n.innerText="Pas de commande en cours, commencer votre achat";const a=document.createElement("a");a.classList.add("btn","btn-primary"),a.style.width="200px",a.style.margin="20px auto",a.setAttribute("href","../index.html"),a.innerText="Retour au commande",e.appendChild(a)}():function(){const i=document.createElement("section"),d=document.getElementById("main");i.classList.add("my-5","align-middle"),d.appendChild(i),i.innerHTML='   \n            <div class="d-flex mb-3">\n                <h1>Mon panier</h1>\n            </div>\n\n            <div id="corps" class="card p-3">\n            </div>\n\n            <div class="d-flex justify-content-end mt-3">\n                <h4 class="label">Total</h4>\n                <div id="total"></div>\n            </div>\n        ',e.forEach((n=>{let a=e.indexOf(n),s=0;s=`${n.prix}`*parseInt(`${n.quantite}`),document.getElementById("corps").innerHTML+=`\n                <div class="d-flex justify-content-end">\n                    <a class="trash" role="button">\n                        <i class="bi bi-trash-fill trash--color" data-index="${a}"></i>\n                    </a>\n                </div>\n                <div class="row d-flex mb-3">\n                  <div class="col-lg-5 col-md-5 col-sm-5">\n                    <img src="${n.img}" class="img-fluid img-thumbnail w-75" alt="Image ${n.nom}"/>\n                  </div>\n                  <div class="col-lg-7 col-md-7 col-sm-7 mt-3">\n                    <div class="d-flex justify-content-between">\n                        <div class="d-flex justify-content-start flex-column descriptif">\n                            <a role="button" href="produit.html?_id=${n.id}">\n                                <h3>${n.nom}</h3>\n                            </a>\n                            <span>Ref : ${n.id}</span>\n                            <span class="mb-3">Objectif : ${n.objectif}</span>\n                        </div>\n                    </div>\n                    <div class="d-flex justify-content-between mt-5">\n                        <div class="qty d-flex justify-content-start">\n                            <a class="diminuer" role="button">\n                                <span class="minus bg-dark" data-index="${a}">-</span>\n                            </a>\n                            <span class="qte">${n.quantite}</span>\n                            <a class="augmenter" role="button">\n                                <span class="plus bg-dark" data-index="${a}">+</span>\n                            </a>\n                        </div>\n                        <div class="d-flex justify-content-end price">${t(`${s}`)}</div>\n                    </div>\n                  </div>\n                </div>\n            `})),function(e){let n=0;e.forEach((e=>{n+=e.prix*e.quantite})),document.getElementById("total").innerText+=`${t(n)}`;const a=n.toString();localStorage.setItem("total",a)}(e);const o=document.getElementsByClassName("trash");for(let e of o)e.addEventListener("click",n);const c=document.getElementsByClassName("diminuer");for(let e of c)e.addEventListener("click",a);const r=document.getElementsByClassName("augmenter");for(let e of r)e.addEventListener("click",s);const m=document.createElement("section");m.classList.add("accordion"),d.appendChild(m),m.innerHTML='\n            <div class="d-flex justify-content-end mt-5">\n            <button id="valider" class="btn btn-primary collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Valider ma commande</button>\n            </div>\n\n            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent=".accordion">\n                <h1 class="mb-3">Validation de ma commande</h1>\n                <form id="orderForm">\n                    <div class="row">\n                        <div class="form-group col-md-4 mb-3">\n                            <label id="inputNom" for="inputNom">Nom</label>\n                            <input type="text" class="form-control" id="nom" placeholder="Entrer un nom">\n                            <small id="errorNom"></small>\n                        </div>\n                        <div class="form-group col-md-4 mb-3">\n                            <label id="inputPrenom" for="inputPrenom">Prenom</label>\n                            <input type="text" class="form-control" id="prenom" placeholder="Entrer un prenom">\n                            <small id="errorPrenom"></small>\n                        </div>\n                        <div class="form-group col-md-4 mb-3">\n                            <label id="inputMail" for="inputMail">Email</label>\n                            <input type="email" class="form-control" id="email" placeholder="Entrer un email">\n                            <small id="errorMail"></small>\n                        </div>\n                    </div>\n                    <div class="row">\n                        <div class="form-group col-md-6 mb-3">\n                            <label id="inputAddress" for="inputAddress">Adresse</label>\n                            <input type="text" class="form-control" id="adresse" placeholder="Ex : 30 rue Orinoco">\n                            <small id="errorAdresse"></small>\n                        </div>\n                        <div class="form-group col-md-6 mb-3">\n                            <label id="inputCity" for="inputCity">Ville</label>\n                            <input type="text" class="form-control" id="ville" placeholder="Ex : Nantes">\n                            <small id="errorCity"></small>\n                        </div>\n                    </div>\n                    <div class="d-flex justify-content-end">\n                        <button type="submit" id="send" class="btn btn-success">Commander</button>\n                    </div>\n                </form>\n            </div>\n        ';const u=document.getElementById("valider");u.addEventListener("click",(()=>{u.classList.add("d-none")}));const p=new RegExp("^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$","g");document.getElementById("send").addEventListener("click",(t=>{t.preventDefault();let n={firstName:document.getElementById("prenom").value,lastName:document.getElementById("nom").value,address:document.getElementById("adresse").value,city:document.getElementById("ville").value,email:document.getElementById("email").value},a=[];if(1==p.test(n.email)&""!==n.firstName&""!==n.lastName&""!==n.address&""!==n.city){for(let t of e)a.push(t.id);!async function(e,t){fetch(`${l}/api/cameras/order`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({contact:e,products:t})}).then((e=>{if(e.ok)return e.json()})).then((e=>{localStorage.setItem("order",JSON.stringify(e)),document.location.href="order.html"})).catch((e=>{alert(e)}))}(n,a)}else!function(e,t){const n=document.getElementById("errorPrenom"),a=document.getElementById("inputPrenom"),s=document.getElementById("prenom");""!==t.firstName?(a.classList.replace("text-danger","text-success"),n.textContent="",n.classList.replace("text-success","text-danger"),s.classList.replace("is-invalid","is-valid")):(a.classList.add("text-danger"),n.textContent="Le champ prenom est obligatoire",n.classList.add("text-danger"),s.classList.add("is-invalid"));const l=document.getElementById("errorNom"),i=document.getElementById("inputNom"),d=document.getElementById("nom");""!==t.lastName?(i.classList.replace("text-danger","text-success"),l.textContent="",l.classList.replace("text-success","text-danger"),d.classList.replace("is-invalid","is-valid")):(i.classList.add("text-danger"),l.textContent="Le champ nom est obligatoire",l.classList.add("text-danger"),d.classList.add("is-invalid"));const o=document.getElementById("errorMail"),c=document.getElementById("inputMail"),r=document.getElementById("email");0==e.test(t.email)?(c.classList.add("text-danger"),o.textContent="Veuillez entrer une adresse mail valide",o.classList.add("text-danger"),r.classList.add("is-invalid")):""!==t.email&&(c.classList.add("text-danger"),o.textContent="Le champ email est obligatoire",o.classList.add("text-danger"),r.classList.add("is-invalid"));const m=document.getElementById("errorAdresse"),u=document.getElementById("inputAddress"),p=document.getElementById("adresse");""!==t.address?(u.classList.replace("text-danger","text-success"),m.textContent="",m.classList.replace("text-success","text-danger"),p.classList.replace("is-invalid","is-valid")):(u.classList.add("text-danger"),m.textContent="Le champ adresse est obligatoire",m.classList.add("text-danger"),p.classList.add("is-invalid"));const g=document.getElementById("errorCity"),f=document.getElementById("inputCity"),v=document.getElementById("ville");""!==t.city?(f.classList.replace("text-danger","text-success"),g.textContent="",g.classList.replace("text-success","text-danger"),v.classList.replace("is-invalid","is-valid")):(f.classList.add("text-danger"),g.textContent="Le champ nom est obligatoire",g.classList.add("text-danger"),v.classList.add("is-invalid"))}(p,n)}))}()})()})();