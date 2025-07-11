const progress = document.getElementById( 'progress' );
document.forms[0].addEventListener('submit', (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener("progress", (e) => {
        progress.value = e.loaded / e.total;
    });
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    const formData = new FormData(document.forms[0]);

    xhr.send(formData);
});