document.getElementById("scroll-link1").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("target-section1").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scroll-link2").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("target-section2").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scroll-link3").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("target-section3").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scroll-link4").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("target-section4").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scroll-link5").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("target-section5").scrollIntoView({ behavior: "smooth" });
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
            entry.target.classList.remove("not-in-view")
        } else {
            entry.target.classList.remove("in-view")
            entry.target.classList.add("not-in-view")
        }
    })
}, {
    rootMargin: "0px",
    threshold: [0, 0.1, 1]
})

const tags = document.querySelectorAll("div.Project_1, div.Project_2, div.Project_3, div.Project_4, div.Project_5, div.Project_6, div.experience, div.My_Skills_Textbox1, div.My_Skills_Textbox2")

tags.forEach((tag) => {
    observer.observe(tag)
})

