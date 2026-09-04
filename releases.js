/* Released-state copy is permanent HTML; only optional motion needs JavaScript. */
(() => {
  const section = document.getElementById("latest-release");
  if (!section) return;

  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const button = section.querySelector(".release__motion");
  let pausedByUser = false;
  function updateMotion() {
    const paused = motion.matches || pausedByUser;
    section.classList.toggle("is-motion-paused", paused);
    button.hidden = motion.matches;
    button.setAttribute("aria-pressed", String(paused));
    button.innerHTML = paused
      ? 'RESUME RELEASE EFFECTS <span aria-hidden="true">▷</span>'
      : 'PAUSE RELEASE EFFECTS <span aria-hidden="true">Ⅱ</span>';
  }
  button.addEventListener("click", () => {
    pausedByUser = !pausedByUser;
    updateMotion();
  });
  motion.addEventListener("change", updateMotion);
  updateMotion();
})();
