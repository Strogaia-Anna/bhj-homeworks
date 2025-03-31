let cart = document.getElementsByClassName('cart')[0];
let products = document.getElementsByClassName('product');
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
    

    let btns = product.getElementsByClassName('product__add');
    
    for (let btn of btns) {
        btn.addEventListener('click', handler);
        function handler () {
            let basket = document.getElementsByClassName('cart__products')[0];
            let cardProducts = document.getElementsByClassName('cart__product');
            let p_data_id = product.getAttribute('data-id');
            for (let cardProduct of cardProducts) {
                let data_id = cardProduct.getAttribute('data-id');
                if (data_id == p_data_id) {
                    let cardProductCount = cardProduct.getElementsByClassName('cart__product-count')[0];
                    cardProductCount.textContent = +cardProductCount.textContent + +value.textContent;
                    return;
                }
 
            }
            let div = document.createElement('div');
            div.classList.add('cart__product');
            div.setAttribute('data-id', p_data_id);
            let img = product.getElementsByClassName('product__image')[0].cloneNode(false);
            img.classList.add('cart__product-image');
            div.appendChild(img);
            let count = document.createElement('div');
            count.classList.add('cart__product-count');
            count.textContent = value.textContent;
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Удалить';
            deleteBtn.classList.add('deleteBtn');
            deleteBtn.addEventListener ('click', deleteHandler);
            function deleteHandler () {
                div.remove();
                if (cardProducts.length === 0) {
                    cart.classList.remove('cart__active');
                }
            }
            div.appendChild(count);
            div.appendChild(deleteBtn);
            basket.appendChild(div);
            cart.classList.add('cart__active');
        }
    }
}
