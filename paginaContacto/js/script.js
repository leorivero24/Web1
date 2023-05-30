

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
    }
}


///

buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }

}

// FORMULARIO JS

function submitForm() {
    // Reinicia los mensajes de error
    clearErrors();

    // Validación de campos
    if (validateForm()) {
        showSubmittedData();
    }
}

function clearErrors() {
    const errorElements = document.getElementsByClassName('error');
    Array.from(errorElements).forEach(function (element) {
        element.textContent = '';
    });
}

function validateForm() {
    let isValid = true;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    if (!nameInput.value.trim()) {
        isValid = false;
        document.getElementById('nameError').textContent = 'Campo nombre es obligatorio.';
    } else if (nameInput.value.length > 50) {
        isValid = false;
        document.getElementById('nameError').textContent = 'El campo nombre no puede tener más de 50 caracteres.';
    }

    if (!emailInput.value.trim()) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Campo email es obligatorio.';
    } else if (!isValidEmail(emailInput.value)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'El campo email no es válido.';
    }

    if (!phoneInput.value.trim()) {
        isValid = false;
        document.getElementById('phoneError').textContent = 'Campo teléfono es obligatorio.';
    } else if (!isValidPhone(phoneInput.value)) {
        isValid = false;
        document.getElementById('phoneError').textContent = 'El campo teléfono debe tener 10 dígitos numéricos.';
    }

    if (!messageInput.value.trim()) {
        isValid = false;
        document.getElementById('messageError').textContent = 'Campo mensaje es obligatorio.';
    } else if (messageInput.value.length > 50) {
        isValid = false;
        document.getElementById('messageError').textContent = 'El campo mensaje no puede tener más de 50 caracteres.';
    }

    return isValid;
}

function isValidEmail(email) {
    // Expresión regular para validar el formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Expresión regular para validar el formato de teléfono (10 dígitos numéricos)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

function showSubmittedData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const dataDiv = document.createElement('div');

    const nameParagraph = document.createElement('p');
    nameParagraph.textContent = 'Nombre: ' + name;
    dataDiv.appendChild(nameParagraph);

    const emailParagraph = document.createElement('p');
    emailParagraph.textContent = 'Email: ' + email;
    dataDiv.appendChild(emailParagraph);

    const phoneParagraph = document.createElement('p');
    phoneParagraph.textContent = 'Teléfono: ' + phone;
    dataDiv.appendChild(phoneParagraph);

    const messageParagraph = document.createElement('p');
    messageParagraph.textContent = 'Mensaje: ' + message;
    dataDiv.appendChild(messageParagraph);

    const submittedData = document.getElementById('submittedData');
    submittedData.innerHTML = ''; // Limpia los datos previos
    submittedData.appendChild(dataDiv);

    document.getElementById('form').reset();
    

}