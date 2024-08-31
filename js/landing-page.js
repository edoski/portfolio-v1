const bottomShineContainer = document.querySelector('.bottom-shine-container');
const heroContainer = document.querySelector('.hero-container');

let stop1 = 50;
let stop2 = 50;
let direction1 = 0.05;
let direction2 = 0.05;
let angle1 = 40;
let angle2 = 200;
let time = 0;

function animateGradients() {
    time += 0.01;
    stop1 += direction1 + Math.sin(time) * 0.05;
    stop2 += direction2 + Math.cos(time) * 0.05;
    angle1 += Math.sin(time) * 0.01;
    angle2 += Math.cos(time) * 0.01;

    if (stop2 > 53 || stop2 < 49) direction2 *= -1;
    if (stop1 > 53 || stop1 < 49) direction1 *= -1;

    if (window.innerWidth <= 755) {
        heroContainer.style.background = `
            linear-gradient(${angle2 + 10}deg, var(--accent-color), var(--background-color) ${stop2 - 5}%)
        `;
    } else {
        heroContainer.style.background = `
            linear-gradient(${angle2 - 10}deg, var(--accent-color), var(--background-color) ${stop2 - 5}%)
        `;
    }

    bottomShineContainer.style.background = `
        linear-gradient(${angle1 - 20}deg, var(--accent-color), var(--background-color) ${stop1 - 15}%)
    `;
	
    requestAnimationFrame(animateGradients);
}

animateGradients();

const themeContainer = document.querySelector('.theme-container');
const sun = document.querySelector('.fa-sun');
const moon = document.querySelector('.fa-moon');

function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    if (newTheme === 'dark') {
        moon.style.display = 'none';
        sun.style.display = 'block';
    } else {
        moon.style.display = 'block';
        sun.style.display = 'none';
    }
}

// const projects = document.querySelectorAll('.project');
// const project = document.querySelector('.project');

// document.addEventListener('mouseover', (e) => {
//     if (e.target.classList.contains('project')) {
//         project.style.background = 'var(--accent-color)';
//     }
// });

themeContainer.addEventListener('click', () => {
    setTheme();
});

// set initial theme to dark
setTheme();