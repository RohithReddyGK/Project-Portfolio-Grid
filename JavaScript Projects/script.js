const projects = [
    {
        title: "DOM Manipulation",
        image: "Images/DOM Manipulation.jpeg",
        description: "A simple and elegant Image and Description Viewer built using HTML, CSS, and JavaScript DOM manipulation. This project allows users to scroll through five key national defense and strategy events with rich visuals and contextual descriptions.",
        link: "https://image-and-description-viewer.netlify.app/"
    },
    {
        title: "AI Fields Showcase",
        image: "Images/AI Fields Showcase.png",
        description: "A clean, interactive webpage presenting four major AI fields with real-world examples. Includes a smooth dark/light theme toggle powered by vanilla JavaScript for better user experience.",
        link: "https://ai-fields-theme-toggle.netlify.app/"
    },
    {
        title: "Clock Stopwatch Timer",
        image: "Images/Clock.png",
        description: "Clock is a simple web app that includes a digital clock, stopwatch, and countdown timer—built using HTML, CSS, and JavaScript.",
        link: "https://clock-stopwatch-timer.netlify.app/"

    },
    {
        title: "Age Calculator",
        image: "Images/Age Calculator.png",
        description: "A simple and responsive web-based Age Calculator built using HTML, CSS, and JavaScript. Users can input their date of birth (DOB) and instantly calculate their current age in years, months, and days.",
        link: "https://age-calculator-tool.netlify.app/"
    },
    {
        title: "Random Background Music Player",
        image: "Images/Music Player.webp",
        description: "A simple and interactive web app that lets users play random or selected background music from a playlist. It features a dropdown to choose specific songs, a play button for random playback, and a built-in audio player with controls.",
        link: "https://random-background-music-player.netlify.app/"
    },
    {
        title: "Traffic Light Simulation",
        image: "Images/Traffic Light.jpg",
        description: "A simple and interactive web-based simulation of a traffic light using HTML, CSS, and JavaScript. Users can toggle red, yellow, and green lights manually via buttons. Ideal for beginners to understand basic DOM manipulation and event handling.",
        link: "https://signal-sim.netlify.app/"
    },
    {
        title: "Quiz App",
        image: "Images/Quiz App.webp",
        description: "An interactive web-based quiz app built with HTML, CSS, and JavaScript. It features 10 MCQs, score calculation, dark/light mode, and answer review. Designed to test and enhance Full Stack Development knowledge.",
        link: "https://stackquiz.netlify.app/"
    },
    {
        title: "Recipe App",
        image: "Images/Recipe App.png",
        description: "Recipe App is a user-friendly web application that lets you browse and search Indian recipes effortlessly. You can mark your favorite recipes for quick access and switch between light and dark themes. It’s a simple, clean, and responsive tool for exploring delicious recipes.",
        link: "https://spice-shelf.netlify.app/"
    },
    {
        title: "Image Zoom Modal",
        image: "Images/Image Zoom Modal.jpg",
        description: "ZoomView allows users to hover over an image to zoom in for a closer look, and click on the image to open a fullscreen modal preview. This UI component is perfect for photo galleries, portfolios, or product showcase pages.",
        link: "https://zoom-view.netlify.app/"
    }
];

const container = document.getElementById("projectGrid");

projects.forEach(proj => {
    const card = document.createElement("a");
    card.href = proj.link;
    card.target = "_blank";
    card.className = "project-card";

    card.innerHTML = `
    <img src="${proj.image}" alt="${proj.title}" />
    <div class="content">
    <h3>${proj.title}</h3>
    <p>${proj.description}</p>
    </div>
    `;

    container.appendChild(card);
});