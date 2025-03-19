let reveals = document.getElementsByClassName('reveal');

document.addEventListener('scroll', function () {
    for (let reveal of reveals) {
        let {top, bottom} = reveal.getBoundingClientRect();

        if (bottom < 0) {
           continue;
        }
        if (top > window.innerHeight) {
            continue;
        }
        reveal.classList.add('reveal_active');
    }

})