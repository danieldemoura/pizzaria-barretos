export default function Footer() {
    return `
        <footer class="c-footer">
            <span class="c-menu__logo">BARRETOS</span>
            <div class="c-footer__contact">
                <p class="c-footer__address">Rua Bem te vi, 209 - Parque Pretoria, Franco da Rocha - SP, 07864-180</p>
                <div class="c-footer__wrapper">
                    <span class="c-footer__telephone">
                        <img class="c-footer__icon" src="./src/assets/telephone.svg" alt="Imagem de um telefone fixo" />
                        <a class="c-footer__link" href="tel:+1144444444" title="Número de telefone fixo">4444-4444</a>
                    </span>
                    <span class="c-footer__telephone">
                        <img class="c-footer__icon" src="./src/assets/whatsapp.svg" alt="Icone do Whatsapp" />
                        <a class="c-footer__link" href="https://api.whatsapp.com/send?phone=5511999998888&text=Queria%20pedir%20uma%20pizza%20de%20Mussarela" target="_blank" title="Número do Whatsapp">(11) 99999-8888</a>
                    </span>
                </div>
                <div class="c-footer__wrapper">
                    <span>
                        <a class="c-footer__terms" href="#">Termos de Uso</a>
                    </span>
                    <span>
                        <a class="c-footer__terms" href="#">Privacidade</a>
                    </span>
                </div>
            </div>
            <p class="c-footer__copyright">© Barretos 2023 - Todos os direitos reservados.</p>
        </footer>
    `
}