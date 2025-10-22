document.addEventListener("DOMContentLoaded", function() {
  AOS.init({
    duration: 500,
    
  });
});

let alreadyclick = false;
document.getElementById('nav').addEventListener('click', function (e) {
    if(!alreadyclick){
        document.getElementById('page').style.opacity = '1';
        alreadyclick = true;
    } else{
        document.getElementById('page').style.opacity = '0';
        alreadyclick = false;
    }
});;


const gradient = document.getElementById('gradient');
gradient.addEventListener('mousemove', (e) => {
    const rect = gradient.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    gradient.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, #ffffff, #404040, #000000, #000000)`;
});

gradient.addEventListener('mouseleave', () => {
    gradient.style.background = `radial-gradient(circle at center, #ffffff, #404040, #000000, #000000)`;
});

const home = document.getElementById('home');
const project = document.getElementById('project');
const experience = document.getElementById('experience');

home.addEventListener('click', function (e) {
    window.location.href = "index.html";
});
project.addEventListener('click', function (e) {
    window.location.href = "project.html";
});
experience.addEventListener('click', function (e) {
    window.location.href = "experience.html";
});

const linkedin = document.getElementById('linkedin');
const github = document.getElementById('github');
linkedin.addEventListener('click', function (e) {
    window.location.href = "https://www.linkedin.com/in/kanzulinformaticsengineer";
});
github.addEventListener('click', function (e) {
    window.location.href = "https://github.com/Kzl-ll";
});
