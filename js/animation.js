"use strict";
const sectionssss = document.querySelectorAll(".sectionssss");
console.log(sectionssss);
const observer = new IntersectionObserver((item) => {
    item.forEach((i) => {
        if (i.isIntersecting) {
            i.target.classList.add("show");
            // i.target.classList.remove("show");
        }
        else {
            i.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.5,
});
sectionssss.forEach((section) => {
    observer.observe(section);
});
