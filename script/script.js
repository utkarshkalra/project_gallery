import projects_data from "./projects.js";

const tech = (arr) => {
  let r = "";
  arr.forEach((name) => {
    r += `<span>${name}</span> `;
  });
  return r;
};

const projects = () => {
  const div1 = document.getElementById("test");
  let q = "";
  projects_data.forEach((project) => {
    const { id, name, link, image, techStack, desc } = project;
    q +=
      `<div class="project">` +
      `<div class="image">` +
      `<img src=${image} alt="${name}" onclick="window.open('${link}', '_blank');"></div>` +
      `<div class="details">` +
      `<a href="${link}" target="_blank"><h2>${name} <i id="show" class="fas fa-external-link-alt"></i></h2></a>` +
      `<p>${desc}</p>` +
      `</div><br>` +
      `<div class="tech">
      <h3>Tech Stack:</h3>
      ${tech(techStack)}
      </div>` +
      `</div>`;
  });
  div1.innerHTML = q;
};

projects();

//scrolltop

var mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
