const burgorMenuHTML = `
<div class="burgorMenu">
    <div class="burgorIconDiv" id="burgorIconDiv">
      <i class="fa-solid fa-bars" id="burgorIcon"></i>
    </div>
    <div class="burgorMenuItems" id="burgorMenuItems">
      <nav class="navbar">
        <ul class="menu">
          <li class="menuItem activeItem">
            <a href="index.html"
              ><img
                src="https://img.icons8.com/?size=100&id=2797&format=png&color=FFFFFF"
                alt="Ícone Home"
                style="
                  width: 19px;
                  height: 19px;
                  vertical-align: middle;
                  margin-right: 5px;
                "
              />
              Home</a
            >
          </li>
          <li class="menuItem">
            <img
              src="https://img.icons8.com/?size=100&id=11219&format=png&color=FFFFFF"
              alt="Ícone de Serviços"
              style="
                width: 18px;
                height: 18px;
                vertical-align: middle;
                margin-right: 2px;
              "
            />
            <span>Serviços</span> <i class="fa-solid fa-caret-right"></i>
            <ul class="menuSubItem">
              <li>
                <a href="allServices.html"
                  ><img
                    src="https://img.icons8.com/?size=100&id=44471&format=png&color=FFFFFF"
                    alt="Ícone de Todos os Serviços"
                    style="
                      width: 19px;
                      height: 19px;
                      vertical-align: middle;
                      margin-right: 5px;
                    "
                  />
                  Todos os serviços</a
                >
              </li>
              <li>
                <a href="engineService.html"
                  ><img
                    src="https://img.icons8.com/?size=100&id=9376&format=png&color=FFFFFF"
                    alt="Ícone de Reparo de Motores"
                    style="
                      width: 19px;
                      height: 19px;
                      vertical-align: middle;
                      margin-right: 5px;
                    "
                  />
                  Reparo de motores</a
                >
              </li>
              <li>
                <a href="AC repair.html"
                  ><img
                    src="https://img.icons8.com/?size=100&id=6442&format=png&color=FFFFFF"
                    alt="Ícone de Reparo de A/C"
                    style="
                      width: 19px;
                      height: 19px;
                      vertical-align: middle;
                      margin-right: 5px;
                    "
                  />
                  Reparo de A/C</a
                >
              </li>
              <li>
                <a href="batteryService.html"
                  ><img
                    src="https://img.icons8.com/?size=100&id=9380&format=png&color=FFFFFF"
                    alt="Ícone de Carga de Bateria"
                    style="
                      width: 19px;
                      height: 19px;
                      vertical-align: middle;
                      margin-right: 5px;
                    "
                  />
                  Carga de Bateria</a
                >
              </li>
              <li>
                <a href="oilChange.html"
                  ><img
                    src="https://img.icons8.com/?size=100&id=31338&format=png&color=FFFFFF"
                    alt="Ícone de Troca de Óleo"
                    style="
                      width: 22px;
                      height: 22px;
                      vertical-align: middle;
                      margin-right: 5px;
                    "
                  />
                  Troca de Óleo</a
                >
              </li>
              <li>
                <a href="brakeRepair.html"
                  ><img
                    src="https://img.icons8.com/?size=100&id=m2dTXb114MFz&format=png&color=FFFFFF"
                    alt="Ícone de Serviço de Freio"
                    style="
                      width: 22px;
                      height: 22px;
                      vertical-align: middle;
                      margin-right: 5px;
                    "
                  />
                  Serviço de Freio</a
                >
              </li>
              <li>
                <a href="wheelServices.html"
                  ><img
                    src="https://img.icons8.com/?size=100&id=9357&format=png&color=FFFFFF"
                    alt="Ícone de Serviço de Alinhamento"
                    style="
                      width: 20px;
                      height: 20px;
                      vertical-align: middle;
                      margin-right: 5px;
                    "
                  />
                  Alinhamento</a
                >
              </li>
            </ul>
          </li>
          <li class="menuItem">
            <img
              src="https://img.icons8.com/?size=100&id=61580&format=png&color=FFFFFF"
              alt="Ícone de Serviços"
              style="
                width: 22px;
                height: 22px;
                vertical-align: middle;
                margin-right: 2px;
              "
            />
            <span>Veículos</span><i class="fa-solid fa-caret-right"></i>
            <ul class="menuSubItem">
              <li>
                <a href="toyotaService.html"
                  ><img
                    src="https://img.icons8.com/?size=100&id=57665&format=png&color=000000"
                    alt="Ícone da Toyota"
                    style="
                      width: 26px;
                      height: 26px;
                      vertical-align: middle;
                      margin-right: 5px;
                    "
                  />
                  Toyota</a
                >
              </li>
              <li>
                <a href="suzukiService.html"
                  ><img
                    src="https://img.icons8.com/?size=100&id=18808&format=png&color=000000"
                    alt="Ícone da Suzuki"
                    style="
                      width: 26px;
                      height: 26px;
                      vertical-align: middle;
                      margin-right: 5px;
                    "
                  />
                  Suzuki</a
                >
              </li>
              <li>
                <a href="volksService.html"
                  ><img
                    src="https://img.icons8.com/?size=100&id=58787&format=png&color=000000"
                    alt="Ícone da Volkswagen"
                    style="
                      width: 30px;
                      height: 30px;
                      margin-left: -3px;
                      vertical-align: middle;
                      margin-right: 5px;
                    "
                  />
                  Volkswagen</a
                >
              </li>
              <li>
                <a href="fiatService.html"
                  ><img
                    src="https://img.icons8.com/?size=100&id=60279&format=png&color=000000"
                    alt="Ícone da Fiat"
                    style="
                      width: 30px;
                      height: 30px;
                      margin-left: -3px;
                      vertical-align: middle;
                      margin-right: 5px;
                    "
                  />
                  Fiat</a
                >
              </li>
              <li>
                <a href="gmService.html"
                  ><img
                    src="https://img.icons8.com/?size=100&id=57661&format=png&color=000000"
                    alt="Ícone da Gm"
                    style="
                      width: 30px;
                      height: 30px;
                      margin-left: -3px;
                      vertical-align: middle;
                      margin-right: 5px;
                    "
                  />
                  Chevrolet</a
                >
              </li>
              <li>
                <a href="fordService.html"
                  ><img
                    src="https://img.icons8.com/?size=100&id=57660&format=png&color=000000"
                    alt="Ícone da Ford"
                    style="
                      width: 34px;
                      height: 34px;
                      margin-left: -3px;
                      vertical-align: middle;
                    "
                  />
                  Ford</a
                >
              </li>
              <li>
                <a href="mercedesService.html"
                  ><img
                    src="https://img.icons8.com/?size=100&id=45135&format=png&color=000000"
                    alt="Ícone da Mercedes"
                    style="
                      width: 30px;
                      height: 30px;
                      margin-left: -3px;
                      vertical-align: middle;
                      margin-right: 5px;
                    "
                  />
                  Mercedes-Benz</a
                >
              </li>
              <li>
                <a href="nissanService.html"
                  ><img
                    src="https://img.icons8.com/?size=100&id=57662&format=png&color=000000"
                    alt="Ícone da Nissan"
                    style="
                      width: 30px;
                      height: 30px;
                      margin-left: -3px;
                      vertical-align: middle;
                      margin-right: 5px;
                    "
                  />
                  Nissan</a
                >
              </li>
              <li>
                <a href="hondaService.html"
                  ><img
                    src="https://img.icons8.com/?size=100&id=VOv7447b7j7K&format=png&color=000000"
                    alt="Ícone da Honda"
                    style="
                      width: 26px;
                      height: 26px;
                      vertical-align: middle;
                      margin-right: 5px;
                    "
                  />
                  Honda</a
                >
              </li>
              <li>
                <a href="hyundaiService.html"
                  ><img
                    src="https://img.icons8.com/?size=100&id=58881&format=png&color=000000"
                    alt="Ícone da Hyundai"
                    style="
                      width: 26px;
                      height: 30px;
                      vertical-align: middle;
                      margin-right: 5px;
                    "
                  />
                  Hyundai</a
                >
              </li>
              <li>
                <a href="bmwService.html"
                  ><img
                    src="https://img.icons8.com/?size=100&id=Jem6EV5S1Wsa&format=png&color=000000"
                    alt="Ícone da BMW"
                    style="
                      width: 35px;
                      height: 35px;
                      margin-left: -5px;
                      vertical-align: middle;
                      margin-right: 2px;
                    "
                  />
                  BMW</a
                >
              </li>
              <li>
                <a href="AudiService.html"
                  ><img
                    src="https://img.icons8.com/?size=100&id=58788&format=png&color=000000"
                    alt="Ícone da Audi"
                    style="
                      width: 30px;
                      height: 30px;
                      vertical-align: middle;
                      margin-right: 5px;
                    "
                  />
                  Audi</a
                >
              </li>
              <li>
                <a href="hummerService.html"
                  ><img
                    src="https://img.icons8.com/?size=100&id=117246&format=png&color=000000"
                    alt="Ícone da Hummer"
                    style="
                      width: 30px;
                      height: 30px;
                      vertical-align: middle;
                      margin-right: 5px;
                    "
                  />
                  Hummer</a
                >
              </li>
            </ul>
          </li>
          <li class="menuItem">
            <img
              src="https://img.icons8.com/?size=100&id=7694&format=png&color=FFFFFF"
              alt="Ícone Sobre Nós"
              style="width: 15px; height: 15px; vertical-align: middle"
            />
            <span>Sobre nós</span><i class="fa-solid fa-caret-right"></i>
            <ul class="menuSubItem">
              <li>
                <a href="ownersInfo.html"
                  ><img
                    src="https://img.icons8.com/?size=100&id=20149&format=png&color=FFFFFF"
                    alt="Ícone de Informações do Proprietário"
                    style="
                      width: 19px;
                      height: 19px;
                      vertical-align: middle;
                      margin-right: 4px;
                    "
                  />
                  Informações do proprietário</a
                >
              </li>
              <li>
                <a href="contact.html"
                  ><img
                    src="https://img.icons8.com/?size=100&id=23265&format=png&color=FFFFFF"
                    alt="Ícone de Contato"
                    style="
                      width: 20px;
                      height: 20px;
                      vertical-align: middle;
                      margin-right: 4px;
                    "
                  />
                  Entre em Contato</a
                >
              </li>
              <li>
                <a href="oldcars.html"
                  ><img
                    src="https://img.icons8.com/?size=100&id=12684&format=png&color=ffffff"
                    alt="Ícone de carros"
                    style="
                      width: 23px;
                      height: 23px;
                      vertical-align: middle;
                      margin-right: 4px;
                    "
                  />
                  Galeria De Fotos</a
                >
              </li>
            </ul>
          </li>
          <li class="menuItem">
            <a href="faqs.html"
              ><img
                src="https://img.icons8.com/?size=100&id=7781&format=png&color=FFFFFF"
                alt="Ícone de Perguntas Frequentes"
                style="
                  width: 19px;
                  height: 19px;
                  vertical-align: middle;
                  margin-right: 5px;
                "
              />
              Perguntas</a
            >
          </li><li class="menuItem">
            <a href="store.html"
              ><img
                src="https://img.icons8.com/?size=100&id=8287&format=png&color=FFFFFF"
                alt="Ícone loja"
                style="
                  width: 20px;
                  height: 20px;
                  vertical-align: middle;
                  margin-right: 5px;
                "
              />
             Loja</a
            >
          </li>
          <li class="menuItem">
            <a href="login.html"
              ><img
                src="https://img.icons8.com/?size=100&id=2&format=png&color=FFFFFF"
                alt="Ícone login"
                style="
                  width: 18px;
                  height: 18px;
                  vertical-align: middle;
                  margin-right: 5px;
                "
              />
              Cadastrar</a
            >
          </li>
          <li class="appointment">
            <a href="requestAppointment.html"
              ><img
                src="https://img.icons8.com/?size=100&id=eJ0GpkPbhocR&format=png&color=FFFFFF"
                alt="Ícone de Agendamento"
                style="
                  width: 19px;
                  height: 19px;
                  vertical-align: middle;
                  margin-right: 5px;
                "
              />
              Agendamento</a
            >
          </li>
        </ul>
      </nav>
    </div>
</div>
`;

function loadBurgorMenu() {
  const container = document.getElementById('burgorMenuContainer');
  if (container) {
    container.innerHTML = burgorMenuHTML;
    initializeBurgerMenuLogic();
  } else {
    console.error('Element with ID "burgorMenuContainer" not found. Cannot load burgor menu.');
  }
}

function initializeBurgerMenuLogic() {
  var navbar = document.getElementById('navbar');
  var sticky = navbar ? navbar.offsetTop : 0;

  let menuToggler = document.getElementById('menuToggler');

  window.onscroll = function () {
    if (navbar) {
      if ((window.scrollY >= sticky)) {
        navbar.classList.add("sticky");
        if (menuToggler) {
          menuToggler.classList.add('menuDisplay');
        }
      } else {
        navbar.classList.remove("sticky");
        if (menuToggler) {
          menuToggler.classList.remove('menuDisplay');
        }
      }
    }
  };

  let menuIcon = document.getElementById('menuIcon');
  if (menuIcon) {
    menuIcon.addEventListener('click', (event) => {
      if (navbar) {
        navbar.classList.remove('sticky');
      }
    });
  } else {
    console.warn('Elemento com ID "menuIcon" não encontrado. O listener de clique não será anexado.');
  }

  let burgorIconDiv = document.getElementById('burgorIconDiv');
  let burgorIcon = document.getElementById('burgorIcon');
  let burgorMenuItems = document.getElementById('burgorMenuItems');

  if (burgorIconDiv && burgorIcon && burgorMenuItems) {
    burgorIcon.addEventListener('click', (event) => {
      if (burgorIcon.classList.contains('fa-bars')) {
        burgorIcon.classList.remove('fa-bars');
        burgorIcon.classList.add('fa-xmark');
      } else {
        burgorIcon.classList.remove('fa-xmark');
        burgorIcon.classList.add('fa-bars');
      }
      burgorMenuItems.classList.toggle('burgorMenuItems');
      burgorIconDiv.classList.toggle('burgorDivTranslate');
      burgorIcon.classList.toggle('burgorTranslate');
    });
  } else {
    console.error('Um ou mais elementos do menu hambúrguer (burgorIconDiv, burgorIcon, burgorMenuItems) não foram encontrados. Verifique o HTML carregado e os IDs.');
  }
}

document.addEventListener('DOMContentLoaded', loadBurgorMenu);