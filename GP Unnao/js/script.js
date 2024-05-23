let bars = document.querySelector("#bars");

let facultyCardOdd = document.querySelectorAll(".faculty-card:nth-child(odd)");
let facultyCardEven = document.querySelectorAll(
  ".faculty-card:nth-child(even)"
);
facultyCardOdd.forEach((card) => {
  card.setAttribute("data-aos", "fade-right");
});
facultyCardEven.forEach((card) => {
  card.setAttribute("data-aos", "fade-left");
});

bars.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("display-block");
});
