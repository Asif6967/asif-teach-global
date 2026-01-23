function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}
// Expert-level metric counter (logic-based, not animation toy)

const counters = document.querySelectorAll("[data-count]");
let triggered = false;

function runCounters() {
  if (triggered) return;

  counters.forEach(counter => {
    const target = +counter.dataset.count;
    let value = 0;

    const step = Math.ceil(target / 40);

    const interval = setInterval(() => {
      value += step;
      if (value >= target) {
        counter.textContent = target;
        clearInterval(interval);
      } else {
        counter.textContent = value;
      }
    }, 40);
  });

  triggered = true;
}

window.addEventListener("scroll", () => {
  const section = document.querySelector(".metrics");
  if (!section) return;

  const top = section.getBoundingClientRect().top;
  if (top < window.innerHeight - 100) {
    runCounters();
  }
});
function toggleMenu() {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('active');
}