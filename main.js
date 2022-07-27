/*Menu Desktop*/
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu () {

    const isAsideClose = aside.classList.contains('inactive');

    if (!isAsideClose) {
        aside.classList.add('inactive');
    }   
    
    desktopMenu.classList.toggle('inactive');
};

/*Menu Movile*/
const menuHamIcon = document.querySelector('.menu');
const movileMenu = document.querySelector('.mobile-menu');

menuHamIcon.addEventListener('click', toggleMovileMenu);

function toggleMovileMenu () {
    const isAsideClose = aside.classList.contains('inactive');

    if (!isAsideClose) {
        aside.classList.add('inactive');
    }   
    movileMenu.classList.toggle('inactive');
};

/* Carrito */
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleCarritoAside () {
    const isMobileMenuClosed = movileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        movileMenu.classList.add('inactive');
    };

    aside.classList.toggle('inactive');
};

/* MAIN CONTENT */
const productList = [];

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Ordenador',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Relog',
    price: 80,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

const cardsContainer = document.querySelector('.cards-container');

for (products of productList) {
    const div = document.createElement('div');
    div.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', products.image);

    const divInfo = document.createElement('div');
    divInfo.classList.add('product-info');

    const divTextContainer = document.createElement('div');
    
    const pPrice = document.createElement('p');
    const pName = document.createElement('p');
    
    pPrice.innerHTML = `$ ${products.price}`;
    pName.innerHTML = products.name;

    divTextContainer.append(pPrice,pName);
    
    const imgContainer = document.createElement('figure');

    const imgLogo = document.createElement('img');
    imgLogo.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    cardsContainer.append(div);
    div.append(img);
    div.append(divInfo);
    divInfo.append(divTextContainer);
    divInfo.append(imgContainer);
    imgContainer.append(imgLogo);
};
