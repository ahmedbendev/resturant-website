//Select element function
const lines = document.querySelector(".lines")
const ulnavbar = document.querySelector(".ulnavbar")
const linavbars = document.querySelectorAll(".linavbar")

lines.addEventListener("click",() => {
ulnavbar.classList.toggle("open");
linavbars.forEach(linavbar => {
    linavbar.classList.toggle("fade");
});
});


// animation

window.sr = ScrollReveal();

sr.reveal('.animate-left',{
    origin:'left',
    duration: 1000,
    distance: '25rem',
    delay:600
});

sr.reveal('.animate-right',{
    origin:'right',
    duration: 1000,
    distance: '25rem',
    delay:600
});

sr.reveal('.animate-top',{
    origin:'top',
    duration: 1000,
    distance: '25rem',
    delay:600
});

sr.reveal('.animate-bottom',{
    origin:'bottom',
    duration: 1000,
    distance: '25rem',
    delay:600
});