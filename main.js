const app = document.querySelector(".app");
import Menu from "./src/components/Menu/index.js";
import Header from "./src/components/Header/index.js";
import InfoBar from "./src/components/InfoBar/index.js";
import Section from "./src/components/Section/index.js";
import Pizzas from "./src/components/Pizzas/index.js";
import OpeningHours from "./src/components/OpeningHours/index.js";
import Contact from "./src/components/Contact/index.js";
import Footer from "./src/components/Footer/index.js";
import { data } from "./src/data.js";

function App() {

    const joinContent = `
        ${ Menu() }
        ${ Header() }
        ${ InfoBar( data.infoBar1 ) }
        ${ Section( Pizzas(data.pizzas), "pizzas" ) }
        ${ InfoBar( data.infoBar2 ) }
        ${ Section( OpeningHours(), "opening" ) }
        ${ InfoBar( data.infoBar3, "address" ) }
        ${ Section( Contact(), "contact") }
        ${ Footer() }

    `
    return joinContent
}


app.innerHTML = App();