document.addEventListener("DOMContentLoaded", function() {
  const dinkusArray = [
    "⁂ ⁂ ⁂",
    "* * *",
    "• • •",
    "~ * ~",
  ];

  document.querySelectorAll("hr").forEach((hr) => {
    const el = document.createElement("pre");
    el.className = "dinkus";
    el.textContent = dinkusArray[Math.floor(Math.random() * dinkusArray.length)];
    hr.replaceWith(el);
  });
});
