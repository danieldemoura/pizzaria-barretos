import HeaderTitle from "../HeaderTitle/index.js";

export default function Header() {
    return `
        <header class="c-header">
            ${ HeaderTitle("section", "c-headline", "h1", "PIZZARIA BARRETOS", "Descubra o Sabor Autêntico da Itália em Cada Mordida.") }
        </header>
    `
}