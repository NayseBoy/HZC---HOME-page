const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo');
});

// Seleciona todos os elementos de navegação
const navLinks = document.querySelectorAll(".menu-lateral__link");

// Seleciona os elementos de conteúdo (main e sections)
const contentElements = document.querySelectorAll(".principal");

// Adiciona um evento de clique a cada elemento de navegação
navLinks.forEach((link, index) => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Impede que o link redirecione

        // Remove a classe "menu-lateral__link--ativo" de todos os elementos de navegação
        navLinks.forEach((navLink) => {
            navLink.classList.remove("menu-lateral__link--ativo");
        });

        // Adiciona a classe "menu-lateral__link--ativo" apenas ao elemento clicado
        link.classList.add("menu-lateral__link--ativo");

        // Remove a classe "pagina-ativa" de todos os elementos de conteúdo
        contentElements.forEach((contentElement) => {
            contentElement.classList.remove("pagina-ativa");
        });

        // Adiciona a classe "pagina-ativa" ao elemento de conteúdo correspondente
        contentElements[index].classList.add("pagina-ativa");
    });
});