export const validEmail = function(inputEmail) {
    let emailReg = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

    let testEmail = emailReg.test(inputEmail.value);

    console.log(testEmail);

    const small = inputEmail.nextElementSibling;

    if(testEmail) {
        small.textContent = 'Adresse mail Valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
    } else {
        small.textContent = 'Adresse mail non Valide';
        small.classList.remove('text-success');
        small.classList.add('text-danger');
    }
};

