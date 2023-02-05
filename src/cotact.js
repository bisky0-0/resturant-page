export default function contact(contentContainer) {
    let contactsWindow = document.createElement('div');
    contentContainer.appendChild(contactsWindow).setAttribute('id', 'contacts-window')
    contactsWindow.style.backgroundImage = `url(images/dark-background-with-plate-eggs-pasta.jpg)`;

    let contactsContainer = document.createElement('dive')
    contactsWindow.appendChild(contactsContainer).setAttribute('id', 'contacts-container')

    let contactsInfo = ['hong kong resturant', '+0123456789', 'potato island', '25-flowers-street']
    let contacts = document.createElement('div');
    contactsContainer.appendChild(contacts).classList.add('contacts');
    for (let i = 0; i < 4; i++) {
        let para = document.createElement('p');
        contacts.appendChild(para).classList.add('contacts-info');
        para.textContent = contactsInfo[i];
        i === 0 ? para.classList.add('title') : 0;
    }

    let location = document.createElement('div');
    contactsContainer.appendChild(location).setAttribute('id', 'location')

    let copyRights = document.createElement('div')
    contactsContainer.appendChild(copyRights).classList.add('copy-rights')

    let myGitHubAcc = document.createElement('a');
    myGitHubAcc.href = `https://github.com/bisky0-0`

    myGitHubAcc.textContent = 'bisky kruager'

    copyRights.textContent = `built by `
    copyRights.appendChild(myGitHubAcc)

}