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

const tags = document.querySelectorAll("div.Project_odd, div.Project_even, h2.title")

tags.forEach((tag) => {
    observer.observe(tag)
})