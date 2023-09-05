
export default function Button(children, message) {
    const messageDefault = message !== undefined ? message : "Eu queria pedir uma pizza de Mussarela"

    return `
        <a href="https://api.whatsapp.com/send?phone=5511999998888&text=${messageDefault}" target="_blank" class="c-button">${ children }</a>
    `
}