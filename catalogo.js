// Arquivo: catalogo.js (Versão corrigida e com 6 carros)

const catalogoDeCarros = [
    {
        id: 1,
        nome: "BMW M4 Competition",
        preco: "R$ 750.000,00",
        fotoPrincipal: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        descricao: "Este BMW M4 Competition é a definição de performance e luxo. Equipado com um motor 3.0 biturbo de 6 cilindros em linha, entrega 510 cv de potência e uma experiência de condução inigualável.",
        especificacoes: [
            { icone: "fa-solid fa-calendar-days", rotulo: "Ano", valor: "2023/2023" },
            { icone: "fa-solid fa-gauge-high", rotulo: "KM", valor: "5.000" },
            { icone: "fa-solid fa-gas-pump", rotulo: "Combustível", valor: "Gasolina" }
        ],
        imagens: [
            "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    },
    {
        id: 2,
        nome: "Mercedes-Benz C-Class",
        preco: "R$ 480.000,00",
        fotoPrincipal: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        descricao: "Uma combinação perfeita de elegância, conforto e tecnologia. O C-Class oferece uma experiência de condução suave e um interior requintado.",
        especificacoes: [
            { icone: "fa-solid fa-calendar-days", rotulo: "Ano", valor: "2022/2022" },
            { icone: "fa-solid fa-gauge-high", rotulo: "KM", valor: "15.000" },
            { icone: "fa-solid fa-gas-pump", rotulo: "Combustível", valor: "Híbrido" }
        ],
        imagens: [
            "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    },
    {
        id: 3,
        nome: "Audi R8 V10",
        preco: "R$ 1.200.000,00",
        fotoPrincipal: "https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        descricao: "Um supercarro projetado para as pistas, mas civilizado para as ruas. Seu motor V10 aspirado proporciona uma sinfonia inesquecível a cada aceleração.",
        especificacoes: [
            { icone: "fa-solid fa-calendar-days", rotulo: "Ano", valor: "2024/2024" },
            { icone: "fa-solid fa-gauge-high", rotulo: "KM", valor: "0" },
            { icone: "fa-solid fa-gas-pump", rotulo: "Combustível", valor: "Gasolina" }
        ],
        imagens: [
            "https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    },
    {
        id: 4,
        nome: "Porsche 911 Carrera",
        preco: "R$ 980.000,00",
        fotoPrincipal: "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        descricao: "O icônico design do 911 combinado com engenharia de ponta. Uma lenda do automobilismo que continua a evoluir, oferecendo performance e usabilidade diária.",
        especificacoes: [
            { icone: "fa-solid fa-calendar-days", rotulo: "Ano", valor: "2023/2023" },
            { icone: "fa-solid fa-gauge-high", rotulo: "KM", valor: "8.000" },
            { icone: "fa-solid fa-gas-pump", rotulo: "Combustível", valor: "Gasolina" }
        ],
        imagens: [
            "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/1231637/pexels-photo-1231637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    },
    {
        id: 5,
        nome: "Lamborghini Huracan",
        preco: "R$ 2.800.000,00",
        fotoPrincipal: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        descricao: "Design agressivo e um motor V10 que grita por atenção. O Huracan é uma experiência sensorial completa, feito para quem não tem medo de se destacar.",
        especificacoes: [
            { icone: "fa-solid fa-calendar-days", rotulo: "Ano", valor: "2022/2023" },
            { icone: "fa-solid fa-gauge-high", rotulo: "KM", valor: "3.000" },
            { icone: "fa-solid fa-gas-pump", rotulo: "Combustível", valor: "Gasolina" }
        ],
        imagens: [
            "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/6894429/pexels-photo-6894429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    },
    {
        id: 6,
        nome: "Ferrari F8 Tributo",
        preco: "R$ 4.000.000,00",
        fotoPrincipal: "https://images.pexels.com/photos/951318/pexels-photo-951318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        descricao: "Uma homenagem ao motor V8 mais potente da história da Ferrari. A F8 Tributo combina performance extrema com uma dirigibilidade surpreendentemente acessível.",
        especificacoes: [
            { icone: "fa-solid fa-calendar-days", rotulo: "Ano", valor: "2021/2022" },
            { icone: "fa-solid fa-gauge-high", rotulo: "KM", valor: "7.000" },
            { icone: "fa-solid fa-gas-pump", rotulo: "Combustível", valor: "Gasolina" }
        ],
        imagens: [
            "https://images.pexels.com/photos/951318/pexels-photo-951318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    }
];