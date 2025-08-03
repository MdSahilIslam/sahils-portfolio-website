var typed = new Typed(".typing",{
    strings : ["","Web Developer"," ","Web Designer","Freelancer"],
    typeSpeed : 120,
    backSpedd : 60,
    loop : true
})

/* =============== sidebar ================*/

const sidebar = document.querySelector(".sidebar");
const nav_list = document.querySelectorAll(".nav2 li");
console.log(nav_list);

nav_list.forEach((li) => {
    const a = li.querySelector("a");
    a.addEventListener("click",function() {
        nav_list.forEach((item) => {
            const b = item.querySelector("a");
            if (b.classList.contains("active")) {
                b.classList.remove("active");
            }
        })
        this.classList.add("active");
        sidebar.classList.toggle("sidebar-small");
        nav_toggle.classList.toggle("moove");

    })
})

/* ============== Nav Toggler============*/

const nav_toggle = document.querySelector(".nav-toggle");


nav_toggle.addEventListener("click",() => {
        sidebar.classList.toggle("sidebar-small");
        nav_toggle.classList.toggle("moove");
})

/*================= changing nav with scroll ==============*/

const sections = document.querySelectorAll("section")

let active = "home"
window.addEventListener("scroll" ,() => {
    
    sections.forEach((section) => {
        if (window.scrollY >= (section.offsetTop-section.clientHeight/8)){
            active = section.id;

    }});


    nav_list.forEach((item => {
        if  (item.querySelector("a").classList.contains("active")) {
            item.querySelector("a").classList.remove("active");
        }

        if (item.querySelector("a").getAttribute("href") === ("#"+active)){
            item.querySelector("a").classList.add("active");
        }
    }))


})

/* ================= Sending contact form data to google sheet =============*/

const notify = document.querySelector(".noti-div");
const notification = document.querySelector(".notification");

const scriptURL = 'https://script.google.com/macros/s/AKfycbyd2eZnzomvzy-1ctOZNJfFnWZOIoQHQwgVzfOUturFU-kGEsXHGadofyFqHiN-Vqs8mQ/exec'

const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        notification.innerHTML = "Message sent successfully";
        notify.classList.remove("showed"); 
        setTimeout(() => {      
            notify.classList.add("showed");

        },2500);
        form.reset()
        

    })
    .catch(error => {
        notification.innerHTML = "Something went wrong";
        notification.style.backgroundColor = "red";
        notify.classList.remove("showed"); 
        setTimeout(() => {      
            notify.classList.add("showed");

        },2500);
    })
})