//contact:
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("phone").addEventListener('click', () => {
        document.getElementById("phoneInfo").classList.toggle('visible');
        document.getElementById("contact-form").classList.remove('visible');
    });

    document.getElementById("email").addEventListener('click', () => {
        window.location.href = 'mailto:jmsosaizaguirre@gmail.com';
    });

    document.getElementById("correoweb").addEventListener('click', () => {
        document.getElementById("contact-form").classList.toggle('visible');
        document.getElementById("phoneInfo").classList.remove('visible');
    })
});