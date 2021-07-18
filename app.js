const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "blue", "purple", "pink","rgb(165, 42, 42)","hsl(300, 76%, 72%)", "#ffff00"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}