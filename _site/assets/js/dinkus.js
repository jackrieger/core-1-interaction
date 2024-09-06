document.addEventListener("DOMContentLoaded", function() {
  const dinkuses = [
    "⁂ ⁂ ⁂",
    "* * *",
    "• • •",
    "~ * ~"
  ];

  document.querySelectorAll("hr").forEach((hr) => {
    const dinkusSpan = document.createElement("pre");
    dinkusSpan.className = "dinkus";
    dinkusSpan.textContent = dinkuses[Math.floor(Math.random() * dinkuses.length)];
    hr.replaceWith(dinkusSpan);
  });
});
