
// DARK MODE
const root = document.querySelector('[data-js="root"]');
const themeSwitch = document.querySelector('[data-js="dark-mode"]')

themeSwitch.addEventListener('change', function (){
    root.classList.toggle('ligth-mode');
});
// DARK MODE END*

// ACCORDION
const accordionButton = document.querySelectorAll('[data-js="accordionButton"]')
accordionButton.forEach(accordion => {
    accordion.addEventListener('click', () => {
        if(accordion.classList.contains('active-accordion') == true){
            accordion.classList.remove('active-accordion')
        }else{
            accordionButton.forEach(subAccordion => {
                subAccordion.classList.remove('active-accordion')
            })
            accordion.classList.add('active-accordion')
        }
    })
})
// ACCORDION END*
