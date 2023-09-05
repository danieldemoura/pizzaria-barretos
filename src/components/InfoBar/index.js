export default function InfoBar(info, className) {
    return `
        <div class="c-info-bar">
            ${
                info.map(object => {
                    return (
                        `
                        <figure class="c-figure">
                            <img src="${object.svg}" alt="${object.alt}"/>
                            <figcaption class="c-figure__legend">
                                <p class="c-figure__title">${object.title}</p>
                                <p class="c-figure__info ${className}">${object.info}</p>
                            </figcaption>
                        </figure>
                        `
                    )
                }).join("")
            }
        </div>
    `
}