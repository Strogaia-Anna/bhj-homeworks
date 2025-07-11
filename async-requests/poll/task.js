let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let question = document.getElementById('poll__title');
        let answers = document.getElementById('poll__answers');
        let json = JSON.parse(xhr.responseText);
        question.insertAdjacentText('afterbegin', json.data.title);
        for (let value of json.data.answers) {
            let element = getElem(value);
            answers.insertAdjacentHTML('afterbegin', element);
            answers.children[0].addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            });
        }
    }
});

function getElem (data) {
    return `
        <button class="poll__answer">${data}</button>
`;
}