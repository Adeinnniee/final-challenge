

/* ------------------------------ GLOBAL VARIABLES --------------------------- */
const mobile_toggle = document.querySelector(".mobile-toggle");
const nav = document.querySelector("#navigation");





/* function to display the navbar on mobile devices*/
mobile_toggle.addEventListener('click', ()=>{

    let attribute = nav.getAttribute('data-visible');

    if(attribute === 'false'){
        nav.setAttribute('data-visible', true);
        mobile_toggle.setAttribute('aria-expanded', true);
    } else{
        nav.setAttribute('data-visible', false);
        mobile_toggle.setAttribute('aria-expanded', false);
    }
})