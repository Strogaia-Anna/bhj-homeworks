let tabs = Array.from(document.getElementsByClassName('tab'));
let tabContents = document.getElementsByClassName('tab__content');
for (let tab of tabs) {
    tab.addEventListener('click', handler);

    function handler () {
        for (let i = 0; i < tabs.length; i++){
            tabs[i].classList.remove('tab_active');
            tabContents[i].classList.remove('tab__content_active');
        }
        tab.classList.add('tab_active');
        tabContents[tabs.indexOf(tab)].classList.add('tab__content_active');

    }
};


    