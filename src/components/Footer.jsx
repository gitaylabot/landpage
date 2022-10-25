import Instagram from '../assets/instagram.svg'
import Tiktok from '../assets/tik-tok.svg'
import Twitter from '../assets/twitter.svg'
import Linkedin from '../assets/linkedin.svg'

import './Footer.css'

const Footer = () => {
    return (
        <div id='footer'>
            <div id='side1'>
                <div>
                    <h3>Jurídico</h3>
                    <a href='.'>Termos</a>
                    <a href='.'>Política de Cookies</a>
                    <a href='.'>Propriedade intelectual</a>
                </div>
                <div>
                    <h3>Empregos</h3>
                    <a href='.'>Trabalhe conosco</a>
                    <a href='.'>Blog de Tecnologia</a>
                </div>
            </div>
            <div id='side2'>
                <div>
                    <h3>REDES SOCIAS</h3>
                </div>
                <div>
                    <a href=".">
                    <object type="image/svg+xml" data={Instagram} id="win"></object>
                    </a>
                    <a href=".">
                    <object type="image/svg+xml" data={Tiktok} id="win"></object>
                    </a>
                    <a href=".">
                    <object type="image/svg+xml" data={Twitter} id="win"></object>
                    </a>
                    <a href=".">
                    <object type="image/svg+xml" data={Linkedin} id="win"></object>
                    </a>
                </div>
                <div id='copy'>
                    <p>&copy;2022 Ayla INC. LLC, Todos os direitos reservados</p>
                </div>
            </div>
        </div>
    )
}

export default Footer