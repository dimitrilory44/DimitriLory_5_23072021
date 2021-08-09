export function verificationFormulaire(emailReg, contact) {
    // Verification champ prenom
    const errorPrenom = document.getElementById("errorPrenom");
    const labelPrenom = document.getElementById("inputPrenom");
    const prenom = document.getElementById("prenom");
    
    if(contact.firstName !== "") {
        labelPrenom.classList.replace('text-danger', 'text-success');
        errorPrenom.textContent = '';
        errorPrenom.classList.replace('text-success', 'text-danger');
        prenom.classList.replace("is-invalid", "is-valid");
    } else {
        labelPrenom.classList.add('text-danger');
        errorPrenom.textContent = 'Le champ prenom est obligatoire';
        errorPrenom.classList.add('text-danger');
        prenom.classList.add("is-invalid");
    }
    
    // Verification champ nom
    const errorNom = document.getElementById("errorNom");
    const labelNom = document.getElementById("inputNom");
    const nom = document.getElementById("nom");

    if(contact.lastName !== "") {
        labelNom.classList.replace('text-danger', 'text-success');
        errorNom.textContent = '';
        errorNom.classList.replace('text-success', 'text-danger');
        nom.classList.replace("is-invalid", "is-valid");
    } else {
        labelNom.classList.add('text-danger');
        errorNom.textContent = 'Le champ nom est obligatoire';
        errorNom.classList.add('text-danger');
        nom.classList.add("is-invalid");
    }


    // Verification champ mail
    const errorMail = document.getElementById("errorMail");
    const labelMail = document.getElementById("inputMail");
    const email = document.getElementById("email");

    if(emailReg.test(contact.email) == false) {
        labelMail.classList.add('text-danger');
        errorMail.textContent = 'Veuillez entrer une adresse mail valide';
        errorMail.classList.add('text-danger');
        email.classList.add("is-invalid");
    } else if (contact.email !== "") {
        labelMail.classList.add('text-danger');
        errorMail.textContent = 'Le champ email est obligatoire';
        errorMail.classList.add('text-danger');
        email.classList.add("is-invalid");
    } 

    // Verification champ adresse
    const errorAdresse = document.getElementById("errorAdresse");
    const labelAdresse = document.getElementById("inputAddress");
    const adresse = document.getElementById("adresse");

    if(contact.address !== "") {
        labelAdresse.classList.replace('text-danger', 'text-success');
        errorAdresse.textContent = '';
        errorAdresse.classList.replace('text-success', 'text-danger');
        adresse.classList.replace("is-invalid", "is-valid");
    } else {
        labelAdresse.classList.add('text-danger');
        errorAdresse.textContent = 'Le champ adresse est obligatoire';
        errorAdresse.classList.add('text-danger');
        adresse.classList.add("is-invalid");
    }

    // Verification champ ville
    const errorVille = document.getElementById("errorCity");
    const labelVille = document.getElementById("inputCity");
    const ville = document.getElementById("ville");

    if(contact.city !== "") {
        labelVille.classList.replace('text-danger', 'text-success');
        errorVille.textContent = '';
        errorVille.classList.replace('text-success', 'text-danger');
        ville.classList.replace("is-invalid", "is-valid");
    } else {
        labelVille.classList.add('text-danger');
        errorVille.textContent = 'Le champ nom est obligatoire';
        errorVille.classList.add('text-danger');
        ville.classList.add("is-invalid");
    }
}