function getElem (data) {
    return `
    <div class="cart__product" data-id="${data.id}">
        <img class="cart__product-image" src="${data.imgSrc}">
        <div class="cart__product-count">${data.count}</div>
        <button class="delete-btn">Удалить</button>
    </div>
`;
}
let cart = document.getElementsByClassName('cart')[0];
// коллекция продуктов
let products = document.getElementsByClassName('product');
// корзина
let basket = document.getElementsByClassName('cart__products')[0];
// коллекция товаров в корзине
let cardProducts = document.getElementsByClassName('cart__product');
let lSProducts = JSON.parse(localStorage.getItem('products')) || [];
for (let i = 0; i < lSProducts.length; i++) {
    let storedElementData = lSProducts[i];
    let storedElement = getElem(storedElementData);
    basket.insertAdjacentHTML('afterBegin', storedElement);
    cart.classList.add('cart__active');
    let deleteBtn = cardProducts[0].getElementsByClassName('delete-btn')[0];
    deleteBtn.addEventListener('click', deleteButton)
        function deleteButton () {
            cardProducts[0].remove();
            lSProducts.splice(lSProducts.findIndex(sed => sed.id === storedElementData.id), 1);
            localStorage.setItem('products', JSON.stringify(lSProducts));
            if (cardProducts.length === 0) {
                cart.classList.remove('cart__active');
            }
        }
}
// цикл перебора всех продуктов в списке
for (let product of products) {
    // контроль конкретного продукта
    let item = product.getElementsByClassName('product__quantity-controls')[0];
    // количество конкретного продукта
    let value = item.getElementsByClassName('product__quantity-value')[0];
    // уменьшение количества продукта
    let dec = item.getElementsByClassName('product__quantity-control_dec')[0];
    // увеличение количества продукта
    let inc = item.getElementsByClassName('product__quantity-control_inc')[0];
    dec.addEventListener('click', () => {
        if (+value.textContent > 1) {
            value.textContent = +value.textContent - 1;
        }
    });

    inc.addEventListener('click', () => {
            value.textContent = +value.textContent + 1;
    });
    
    let btn = product.getElementsByClassName('product__add')[0];
    
    btn.addEventListener('click', handler);
    function handler () {
        let img = product.getElementsByClassName('product__image')[0];
        // получение атрибута артикула (id)
        let pDataId = product.getAttribute('data-id');
        let finded = Array.from(cardProducts).find(it => it.getAttribute('data-id') === pDataId)
        
        let element;
        let elementData = {
            id: pDataId,
            imgSrc: img.getAttribute('src')
        };
        
        if (finded) {
            let cardProductCount = finded.getElementsByClassName('cart__product-count')[0];
            cardProductCount.textContent = +cardProductCount.textContent + +value.textContent;
            elementData.count = +cardProductCount.textContent;
            element = getElem(elementData);
        } else {
            elementData.count = +value.textContent;
            element = getElem(elementData);
            basket.insertAdjacentHTML('afterBegin', element);
            let div = cardProducts[0];
            let remove = div.getElementsByClassName('delete-btn')[0];
            remove.addEventListener('click', deleteHandler);
            function deleteHandler () {
                cardProducts[0].remove();
                lSProducts.splice(lSProducts.findIndex(sed => sed.id === elementData.id), 1);
                localStorage.setItem('products', JSON.stringify(lSProducts));
                if (cardProducts.length === 0) {
                    cart.classList.remove('cart__active');
                }
            }
            cart.classList.add('cart__active');
        }              
       
        let coordinatesInList = img.getBoundingClientRect();
        let copyImg = img.cloneNode(false);
        copyImg.style.position = "absolute";
        copyImg.style.left = coordinatesInList.x;
        copyImg.style.top = `${coordinatesInList.y}px`;
        document.body.append(copyImg);
        let imgInBasket = cart.getElementsByClassName('cart__product-image')[0];
        let coordinatesInBasket = imgInBasket.getBoundingClientRect();
        let diffX = coordinatesInBasket.x - coordinatesInList.x;
        let diffY = coordinatesInList.y - coordinatesInBasket.y;
        let steps = 10;
        let stepX = diffX / steps;
        let stepY = diffY / steps;
        function step () {
            let currentCoordinates = copyImg.getBoundingClientRect();
            copyImg.style.left = `${currentCoordinates.x + stepX}px`;
            copyImg.style.top = `${currentCoordinates.y - stepY}px`;
            if (currentCoordinates.x < coordinatesInBasket.x && currentCoordinates.y > coordinatesInBasket.y) {
                requestAnimationFrame(step);
            }
            else {
                copyImg.remove();
            }
        }
        requestAnimationFrame(step);
        let elementDataIndex = lSProducts.findIndex(sed => sed.id === elementData.id);
        if (elementDataIndex === -1) {
            lSProducts.push(elementData);
        } else {
            lSProducts[elementDataIndex].count = elementData.count;
        }
        localStorage.setItem('products', JSON.stringify(lSProducts));
        
    }
}
