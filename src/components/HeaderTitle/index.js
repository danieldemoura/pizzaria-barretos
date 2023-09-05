import Button from "../Button/index.js";

export default function HeaderTitle(container, className, h, title, p) {
    const tag = container;
    
    return `
        <${tag} class="c-header-title ${className}">
            <${h} class="c-header-title__title">${title}</${h}>
            <p class="c-header-title__info">${p}</p>
            ${ tag === "section" ? Button("FAZER UM PEDIDO") : "" }
        </${tag}>
    `
}