const setting_icon = document.querySelector(".style-switcher-toggle");
const stytle_switcher = document.querySelector(".style-switcher");

setting_icon.addEventListener("click" ,() => {
    stytle_switcher.classList.toggle("open");
})

window.addEventListener("scroll",() => {
    if (stytle_switcher.classList.contains("open")){
        stytle_switcher.classList.remove("open");
    }
    
});


/* ====Theme Change====*/

const theme_css = document.querySelectorAll(".alternate-theme");


function setStyle(color) {
    theme_css.forEach((itm) => {
        if (color === itm.getAttribute("title")) {
        itm.removeAttribute("disabled");
        console.log(itm)
        }else {
            itm.setAttribute("disabled","true")
        }
    
    })
    }


/*====Dark Mode====*/

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click",() => {
    dayNight.querySelector("i").classList.toggle("fa-moon");
    dayNight.querySelector("i").classList.toggle("fa-sun");
    document.querySelector("body").classList.toggle("dark");
});

window.addEventListener("load",() => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})