// =====================
// script.js — shared for all pages
// =====================

// Simple DOM helpers
const qs = (s) => document.querySelector(s);
const qsa = (s) => document.querySelectorAll(s);

// Set footer years
["#year","#year2","#year3","#year4"].forEach(id=>{
  const el = document.querySelector(id);
  if(el) el.textContent = new Date().getFullYear();
});

// =====================
// Theme toggle
const themeToggle = qs("#themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("darkTheme", isDark ? "1" : "0");
  });

  if (localStorage.getItem("darkTheme") === "1") {
    document.body.classList.add("dark");
  }
}

// =====================
// Small animation trigger
const playDemo = qs("#playDemo");
if (playDemo) {
  playDemo.addEventListener("click", () => {
    const box = document.createElement("div");
    box.style.width = "100px";
    box.style.height = "100px";
    box.style.background = "coral";
    box.style.borderRadius = "8px";
    box.style.position = "fixed";
    box.style.left = "20px";
    box.style.top = "120px";
    box.style.transition = "transform 700ms ease, opacity 700ms ease";
    document.body.appendChild(box);

    requestAnimationFrame(()=> {
      box.style.transform = "translateX(300px) scale(0.95)";
      box.style.opacity = "0.9";
    });

    setTimeout(()=> { box.style.opacity = "0"; setTimeout(()=> box.remove(), 400); }, 900);
  });
}

// =====================
// Contact form validation demo
const contactForm = qs("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = qs("#cname").value.trim();
    const email = qs("#cemail").value.trim();
    const message = qs("#cmessage").value.trim();
    const feedback = qs("#contactFeedback");

    if (!name) return showFeedback("Please enter your name.", feedback, false);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showFeedback("Please enter a valid email.", feedback, false);
    if (message.length < 10) return showFeedback("Message must be at least 10 characters.", feedback, false);

    showFeedback("Thanks! Your message has been sent (demo).", feedback, true);
    contactForm.reset();
  });
}
function showFeedback(text, el, ok){
  if(!el) return;
  el.textContent = text;
  el.style.color = ok ? "green" : "crimson";
}

// =====================
// Function scope + return values demo
let globalCounter = 2; // global scope
function multiply(a, b){
  const result = a * b; // local scope
  return result;
}
