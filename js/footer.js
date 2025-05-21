const footerHTML = `
<footer>
    <div class="upperFooter">
        <div class="footerSection1">
            <div class="logoText">
                AUTOCAR<span class="smallText">
                <br />SERVIÇO DE REPARO AUTOMÓVEL</span>
            </div>
            <ul class="socialLinks">
                <li>
                    <a target="_blank" href="https://wa.me/5528999453033">
                        <i class="fa-brands fa-whatsapp"></i>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.instagram.com/bertoncelo.hugo/">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://github.com/Hugobertoncelo">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/hugobertoncelo">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://hugobertoncelo.github.io/Portfolio/">
                        <i class="fa-solid fa-address-card"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="footerSection2">
            <div class="address">
                <i class="fa-solid fa-location-dot"></i><span class="footer2Hdng">Endereço</span><br />
                <p>
                    R. Dr. José Monteiro da Silva - Pratinha, Mimoso do Sul - ES -
                    29400-000
                </p>
            </div>
            <div class="footerHrs">
                <div class="">
                    <span>
                        <i class="fa-solid fa-clock"></i><span class="footer2Hdng">Horário de Funcionamento</span>
                    </span><br />
                    <p>
                        Seg-sex | 8h às 18h<br />
                        <span>Fechado aos sábados</span>
                    </p>
                </div>
            </div>
            <div class="">
                <i class="fa-solid fa-phone"></i><span class="footer2Hdng">Contato</span><br />
                <p>
                    <a href="tel:5528999453033">(28) 99945-3033 <br />Hugo Bertoncelo</a>
                </p>
            </div>
        </div>
        <div class="footerSection3">
            <div>Links rápidos</div>
            <ul>
                <li><a href="allServices.html">Serviços</a></li>
                <li><a href="toyotaService.html">Veículos</a></li>
                <li><a href="ownersInfo.html">Sobre nós</a></li>
                <li><a href="faqs.html">Perguntas frequentes</a></li>
            </ul>
        </div>
        <div class="footerSection4">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.7635500916326!2d-41.35764833044209!3d-21.07049734734967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbbff55cc7a6969%3A0x99ad857fc09b01d!2sR.%20Dr.%20Jos%C3%A9%20Monteiro%20da%20Silva%2C%20796%20-%20Pratinha%2C%20Mimoso%20do%20Sul%20-%20ES%2C%2029400-000!5e0!3m2!1spt-BR!2sbr!4v1743166890372!5m2!1spt-BR!2sbr"
                width="300"
                height="200"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </div>
    <div class="lowerFooter">
        <hr />
        <div class="lowerFooterContent">
            <div class="developersInfo">
                <span>Desenvolvido por: </span><a href="imgs/minha-foto.png" target="_blank">Hugo Bertoncelo</a>
            </div>
            <div class="copyRight">
                © AUTOCAR serviços automotivos.
                <span>Todos os direitos reservados.</span>
            </div>
        </div>
    </div>
</footer>
`;

function loadFooter() {
  const footerContainer = document.getElementById('footerContainer');
  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  } else {
    console.error('Elemento com ID "footerContainer" não encontrado. Não foi possível carregar o rodapé.');
  }
}

document.addEventListener('DOMContentLoaded', loadFooter);
