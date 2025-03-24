let reveals = document.getElementsByClassName('reveal');

document.addEventListener('scroll', function () {
    for (let reveal of reveals) {
        const { innerHeight } = window;
        const { top } = reveal.getBoundingClientRect();
        if (top < innerHeight && top > 0) {
        reveal.classList.add("reveal_active");
        } else {
        reveal.classList.remove("reveal_active");
        }
    }
})

