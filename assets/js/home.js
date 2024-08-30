function updateGradient(x, y) {
  const body = document.querySelector(".home");
  if (body) {
    const startColor = `rgba(${Math.floor(255 * x)}, ${Math.floor(255 * (1 - y))}, ${Math.floor(255 * y)}, 1)`;
    const endColor = `rgba(${Math.floor(255 * (1 - x))}, ${Math.floor(255 * y)}, ${Math.floor(255 * (1 - y))}, 1)`;

    body.style.background = `linear-gradient(to bottom left, ${startColor}, ${endColor})`;
  }
}

function handleMouseMove(event) {
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;
  updateGradient(x, y);
}

document.addEventListener("DOMContentLoaded", function() {
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;
  updateGradient(randomX / window.innerWidth, randomY / window.innerHeight);

  document.addEventListener("mousemove", handleMouseMove);
});
