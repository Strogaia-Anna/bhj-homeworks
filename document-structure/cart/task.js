let cart = document.getElementsByClassName('cart')[0];
let products = document.getElementsByClassName('product');
let basket = document.getElementsByClassName('cart__products')[0];
let cardProducts = document.getElementsByClassName('cart__product');
for (let i = 0; i < localStorage.length; i++) {
    let storedElement = localStorage.getItem(localStorage.key(i));
    basket.insertAdjacentHTML('afterBegin', storedElement);
    cart.classList.add('cart__active');
    let deleteBtn = cardProducts[0].getElementsByClassName('delete-btn')[0];
    deleteBtn.addEventListener('click', deleteButton)
        function deleteButton () {
            cardProducts[0].remove();
            localStorage.removeItem(localStorage.key(i));
                if (cardProducts.length === 0) {
                    cart.classList.remove('cart__active');
                }
        }

}
for (let product of products) {
    let item = product.getElementsByClassName('product__quantity-controls')[0];
    let value = item.getElementsByClassName('product__quantity-value')[0];
    let dec = item.getElementsByClassName('product__quantity-control_dec')[0];
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
        let pDataId = product.getAttribute('data-id');
        let finded = Array.from(cardProducts).find(it => it.getAttribute('data-id') === pDataId)
        function getElem (dId, src, count) {
            return `
            <div class="cart__product" data-id="${dId}">
                <img class="cart__product-image" src="${src}">
                <div class="cart__product-count">${count}</div>
                <button class="delete-btn">Удалить</button>
            </div>
        `;
        }
        let element;
        
        if (finded) {
            let cardProductCount = finded.getElementsByClassName('cart__product-count')[0];
            cardProductCount.textContent = +cardProductCount.textContent + +value.textContent;
            element = getElem(pDataId, img.getAttribute('src'), cardProductCount.textContent);
        } else {
            element = getElem(pDataId, img.getAttribute('src'), value.textContent);
            basket.insertAdjacentHTML('afterBegin', element);
            let div = cardProducts[0];
            let remove = div.getElementsByClassName('delete-btn')[0];
            remove.addEventListener('click', deleteHandler);
            function deleteHandler () {
                div.remove();
                localStorage.removeItem(pDataId);
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

        localStorage.setItem(pDataId, element);
    }
}
