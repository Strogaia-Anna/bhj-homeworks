let sizes = document.getElementsByClassName('font-size');
let book = document.getElementById('book');
for (let size of sizes) {
    size.addEventListener('click', handler);

    function handler (event) {
        event.preventDefault();
        for (let s of sizes) {
            s.classList.remove('font-size_active')
        }
        size.classList.add('font-size_active');
        let dataSize = size.getAttribute('data-size');
        book.classList.remove('book_fs-small');
        book.classList.remove('book_fs-big');
        if (dataSize){
            book.classList.add(`book_fs-${dataSize}`)
        }
        
    }
}

let colorControl = document.getElementsByClassName('book__control_color')[0];
let backgroundControl = document.getElementsByClassName('book__control_background')[0];
let texts = colorControl.getElementsByClassName('color');
let bgColors = backgroundControl.getElementsByClassName('color');

for (let text of texts) {
    text.addEventListener('click', handler);
    
    function handler (event) {
        event.preventDefault();
        for (let t of texts) {
            t.classList.remove('color_active');
        }
        text.classList.add('color_active');
        let dataTextColor = text.getAttribute('data-text-color');
        book.classList.remove('book_color-black');
        book.classList.remove('book_color-gray');
        book.classList.remove('book_color-whitesmoke');
        book.classList.add(`book_color-${dataTextColor}`);
    }
}

for (let bgColor of bgColors) {
    bgColor.addEventListener('click', handler);

    function handler (event) {
        event.preventDefault();
        for (let b of bgColors) {
            b.classList.remove('color_active');
        }
        bgColor.classList.add('color_active');
        let dataBgColor = bgColor.getAttribute('data-bg-color');
        book.classList.remove('book_bg-black');
        book.classList.remove('book_bg-gray');
        book.classList.remove('book_bg-white');
        book.classList.add(`book_bg-${dataBgColor}`);
    }
}
