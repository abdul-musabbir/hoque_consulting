"use strict";
window.onload = function () {
    // document.title = "Hoque Consulting";
    window.scrollTo(0, 0);
};
/**
 * make a react js useState hook
 */
function useState(initialValue) {
    let state = initialValue;
    function setState(newValue) {
        state = newValue;
    }
    function getState() {
        return state;
    }
    return [getState, setState];
}
// Menu bar control
const menuButton = document.getElementById("menu-button");
const menuContainer = document.getElementById("menu-container");
menuButton === null || menuButton === void 0 ? void 0 : menuButton.addEventListener("click", () => {
    if (menuContainer === null || menuContainer === void 0 ? void 0 : menuContainer.classList.contains("hidden")) {
        // Show menu
        menuContainer.classList.remove("hidden");
        menuButton.innerHTML = `<i class="fa-solid fa-xmark text-2xl"></i>`;
    }
    else {
        // Hide menu
        menuContainer === null || menuContainer === void 0 ? void 0 : menuContainer.classList.add("hidden");
        menuButton.innerHTML = `<i class="fa-solid fa-bars text-2xl"></i>`;
    }
});
// console.log();
// header scroll
const header = document.getElementById("header");
function handleScroll() {
    const isScrolled = window.scrollY > 0;
    header === null || header === void 0 ? void 0 : header.classList.toggle("backdrop-blur-2xl", isScrolled);
    header === null || header === void 0 ? void 0 : header.classList.toggle("bg-blacks", isScrolled);
    header === null || header === void 0 ? void 0 : header.classList.toggle("shadow-xl", isScrolled);
}
// Monitor scroll position and check on load
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
// our capabilities
const capabilitiesContainer = document.getElementById("capabilities-container");
const fragment = document.createDocumentFragment();
const ourCapabilitiesArr = [
    "Web design & UI",
    "Social Media visuals",
    "Infographics",
    "Design system",
    "Email design",
    "Stationery",
    "Icons",
    "Packaging",
    "Signage",
    "Brochures",
    "Logos & Branding",
    "Digital ads",
    "wireframes",
];
ourCapabilitiesArr.forEach((item) => {
    let div = document.createElement("div");
    div.className = "bg-greens text-blacks text-lg px-5 py-1.5 rounded-xl";
    div.textContent = item;
    fragment.appendChild(div);
});
capabilitiesContainer === null || capabilitiesContainer === void 0 ? void 0 : capabilitiesContainer.appendChild(fragment);
// benifites 9 list
const benefitsContainer = document.getElementById("benefits-container");
const benefitsFragment = document.createDocumentFragment();
const arr = [
    {
        title: "Web Development",
        des: "We develop high-performance, custom websites tailored to your business needs. With a focus on responsive design, SEO-friendly structures, and optimized security, our websites deliver exceptional user experiences while driving traffic and conversions.",
        url: "../assets/icons/square-code.svg",
    },
    {
        title: "App Architecture & Development",
        des: "Build scalable, user-friendly mobile apps with our app development services. We specialize in creating custom applications compatible with both iOS and Android, integrating unique features that align with your business goals for long-term growth.",
        url: "../assets/icons/app-store-ios.svg",
    },
    {
        title: "Graphic Design",
        des: "Our graphic design services bring your brand’s vision to life with visually stunning and memorable designs. From creating unique brand identities and logos to crafting social media assets, we ensure your visuals resonate with your audience and reinforce your brand image.",
        url: "../assets/icons/pencil-paintbrush.svg",
    },
    {
        title: "Video Editing",
        des: "Elevate your brand storytelling with professional video editing. Our team delivers high-quality videos enhanced with custom transitions, animations, and effects to capture your audience's attention and communicate your message effectively.",
        url: "../assets/icons/film.svg",
    },
    {
        title: "Digital Marketing",
        des: "Our digital marketing solutions are designed to increase your brand’s reach and engagement. From social media marketing to content campaigns, we create comprehensive strategies that connect with your audience and drive measurable results.",
        url: "../assets/icons/megaphone.svg",
    },
    {
        title: "Search Engine Optimization (SEO)",
        des: "Boost your visibility on search engines with our expert SEO services. We enhance your website’s performance with keyword optimization, on-page and off-page SEO, and competitive analysis to drive organic traffic and improve rankings.",
        url: "../assets/icons/career-growth.svg",
    },
];
arr.map((item, index) => {
    let div = document.createElement("div");
    div.className =
        "w-full h-full flex sectionssss transition-all duration-300 opacity-0";
    div.innerHTML = `<div class="w-full h-full pb-5 border-[#2d2d2d8e]
  lg:border-b lg:border-l ${[0, 3].includes(index) && "lg:border-l-0"}
  ${[3, 4, 5].includes(index) && "lg:border-b-0 lg:py-10"}
  ${[0, 1, 2].includes(index) && "lg:py-10"}
  md:border-b md:border-l ${[0, 2, 4].includes(index) && "md:border-l-0 md:pl-0 md:pr-3"} ${[4, 5].includes(index) && "md:border-b-0"} 
  ${[2, 3, 4, 5].includes(index) && "md:py-8"}
  ${[1, 2, 4, 5].includes(index) && "lg:pl-10"}
  ${[1, 3, 4].includes(index) && "lg:pr-3"}
  ${[1, 3, 5].includes(index) && "md:pl-10"}
  ${[3].includes(index) && "lg:pl-0"}
  border-b
  ">
                              <div class="flex flex-col gap-4"
                              }">
                                <div>
                                <img
                                  class="w-14"
                                  src="${item === null || item === void 0 ? void 0 : item.url}"
                                  alt=""
                                />
                              </div>

                              <div class="space-y-2">
                                <h3 class="lg:text-xl">${item === null || item === void 0 ? void 0 : item.title}</h3>
                                <p class="text-[#9593A4] font-normal sm:w-72 lg:text-lg md:w-auto">
                                  ${item === null || item === void 0 ? void 0 : item.des}
                                </p>
                              </div>
                              </div>
                            </div>`;
    benefitsFragment.appendChild(div);
});
benefitsContainer === null || benefitsContainer === void 0 ? void 0 : benefitsContainer.appendChild(benefitsFragment);
// faq sections
const faqSection = document.getElementById("faq-sections");
const faqFragment = document.createDocumentFragment();
const faqData = [
    {
        title: "What services does Hoque Consulting offer?",
        des: "Hoque Consulting provides a wide range of digital solutions to help your business succeed. We specialize in web development, offering high-performance, customized websites; app architecture and development with scalable solutions for both iOS and Android; graphic design to elevate your brand identity; professional video editing for compelling storytelling; comprehensive digital marketing strategies to increase brand engagement; and search engine optimization (SEO) services to enhance your search engine visibility and drive organic traffic.",
    },
    {
        title: "How can Hoque Consulting help my business grow?",
        des: "At Hoque Consulting, we create tailored strategies to support your business growth. Whether you're looking to improve your online presence, build a new website, develop an app, or boost your digital marketing efforts, we focus on delivering measurable results that will drive long-term success for your brand.",
    },
    {
        title: "What makes Hoque Consulting different from other agencies?",
        des: "With over 20 years of experience, Hoque Consulting takes a client-first approach. We prioritize innovation, transparency, and collaboration, ensuring that every solution we provide is tailored to your specific needs. Our team has proven expertise in diverse industries, with a track record of delivering successful projects that help businesses thrive in the digital world.",
    },
    {
        title: "How do I get started with a project?",
        des: "Getting started with a project is easy. Simply book a free consultation with us. During this session, we’ll learn about your goals and challenges, discuss your vision, and create a tailored strategy for your project. We’ll guide you through the entire process, from the initial idea to the final delivery.",
    },
    {
        title: "What industries do you work with?",
        des: "We work with businesses across a wide variety of industries, including technology, retail, healthcare, real estate, and more. Whether you're a startup or an established brand, we have the expertise to help you succeed.",
    },
];
let openFaqSection = 2; // Tracks the currently open section
function renderFaqs() {
    // Clear the FAQ section before rendering
    faqSection.innerHTML = "";
    faqData.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("bg-blacks", "px-6", "overflow-hidden", "rounded-xl", "transition-all", "duration-300");
        const isOpen = openFaqSection === index; // Check if this section is open
        // Construct the inner content
        div.innerHTML = `
      <button class="w-full h-20 flex items-center justify-between cursor-pointer">
        <p class="select-none">${item.title}</p>
        <div class="size-8 bg-greens rounded-full text-blacks flex items-center justify-center text-2xl">
          ${isOpen
            ? `<i class="fi fi-rr-angle-small-up flex"></i>`
            : `<i class="fi fi-rr-angle-small-down flex"></i>`}
        </div>
      </button>
      ${isOpen
            ? `
        <div class="px-4 pb-4 mt-3">
          <p>${item.des}</p>
        </div>
      `
            : ""}
    `;
        // Add an event listener to the button
        div
            .querySelector("button")
            .addEventListener("click", () => toggleFaq(index));
        // Append to the fragment
        faqFragment.appendChild(div);
    });
    // Append the fragment to the main section
    faqSection.appendChild(faqFragment);
}
function toggleFaq(index) {
    // Toggle the section: close if already open, otherwise open
    openFaqSection = openFaqSection === index ? -1 : index;
    renderFaqs();
}
// Initial render
renderFaqs();
