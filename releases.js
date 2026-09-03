/* Release dates are calendar dates; no unconfirmed release hour or track URL. */
(() => {
  const section = document.getElementById("latest-release");
  if (!section) return;

  function updateReleaseStatus() {
    const now = new Date();
    const released = now >= new Date(2026, 8, 9);
    section.querySelector("[data-release-announcement]").textContent = released
      ? "OUT NOW"
      : "OUT SEPTEMBER 9, 2026";
    section.querySelector("[data-release-status]").textContent = released
      ? "RELEASED SEPTEMBER 9, 2026"
      : "INCOMING RELEASE";
  }
  updateReleaseStatus();
  window.setInterval(updateReleaseStatus, 60_000);

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
