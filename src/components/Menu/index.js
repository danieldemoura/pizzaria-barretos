export default function Menu() {
    let isMenuOpen = false;
    
    window.onload = () => {
        const btnMenu = document.querySelector(".js-btn");
        const menuDropDown = document.querySelector(".js-menu");

        btnMenu.addEventListener("click", openMenuDropDown);

        function openMenuDropDown() {
            isMenuOpen = !isMenuOpen;
            isMenuOpen ? menuDropDown.style.left = "0px"    : menuDropDown.style.left = "-200rem";
        }
    }

    return `
    <nav class="c-menu">
        <ul class="c-menu__list">
            <li>
                <span class="c-menu__logo">BARRETOS</span>
            </li>
            <li class="c-menu__button js-btn">
                <input class="c-menu__input" type="checkbox" />
                <div class="c-menu__bar"></div>
                <div class="c-menu__bar"></div>
                <div class="c-menu__bar"></div>
            </li>
            <li class="c-menu-dropdown js-menu">
                <ul class="c-menu-dropdown__list">
                    <li>
                        <a href="#pizzas" class="c-menu-dropdown__link">Nossas Pizzas</a>
                    </li>
                    <li>
                        <a href="#opening" class="c-menu-dropdown__link">Horário de Atendimento</a>
                    </li>
                    <li>
                        <a href="#contact" class="c-menu-dropdown__link">Contato</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
    `
}