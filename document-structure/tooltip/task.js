let hasTooltips = document.getElementsByClassName('has-tooltip');
let tooltip = document.getElementsByClassName('tooltip')[0];

for (let hasTooltip of hasTooltips) {
    hasTooltip.addEventListener('click', handler);

    function handler (event) {
        event.preventDefault();
        if (tooltip.textContent !== hasTooltip.getAttribute('title')) {
            let coordinates = hasTooltip.getBoundingClientRect();
            tooltip.style.top = `${coordinates.top + 20}px`
            tooltip.style.left = `${coordinates.x}px`
            hasTooltip.after(tooltip);
            tooltip.textContent = hasTooltip.getAttribute('title');
        }
        tooltip.classList.toggle('tooltip_active');
       
    }
}