console.log("JS работает");


// =========================
// NAVBAR
// =========================

const navbar = document.querySelector("nav");

if(navbar){

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.background = "rgba(5,18,34,.92)";
        navbar.style.height = "75px";

    } else {

        navbar.style.background = "rgba(7,25,46,.55)";
        navbar.style.height = "90px";

    }

});

}



// =========================
// FADE ANIMATION
// =========================

const elements = document.querySelectorAll(".fade-up");


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});


elements.forEach(el=>observer.observe(el));




// =========================
// APPLE MEGA MENU
// =========================


const menuData = {

surveys:{

title:"Marine Surveys",

description:
"Independent marine surveying services for ship owners, charterers and insurers.",

links:[

["Cargo Supervising","cargo-supervising.html"],

["Condition Surveys","condition-surveys.html"],

["Owners Representation","owners-representation.html"],

["Marine Inspections","marine-inspections.html"]

]

},



cranes:{

title:"Crane Inspections",

description:
"Inspection and certification of ship cranes, lifting appliances and lifting equipment.",

links:[

["Ship Crane Inspections","ship-crane.html"],

["Lifting Equipment","lifting-equipment.html"]

]

},



bulk:{

title:"Break Bulk",

description:
"Professional supervision of heavy lift and break bulk cargo operations.",

links:[

["Loading Supervision","loading-supervision.html"],

["Heavy Lift","heavy-lift.html"],

["Lashing Verification","lashing.html"]

]

},



investigations:{

title:"Marine Investigations",

description:
"Independent investigations of marine incidents and technical failures.",

links:[

["Damage Investigation","damage-investigation.html"],

["Root Cause Analysis","root-cause.html"],

["Technical Reporting","technical-report.html"]

]

},



compliance:{

title:"Compliance",

description:
"Compliance inspections and support for international maritime regulations.",

links:[

["Marshall Islands","marshall.html"],

["Safety Inspections","safety.html"],

["Compliance Support","compliance-support.html"]

]

},



inspectiontypes:{

title:"Inspection Types",

description:
"Specialised inspection services covering vessels, navigation and condition assessments.",

links:[

["Pre-Vetting Inspections","pre-vetting.html"],

["Navigation Assessment","navigation-assessment.html"],

["Condition Inspection","condition-inspection.html"],

["Pre-Sale Inspection","pre-sale.html"],

["Pre-Purchase Inspection","pre-purchase.html"]

]

}

};





const buttons = document.querySelectorAll(".menu-item");

const title = document.getElementById("menu-title");

const description = document.getElementById("menu-description");

const links = document.getElementById("menu-links");





buttons.forEach(button=>{


button.addEventListener("mouseenter",()=>{


const data = menuData[button.dataset.menu];


if(!data) return;



buttons.forEach(btn=>{

btn.classList.remove("active");

});


button.classList.add("active");



title.textContent = data.title;


description.textContent = data.description;



links.innerHTML = "";



data.links.forEach(item=>{


const a = document.createElement("a");


a.href = item[1];


a.textContent = item[0];


links.appendChild(a);


});


});


});
const menuBtn = document.querySelector(".mobile-menu-btn");

const navLinks = document.querySelector(".nav-links");


if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}
const backButton = document.querySelector(".mobile-back");


if(backButton){

backButton.addEventListener("click",()=>{

window.history.back();

});

}
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});
