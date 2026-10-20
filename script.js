// Page navigation
function goTo(id) {
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  if (id === "page3") burst();
}

document.querySelectorAll("[data-next]").forEach((btn) => {
  btn.addEventListener("click", () => goTo(btn.dataset.next));
});

// Playful "Not yet..." button: it dodges, then gives in after a few tries
const noBtn = document.getElementById("noBtn");
const noTexts = ["Not yet...", "Are you sure? 🥺", "Pleeease 💕", "Okay, open it!"];
let noCount = 0;
noBtn.addEventListener("click", () => {
  noCount++;
  if (noCount >= noTexts.length - 1) {
    noBtn.textContent = noTexts[noTexts.length - 1];
    noBtn.addEventListener("click", () => goTo("page3"), { once: true });
  } else {
    noBtn.textContent = noTexts[noCount];
  }
});

// Floating hearts
const heartsEl = document.getElementById("hearts");
const symbols = ["💗", "💕", "🌸", "💖"];

function spawnHeart() {
  const h = document.createElement("span");
  h.className = "heart";
  h.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 14 + Math.random() * 22 + "px";
  h.style.animationDuration = 6 + Math.random() * 5 + "s";
  heartsEl.appendChild(h);
  setTimeout(() => h.remove(), 11000);
}

setInterval(spawnHeart, 700);

function burst() {
  for (let i = 0; i < 25; i++) setTimeout(spawnHeart, i * 60);
}
