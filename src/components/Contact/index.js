import HeaderTitle from "../HeaderTitle/index.js";

export default function Contact() {
    return `
        ${ 
            HeaderTitle("header", "c-contact", "h2", "CONTATO", "Você pode entrar em contato conosco através do telefone ou whatssap.")
        }
        <div class="c-card">
            <img src="./src/assets/telephone.svg" alt="Imagem de um Telefone">
            <a class="c-card__link" href="tel:+1144444444" title="Número de telefone fixo">4444-4444</a>
        </div>
        <div class="c-card">
            <img src="./src/assets/whatsapp.svg" alt="Icone do Whatsapp">
            <a class="c-card__link" href="https://api.whatsapp.com/send?phone=5511999998888&text=Queria%20pedir%20uma%20pizza%20de%20Mussarela" target="_blank" title="Número do Whatasapp">(11) 99999-8888</a>
        </div>
        <iframe class="c-mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d450.81173815129387!2d-46.6994694!3d-23.3251962!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee5ba08e0d20d%3A0x75bb33a9de473751!2sPizzaria%20Barreto%202!5e1!3m2!1spt-BR!2sbr!4v1693863230660!5m2!1spt-BR!2sbr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `
}