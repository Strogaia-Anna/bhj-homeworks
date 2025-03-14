let btns = document.getElementsByClassName('dropdown__value');
for (let btn of btns) {
    btn.addEventListener('click', handler);

    function handler () {
        btn.nextElementSibling.classList.toggle('dropdown__list_active');
    };

    let links = btn.nextElementSibling.getElementsByClassName('dropdown__link');

    for (let item of links) {
        item.addEventListener('click', linkClickHandler);
    };

    function linkClickHandler (event) {
        event.preventDefault()
        btn.nextElementSibling.classList.toggle('dropdown__list_active');
        btn.textContent = event.target.textContent.trim();
    }
}