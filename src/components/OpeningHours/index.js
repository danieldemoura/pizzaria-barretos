import HeaderTitle from "../HeaderTitle/index.js";

export default function OpeningHours() {
    return `
        ${
            HeaderTitle("header", "c-opening", "h2", "HORÁRIO DE ATENDIMENTO", "Como nós trabalhamos via delivery antes de fazer o seu pedido confirá os  nossos dias e horários de atendimento.")
        }
        <div class="c-hours">
            <img src="./src/assets/clock.svg" alt="Imagem de um Relógio" />
            <p class="c-hours__info">
                <span>De Terça a Quinta-Feira e Domingo: das 18:00 às 23:00.</span>
                <span>De Sexta a Sábado: das 18:00 às 24:00.</span>
            </p>
        </div>
        <div class="c-hours img">
            <img class="c-hours__img" src="./src/assets/tartaruga.png" alt="Imagem do personagem Mike das Tartarugas Ninja segurando uma pizza" />
            <p class="c-hours__info">
                Se até as tartarugas gostam das nossa pizzas você também vai gostar, então corra e faça o seu pedido antes que elas comam tudo.
            </p>
        </div>
    `
}
