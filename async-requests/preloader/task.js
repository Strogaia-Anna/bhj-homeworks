let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
let img = document.getElementById('loader');
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        img.classList.remove('loader_active');
        let json = JSON.parse(xhr.responseText);
        let items = document.getElementById('items');
        for (let value of Object.values(json.response.Valute)) {
            let element = getElem(value);
            items.insertAdjacentHTML('beforebegin', element);
        }
        
    }
});

function getElem (data) {
    return `
    <div class="item">
        <div class="item__code">${data.CharCode}</div>
        <div class="item__value">${data.Value}</div>
        <div class="item__currency">руб.</div>
    </div>
`;
}