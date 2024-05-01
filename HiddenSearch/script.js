const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
console.log(btn);
console.log(input);
btn.addEventListener("click", () => {
  if (input.style.display === "none") {
    input.style.display = "block";
  } else {
    input.style.display = "none";
  }
});
