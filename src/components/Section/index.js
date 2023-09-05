export default function Section(children, id) {
    return `
        <section class="c-section" id="${id}">
           ${ children }
        </section>
    `
}