document.getElementById("contact-form").addEventListener("submit", alertForm);
function alertForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    alert(`Name: ${name} \nEmail: ${email} \nMessage: ${message}`);
}