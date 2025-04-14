document.getElementById("scroll-link1").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("target-section1").scrollIntoView({ behavior: "smooth" });
});

console.log('Run')