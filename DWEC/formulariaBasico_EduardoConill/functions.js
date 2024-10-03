window.onload = function () {
    const formulario = document.getElementById('formulario');
    const inputs = formulario.querySelectorAll('input');
    const submitButton = document.getElementById('submit');

    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        if (input.type === 'text' ) {
            input.addEventListener('blur', () => input.value = input.value.toUpperCase());
        }
    });

    function validateField(input) {
        let isValid = false;
        let pattern = '';
        let errorMessage = '';
    
        // Validación del nombre y apellido (mayúsculas)
        if (input.id === 'nombre' || input.id === 'apellido') {
            pattern = /^[A-Z\s]+$/;
            errorMessage = 'Solo letras mayúsculas';
        } 
        // Validación del email
        else if (input.id === 'email') {
            pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            errorMessage = 'Formato incorrecto de email';
        } 
        // Validación del teléfono (9 dígitos)
        else if (input.id === 'telefono') {
            pattern = /^[0-9]{9}$/;
            errorMessage = 'Debe ser un número de 9 dígitos';
        } 
        // Validación de la edad (entre 0 y 120)
        else if (input.id === 'edad') {
            pattern = /^(1[01][0-9]|1[0-9]|[0-9]{1,2})$/;
            errorMessage = 'Edad entre 0 y 120';
        } 
        // Validación del DNI (8 números y 1 letra)
        else if (input.id === 'dni') {
            pattern = /^[0-9]{8}[A-Za-z]{1}$/;
            errorMessage = 'DNI debe ser 8 números y 1 letra';
        } 
        // Validación de la dirección (mayúsculas)
        else if (input.id === 'direccion') {
            pattern = /^[A-Z0-9\s]+$/;
            errorMessage = 'Letras en mayúsculas y números permitidos';
        }
    
        // Comprobación del patrón
        if (input.value.match(pattern)) {
            input.classList.remove('error');
            input.placeholder = '';
            isValid = true;
        } else if (input.value === '') {
            input.classList.add('error');
        } else {
            input.classList.add('error');
            input.placeholder = errorMessage;
        }
    
        // Activar o desactivar el botón de envío
        toggleSubmitButton();
        return isValid;
    }
    
    function toggleSubmitButton() {
        const allValid = Array.from(inputs).every(input => input.value !== '' && !input.classList.contains('error'));
        if (allValid) {
            submitButton.disabled = false;
            submitButton.classList.add('enabled');
        } else {
            submitButton.disabled = true;
            submitButton.classList.remove('enabled');
        }
    }
};
