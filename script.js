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