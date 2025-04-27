// script.js
document.addEventListener("DOMContentLoaded", function() {
    const whatsappButton = document.createElement("button");
    whatsappButton.innerText = "Fale conosco no WhatsApp";
    whatsappButton.style.position = "fixed";
    whatsappButton.style.bottom = "20px";
    whatsappButton.style.right = "20px";
    whatsappButton.style.padding = "15px";
    whatsappButton.style.backgroundColor = "#25d366"; // Cor do WhatsApp
    whatsappButton.style.color = "#fff";
    whatsappButton.style.borderRadius = "5px";
    whatsappButton.style.fontSize = "16px";
    whatsappButton.style.cursor = "pointer";
    whatsappButton.onclick = function() {
        window.open("https://wa.me/43999752295", "_blank");
    };

    document.body.appendChild(whatsappButton);
});
