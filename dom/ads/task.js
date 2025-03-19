let rotators = document.getElementsByClassName('rotator');
for (let rotator of rotators) {
    setInterval(() => {
      let active = rotator.getElementsByClassName('rotator__case_active')[0];
      active.classList.toggle('rotator__case_active');
      let item;
      if (active.nextElementSibling){
        item = active.nextElementSibling;
      } else {
        item = rotator.firstElementChild;
      }
      item.classList.toggle('rotator__case_active');
      let color = item.getAttribute('data-color');
      item.setAttribute('style', `color:${color}`)
    }, 1000)
}

