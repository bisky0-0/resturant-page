import home from './home.js';
import barIcon from '/home/bisky/repos/resturant-page/dist/icons/bars-solid.svg'
import closeIcon from '/home/bisky/repos/resturant-page/dist/icons/xmark-solid.svg'
import menue from './menue.js';
import contact from './cotact.js';


let icons = []
let content = document.getElementById("content");
let contentContainer = document.createElement('div');

(function nav() {
    let nav = document.createElement("nav");
    content.appendChild(nav)
    nav.setAttribute('id', 'nav')

    let navH = document.createElement('h1');
    nav.appendChild(navH).textContent = "Hong Kong Reasturant";
    let iconsContainer = document.createElement('div')
    nav.appendChild(iconsContainer).setAttribute('id', 'icons')

    for (let i = 0; i < 3; i++) {
        const icon = document.createElement('div')
        iconsContainer.appendChild(icon).classList.add('nav-icon')
        i === 0 ? icon.textContent = "home" : i === 1 ? icon.textContent = "menue" : icon.textContent = "contact us";
        icons.push(icon)
    }

    let barsIcon = document.createElement('div');
    nav.appendChild(barsIcon).setAttribute('id', 'bar-icon')
    barsIcon.style.cssText = `background-image: url(${barIcon});`;

    let closeBar = document.createElement('div');
    nav.appendChild(closeBar).setAttribute('id', 'close-icon');
    closeBar.style.backgroundImage = `url(${closeIcon})`


    contentContainer.setAttribute('id', 'content-container')
    content.appendChild(contentContainer)

    let navWindow = document.createElement('div');
    let homeIcon = document.createElement('div');
    let menueIcon = document.createElement('div');
    let contactIcon = document.createElement('div');

    barsIcon.addEventListener('click', function () {
        contentContainer.appendChild(navWindow).setAttribute('id', 'nav-window');
        navWindow.style.cssText = 'height: 100vh; min-height: 100vh; position: fixed';
        barsIcon.style.display = 'none';
        closeBar.style.display = "block";

        navWindow.appendChild(homeIcon).classList.add('bar-icons');
        homeIcon.textContent = 'home'
        navWindow.appendChild(menueIcon).classList.add('bar-icons');
        menueIcon.textContent = 'menue'
        navWindow.appendChild(contactIcon).classList.add('bar-icons');
        contactIcon.textContent = 'contact us'


        homeIcon.addEventListener('click', function () {
            barsIcon.style.display = 'block';
            closeBar.style.display = 'none';
            contentContainer.textContent = '';
            home(contentContainer)
        })

        menueIcon.addEventListener('click', function () {
            barsIcon.style.display = 'block';
            closeBar.style.display = 'none';
            contentContainer.textContent = '';
            menue(contentContainer)
        })

        contactIcon.addEventListener('click', function () {
            barsIcon.style.display = 'block';
            closeBar.style.display = 'none';
            contentContainer.textContent = '';
            contact(contentContainer)
        })

    })

    closeBar.addEventListener('click', function () {
        barsIcon.style.display = 'block';
        navWindow.style.cssText = `height: 0px; min-height: 0px`;
        closeBar.style.display = 'none';
        homeIcon.textContent = ''
        menueIcon.textContent = ''
        contactIcon.textContent = ''
    })
})()

home(contentContainer)

icons[0].addEventListener('click', function () {
    contentContainer.textContent = '';
    home(contentContainer)
})

icons[1].addEventListener('click', function () {
    contentContainer.textContent = ''
    menue(contentContainer)
})

icons[2].addEventListener('click', function () {
    contentContainer.textContent = ''
    contact(contentContainer)
})
