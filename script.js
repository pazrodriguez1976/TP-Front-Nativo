document.addEventListener('DOMContentLoaded', () => {
    
    const buttons = document.querySelectorAll('.main-header .action-item');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log(`Acción de usuario: ${btn.innerText || btn.querySelector('.action-icon').className}`);
        });
    });

    
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const productName = card.querySelector('h3').innerText;
            const productPrice = card.querySelector('.price').innerText;
            console.log(`Detalle solicitado: ${productName} - Precio: ${productPrice}`);
            alert(`Ver detalles de: ${productName}`);
        });
    });
});