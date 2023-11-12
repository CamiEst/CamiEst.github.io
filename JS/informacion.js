const items = [
    {
        texto: `<p class="info__text">
        En <span class="info__highlight">Candy Kiss</span>, nos apasiona endulzar tus momentos especiales. Somos una empresa dedicada a ofrecerte
        la mejor experiencia en dulcería y repostería, todo desde la comodidad de tu hogar. Nuestra misión es
        crear deliciosos y tentadores manjares que deleiten tus sentidos y despierten una sonrisa en tu rostro.
        </p>`,
        imagen: `<img class="info__image" src="/Img/img1.jpg" alt="Imagen de muestra 1">`
    },
    {
        texto: `<p class="info__text">
        <span class="info__highlight">Nuestra Historia.</span>
         Candy Kiss nació de la pasión compartida por los dulces y la creatividad culinaria. Fundada por un
        equipo de expertos en repostería, nuestra empresa se ha convertido en un destino confiable para los
        amantes de los dulces. Desde el primer día, nos hemos comprometido a utilizar ingredientes frescos y de
        la más alta calidad para elaborar nuestros productos, asegurando así que cada bocado sea una experiencia
        verdaderamente deliciosa.
        </p>`,
        imagen: `<img class="info__image" src="/Img/img2.webp" alt="Imagen de muestra 2">`
    },
    {
        texto: `<p class="info__text">
        <span class="info__highlight">Nuestros Productos.</span>
         En Candy Kiss, te ofrecemos una amplia variedad de dulces y postres cuidadosamente elaborados. Desde
        exquisitos chocolates y caramelos artesanales hasta pasteles y galletas decoradas con precisión, cada
        uno de nuestros productos está hecho con amor y dedicación. Nos esforzamos por innovar constantemente,
        ofreciéndote sabores únicos y diseños creativos que harán que tus celebraciones sean inolvidables.
        </p>`,
        imagen: `<img class="info__image" src="/Img/img3.webp" alt="Imagen de muestra 3">`
    },
    {
        texto:  `<p class="info__text">
        <span class="info__highlight">Nuestro Compromiso.</span>
         Nos enorgullecemos de proporcionarte un servicio excepcional y productos que superan tus expectativas.
        Estamos dedicados a la satisfacción del cliente y nos esforzamos por brindarte una experiencia de compra
        sin complicaciones. Además, nos comprometemos a contribuir positivamente a nuestra comunidad y al medio
        ambiente, adoptando prácticas sostenibles en nuestra operación diaria.
        </p>`,
        imagen: `<img class="info__image" src="/Img/img4.jpg" alt="Imagen de muestra 4">`
    }
]

const infoItem = document.getElementById('info__item');
const buttons = document.querySelectorAll('.zoom-button');
const subItems = document.querySelectorAll('.info__subItem');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => cambiarItem(index));
});

let posicionItem = 0;

function cambiarItem(index) {

    infoItem.innerHTML = items[index].texto + items[index].imagen;

    toggleActiveClass(buttons[posicionItem], false, subItems[posicionItem]);
    posicionItem = index;
    toggleActiveClass(buttons[posicionItem], true, subItems[posicionItem]);
}

function toggleActiveClass(element, isActive, element2) {
    element.classList.toggle('active', isActive);
    element.classList.toggle('zoom-button', !isActive);
    element2.classList.toggle('active', isActive);
}
