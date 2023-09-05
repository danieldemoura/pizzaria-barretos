import HeaderTitle from "../HeaderTitle/index.js";
import Button from "../Button/index.js";

export default function Pizzas(pizzas) {
    return `
        ${ 
            HeaderTitle("header", "c-menu-pizzas", "h2", "NOSSAS PIZZAS", "Escolha a pizza de sua preferência e faça um pedido, os nossos preço variam entre 38,00 a 48,00 reais.") 
        }
            <div class="c-section__pizzas">
        ${
            pizzas.map(pizza => {
                return `
                <figure class="c-pizza">
                    <figcaption>
                        <h3 class="c-pizza__title">
                            ${pizza.name}
                            <br />
                            ${pizza.price}
                        </h3>
                    </figcaption>
                    <img class="c-pizza__img" src="${pizza.img}" alt="${pizza.alt}" />
                    ${ Button("FAZER PEDIDO", pizza.message) }
                </figure>
                `
            }).join("")
        }
            </div>
    `
}