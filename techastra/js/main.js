function showEvents(type) {
  document.querySelectorAll(".event-group").forEach(g => g.classList.add("hidden"));
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));

  document.getElementById(type).classList.remove("hidden");
  event.target.classList.add("active");
}
const eventDate = new Date("March 16, 2026 09:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("countdown").innerText =
    `${days}d ${hours}h ${minutes}m to go`;
}, 1000);window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

