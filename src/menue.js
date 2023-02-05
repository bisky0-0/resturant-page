export default function menue(contentContainer) {

    let menueContainer = document.createElement('div')
    contentContainer.appendChild(menueContainer).setAttribute('id', 'menue-container');

    let selectedDish = document.createElement("div")
    menueContainer.appendChild(selectedDish).setAttribute('id', 'selected-dish');

    let dishContainer = document.createElement('div');
    menueContainer.appendChild(dishContainer).setAttribute('id', 'dish-container')


    let sizes = ['large', 'medium', 'small'];
    let prices = ['20$', '15$', '10$'];
    let names = ['Soft Fluffy Char Siu Bao', 'One Pot Chinese Soy Sauce Chicken', 'ramen seafood', 'praised pork', 'paked pork chop with potatos', 'cilantro'];
    let pics = ['images/charsiubao-6.jpg', 'images/bon-vivant-qom5MPOER-I-unsplash.jpg', 'images/mae-mu-en4qp-aK1h4-unsplash.jpg', 'images/amanda-lim-0xakVv9lpuA-unsplash.jpg', 'images/chester-toh-USXMYHubRtA-unsplash.jpg', 'images/paul-hanaoka-buCCy7UOAbM-unsplash.jpg']
    // let
    for (let i = 0; i < 6; i++) {
        let dish = document.createElement('div')
        dishContainer.appendChild(dish).classList.add('dish')

        let pic = document.createElement('div');
        dish.appendChild(pic).classList.add('pic');
        pic.style.backgroundImage = `url(${pics[i]})`

        let details = document.createElement('div');
        dish.appendChild(details).classList.add('details');

        let name = document.createElement('h2');
        details.appendChild(name).classList.add('name')
        name.textContent = names[i]

        for (let j = 0; j < 3; j++) {
            let para = document.createElement('p')
            details.appendChild(para).textContent = sizes[j]

            let price = document.createElement('span');
            para.appendChild(price).classList.add('price')
            price.textContent = prices[j]
        }

        let order = document.createElement('button');
        details.appendChild(order).classList.add('order')
        order.textContent = 'order now'

        order.addEventListener('click', function () {
            selectedDish.style.cssText = `background-image: url(${pics[i]}); background-size: cover;`
        })
    }
}