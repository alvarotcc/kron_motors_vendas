// Arquivo: detalhes.js
document.addEventListener('DOMContentLoaded', () => {
    // Lógica do Menu Mobile (pode manter a sua original se preferir)
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
    }

    // --- LÓGICA PARA CARREGAR OS DETALHES DO CARRO ---

    // 1. Pega os parâmetros da URL (a parte depois do "?")
    const params = new URLSearchParams(window.location.search);
    const carroId = params.get('id'); // Pega o valor do parâmetro "id"

    // 2. Encontra o carro no nosso catálogo usando o ID
    // O "catalogoDeCarros" vem do arquivo "catalogo.js" que importamos no HTML
    const carro = catalogoDeCarros.find(c => c.id == carroId);

    // 3. Se encontrou um carro, preenche a página. Senão, mostra um erro.
    if (carro) {
        // Atualiza o título da página
        document.title = `Detalhes - ${carro.nome}`;

        // Preenche as informações básicas
        document.getElementById('car-name').innerText = carro.nome;
        document.getElementById('car-price').innerText = carro.preco;
        document.getElementById('car-description').innerText = carro.descricao;

        // Preenche a lista de especificações
        const specsList = document.getElementById('car-specs-list');
        specsList.innerHTML = ''; // Limpa a lista antes de adicionar
        carro.especificacoes.forEach(spec => {
            const item = document.createElement('li');
            item.innerHTML = `<i class="${spec.icone}"></i> <strong>${spec.rotulo}:</strong> ${spec.valor}`;
            specsList.appendChild(item);
        });

        // Preenche a galeria de imagens
        const mainImage = document.getElementById('mainImage');
        const thumbnailContainer = document.getElementById('thumbnail-container');
        
        // Define a imagem principal como a primeira da lista
        mainImage.src = carro.imagens[0];
        mainImage.alt = carro.nome;

        // Cria as miniaturas
        thumbnailContainer.innerHTML = '';
        carro.imagens.forEach((imgUrl, index) => {
            const thumb = document.createElement('img');
            thumb.src = imgUrl;
            thumb.alt = `${carro.nome} - Miniatura ${index + 1}`;
            thumb.classList.add('thumbnail');
            if (index === 0) {
                thumb.classList.add('active'); // Ativa a primeira miniatura
            }
            // Adiciona o evento de clique em cada miniatura
            thumb.addEventListener('click', function() {
                mainImage.src = this.src;
                // Atualiza a classe 'active'
                document.querySelector('.thumbnail.active').classList.remove('active');
                this.classList.add('active');
            });
            thumbnailContainer.appendChild(thumb);
        });

    } else {
        // Se não encontrou o carro, mostra uma mensagem de erro
        document.querySelector('.detail-layout').innerHTML = '<h2>Carro não encontrado!</h2><p>O veículo que você está procurando não existe ou foi removido.</p>';
    }
});