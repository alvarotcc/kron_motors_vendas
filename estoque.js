// Arquivo: estoque.js
document.addEventListener('DOMContentLoaded', () => {
    // Lógica do Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
    }

    // --- LÓGICA PARA CONSTRUIR A PÁGINA DE ESTOQUE ---
    const estoqueGrid = document.getElementById('estoque-grid');

    if (estoqueGrid && typeof catalogoDeCarros !== 'undefined') {
        catalogoDeCarros.forEach(carro => {
            // Cria o card do carro
            const carCard = document.createElement('div');
            carCard.className = 'car-card';
            
            // Monta o HTML interno do card
            carCard.innerHTML = `
                <img src="${carro.fotoPrincipal}" alt="${carro.nome}" loading="lazy">
                <div class="card-content">
                    <h3>${carro.nome}</h3>
                    <p class="car-price">${carro.preco}</p>
                    <a href="detalhes.html?id=${carro.id}" class="btn-secondary">Ver Detalhes</a>
                </div>
            `;

            // Adiciona o card na grade
            estoqueGrid.appendChild(carCard);
        });
    }
});