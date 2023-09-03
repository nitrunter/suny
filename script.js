// javascript
document.getElementById("registration-form").addEventListener("submit", function(event) {
    var telefono = document.getElementById("telefono").value;
    if (!validatePhoneNumber(telefono)) {
        alert("Por favor, ingresa un número de teléfono válido.");
        event.preventDefault();
    }
});

function validatePhoneNumber(phoneNumber) {

    return true; 
}
