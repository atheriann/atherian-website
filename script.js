/*
  ATHERIAN CHANNEL CONFIGURATION
  Replace only the URLs below. The page will update every matching link.
*/
const CHANNELS = {
  music: "https://open.spotify.com/artist/7wcJzngrum5BfE5cAXrnfZ",
  afterglow: "https://open.spotify.com/track/67jGUKiPR61DZuHfv9kiOl",
  youtube: "https://www.youtube.com/@Atherianmusic",
  twitch: "https://www.twitch.tv/atherianmusic",
  soundcloud: "https://www.soundcloud.com/atherianmusicofc",
  instagram: "https://www.instagram.com/atherianmusic/",
  x: "https://x.com/YOUR_CHANNEL",
  contact: "mailto:atherianmusic@gmail.com",
  concept47: "https://concept47.store/?sca_ref=11908093.yRMr5Heufwwvy",
  freeDownload: "https://hypeddit.com/atherian/beautifulschranz",
  spotify: "https://open.spotify.com/artist/7wcJzngrum5BfE5cAXrnfZ",
  appleMusic: "https://music.apple.com/us/artist/atherian/1890317132",
  tiktok: "https://www.tiktok.com/@atherianmusic",
  beatport: "https://www.beatport.com/artist/atherian/1171082",
};

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const PLAYER_QUEUE = [
  { title: "Afterglow", uri: "spotify:track:67jGUKiPR61DZuHfv9kiOl" },
  { title: "This Way", uri: "spotify:track:2scoIxBZ6V1hrmLYsazUG9" },
  { title: "Vessel", uri: "spotify:track:555fGTSBhOEuBW839LKPU4" },
  { title: "Violence", uri: "spotify:track:0On588aKbczBpo6NBu8YbB" },
  { title: "Turok", uri: "spotify:track:0efKyMARQdKAp7XaJ5mQ4A" },
];

const playerStart = document.getElementById("player-start");
const playerQueueItems = Array.from(document.querySelectorAll("[data-track-index]"));
let spotifyController;
let currentTrackIndex = 0;
let playerHasStarted = false;
let playerIsAdvancing = false;

function updatePlayerQueue(index) {
  playerQueueItems.forEach((item, itemIndex) => {
    const isActive = itemIndex === index;
    item.classList.toggle("is-active", isActive);
    if (isActive) item.setAttribute("aria-current", "true");
    else item.removeAttribute("aria-current");
  });
}

function requestPlayerStart() {
  if (!spotifyController) return;
  if (playerHasStarted) spotifyController.togglePlay();
  else spotifyController.play();
}

function handleAmbientStart(event) {
  if (event.target.closest("a, button, input, iframe")) return;
  requestPlayerStart();
  document.removeEventListener("pointerdown", handleAmbientStart);
}

window.onSpotifyIframeApiReady = (IFrameAPI) => {
  const element = document.getElementById("spotify-embed");
  if (!element) return;

  IFrameAPI.createController(
    element,
    { uri: PLAYER_QUEUE[0].uri, width: "100%", height: 152 },
    (controller) => {
      spotifyController = controller;

      controller.addListener("ready", () => {
        playerStart.disabled = false;
        playerStart.textContent = "INITIALIZE AFTERGLOW";
        document.addEventListener("pointerdown", handleAmbientStart);
        window.setTimeout(() => controller.play(), 180);
      });

      controller.addListener("playback_started", () => {
        playerHasStarted = true;
        document.body.classList.add("is-audio-active");
        playerStart.textContent = "PAUSE / RESUME SIGNAL";
      });

      controller.addListener("playback_update", (event) => {
        const playback = event.data;
        if (!playback.duration || playback.position < playback.duration - 750 || playerIsAdvancing) return;

        playerIsAdvancing = true;
        currentTrackIndex = (currentTrackIndex + 1) % PLAYER_QUEUE.length;
        updatePlayerQueue(currentTrackIndex);
        controller.loadEntity(PLAYER_QUEUE[currentTrackIndex].uri);
        window.setTimeout(() => controller.play(), 240);
        window.setTimeout(() => {
          playerIsAdvancing = false;
        }, 1200);
      });
    },
  );
};

const spotifyApiScript = document.createElement("script");
spotifyApiScript.src = "https://open.spotify.com/embed/iframe-api/v1";
spotifyApiScript.async = true;
document.body.appendChild(spotifyApiScript);

playerStart?.addEventListener("click", requestPlayerStart);

const SEQUENCE_PREFIXES = [
  "SEQ",
  "PHASE",
  "ADDR",
  "FRAME",
  "SYNC",
  "ROT",
  "ERR",
];

const glitchField = document.getElementById("glitch-field");

function randomDigits(length = 3) {
  return String(Math.floor(Math.random() * 10 ** length)).padStart(length, "0");
}

function generateSequence() {
  const prefix = SEQUENCE_PREFIXES[Math.floor(Math.random() * SEQUENCE_PREFIXES.length)];
  const blockCount = 3 + Math.floor(Math.random() * 4);
  const blocks = Array.from({ length: blockCount }, () => randomDigits(Math.random() > 0.7 ? 2 : 3));
  const lock = Math.random() > 0.72 ? "/777" : `/${randomDigits(3)}`;
  return `${prefix}[${blocks.join(":")}]${lock}`;
}

function emitCodeShard() {
  if (reducedMotion || document.hidden || !glitchField) return;

  const shard = document.createElement("span");
  const code = generateSequence();
  shard.className = `code-shard${Math.random() > 0.72 ? " code-shard--pale" : ""}`;
  shard.textContent = code;
  shard.dataset.code = code;
  shard.style.setProperty("--shard-x", `${7 + Math.random() * 86}vw`);
  shard.style.setProperty("--shard-y", `${9 + Math.random() * 82}vh`);
  shard.style.setProperty("--shard-r", `${-4 + Math.random() * 8}deg`);
  glitchField.appendChild(shard);
  window.setTimeout(() => shard.remove(), 1350);
}

const PHASE_TARGETS = [
  ".wordmark",
  ".manifesto",
  ".section-heading h2",
  ".channel__name",
  ".partner-card__brand",
  ".sequence",
  ".footer__code",
];

function triggerPhaseSlip() {
  if (document.hidden) return;

  const targets = Array.from(document.querySelectorAll(PHASE_TARGETS.join(","))).filter(
    (element) => element.getBoundingClientRect().bottom > 0 && element.getBoundingClientRect().top < window.innerHeight,
  );

  const slips = Math.min(targets.length, Math.random() > 0.7 ? 2 : 1);
  for (let index = 0; index < slips; index += 1) {
    const target = targets.splice(Math.floor(Math.random() * targets.length), 1)[0];
    if (!target) continue;

    target.dataset.phase = target.textContent.replace(/\s+/g, " ").trim();
    target.classList.add("phase-glitch");
    window.setTimeout(() => {
      target.classList.remove("phase-glitch");
      delete target.dataset.phase;
    }, 260 + Math.random() * 300);
  }

  if (Math.random() > 0.56) {
    document.body.classList.add("is-site-slipping");
    window.setTimeout(() => document.body.classList.remove("is-site-slipping"), 230);
  }
}

function schedulePhaseSlip() {
  window.setTimeout(() => {
    triggerPhaseSlip();
    if (Math.random() > 0.62) emitCodeShard();
    schedulePhaseSlip();
  }, 650 + Math.random() * 1700);
}

if (!reducedMotion) {
  let lastGlitchAt = 0;
  window.addEventListener(
    "scroll",
    () => {
      const now = performance.now();
      if (now - lastGlitchAt < 420) return;
      lastGlitchAt = now;
      emitCodeShard();
      if (Math.random() > 0.68) window.setTimeout(emitCodeShard, 90);
    },
    { passive: true },
  );

  window.setInterval(emitCodeShard, 2400);
  window.setTimeout(schedulePhaseSlip, 1200);
}

document.querySelectorAll("[data-channel]").forEach((link) => {
  const url = CHANNELS[link.dataset.channel];
  if (url) link.href = url;

  link.addEventListener("click", () => {
    if (reducedMotion || !url || url.startsWith("mailto:")) return;

    document.body.classList.add("is-routing");
    window.setTimeout(() => {
      document.body.classList.remove("is-routing");
    }, 720);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

requestAnimationFrame(() => {
  document.body.classList.add("is-loaded");
});
