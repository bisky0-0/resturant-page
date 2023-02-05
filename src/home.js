
export default function home(contentContainer) {
    content.style.cssText = `background-image: url("images/bowls-with-rice-pasta-dark-background.jpg");
     background-size: cover;
     background-position: center`;

    let welcomeWindow = document.createElement('div')
    welcomeWindow.setAttribute('id', 'welcome');
    contentContainer.appendChild(welcomeWindow)

    let welcomeH2 = document.createElement('h2')
    welcomeH2.textContent = "welcome to our resturant"
    welcomeWindow.appendChild(welcomeH2)

    let welcomeP = document.createElement('p');
    welcomeP.innerHTML = `our food <span>tasts</span> good as it looks`;
    welcomeWindow.appendChild(welcomeP)
}
