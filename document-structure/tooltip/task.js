let hasTooltips = document.getElementsByClassName('has-tooltip');
let tooltip = document.getElementsByClassName('tooltip')[0];

for (let hasTooltip of hasTooltips) {
    hasTooltip.addEventListener('click', handler);

    function handler (event) {
        event.preventDefault();
        hasTooltip.appendChild(tooltip);
        // tooltip.setAttribute('data-position', 'bottom');
        tooltip.textContent = hasTooltip.getAttribute('title');
        tooltip.classList.add('tooltip_active');
       
    }
}