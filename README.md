# ATHERIAN // 777 — GitHub Pages site

A dependency-free, mobile-first artist homepage. It is ready to publish as a GitHub Pages site.

## Featured release

The first section in `index.html` showcases **Animate — Atherian / Tholos Records (THOLOS063)**, released September 4, 2026. The permanent announcement is “SIGNAL RELEASED // OUT NOW.” The unmodified supplied cover lives at `assets/animate-official-artwork.jpg`; `releases.css` preserves intermittent displaced image slices, title cuts, and a scan sweep. The release effects can be paused and respect reduced-motion preferences.

Release-specific destinations were verified September 4, 2026 against the artist, label, and matching three-track sequence (Low, Otherside, Underground):

- Spotify: https://open.spotify.com/album/2SfPcPDQuzq9QCBG8obvmJ
- Apple Music: https://music.apple.com/us/album/animate-single/6801222164
- SoundCloud: https://soundcloud.com/tholos_records/sets/atherian-animate-1
- Beatport: https://www.beatport.com/release/animate/7346739

Apple Music currently associates Animate with artist ID 976694533, rather than the site's existing artist ID 1890317132. The direct album was verified through Apple's public catalog and its Tholos Records credit and matching tracks; the unrelated artist-channel configuration is unchanged. The SoundCloud destination is the full official label EP, not a single preview or profile.

Links sit beside the cover on desktop and directly below it on mobile. All four destinations and the released announcement work without JavaScript. `releases.js` only controls optional motion; no date timer can restore the old upcoming-release copy.

To feature a future release, update the section’s title, artist, label, artwork, announcement, track names, catalog code, and verified destination links in `index.html`, plus the artwork background in `releases.css`. The rest of the artist homepage and its existing channel configuration are preserved.

## Latest set

The homepage hierarchy is Animate EP, latest guest set, artist introduction, then the existing player and channels. The top navigation links directly to the EP, latest set, and channels. The `#latest-set` anchor also provides a direct social promotion destination: `https://atherian.io/#latest-set`.

The guest set is **SOSNYC Podcast 004: Atherian**, a one-hour Sounds of Schranz NYC set published October 6, 2026. Its official artwork is stored unmodified at `assets/sosnyc-podcast-004.jpg`; layout and mobile styles are in `spotlight.css`.

- Featured set: https://soundcloud.com/soundsofschranznyc/sosnyc-podcast-004-atherian
- Artist's podcast collection: https://soundcloud.com/atherianmusicofc/sets/podcasts

SoundCloud currently restricts this track's embedding (`embeddable_by: me`), and the official playlist widget presents “Play on SoundCloud.” The feature therefore uses direct listening links instead of an unavailable inline player. All new content and links work without JavaScript. A social video can be featured alongside this set once its specific destination or file is supplied; no empty video placeholder is published.

## Replace the channel links

Open `script.js`. At the very top, find the `CHANNELS` list and replace each placeholder URL with the real Atherian URL.

The available entries are:

- `music` — currently your Spotify artist page
- `youtube`
- `twitch`
- `soundcloud`
- `instagram`
- `x`
- `contact` — keep the `mailto:` prefix for an email address
- `concept47` — your unique Concept 47 affiliate URL; preserve the complete `sca_ref` value
- `freeDownload` — the Hypeddit destination for the featured free download
- `spotify`
- `appleMusic`
- `tiktok`
- `beatport`

The live Spotify, Apple Music, SoundCloud, Beatport, TikTok, Instagram, and Concept 47 affiliate destinations are already installed from the current Atherian Linktree and Instagram bio. The partner section includes a concise affiliate disclosure and uses `rel="sponsored"` on the link.

## Spotify player

The homepage player starts with Atherian’s “Low,” then plays “Otherside,” “Underground,” “Afterglow,” “This Way,” “Vessel,” “Violence,” and “Turok” before looping back to “Low,” using Spotify’s official embed player. All three Animate track IDs were verified against the release's Spotify album. Browser autoplay rules may require the visitor to press the player’s play button. Track addresses and order are in the `PLAYER_QUEUE` list near the top of `script.js`; keep the visible queue in `index.html` aligned. The current title, duration, active row, and Spotify link follow the queue as it advances.

If you do not use one of the four channels in “More Output,” remove its matching `<a>` element from `index.html`.

## Publish on GitHub Pages

1. Create a new GitHub repository and upload all four files from this folder to its top level.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then save.

GitHub will provide the live site address after the first deployment finishes.

## Customize the copy

All visible words and labels are in `index.html`. Search for `CHAOS IS NOT A FAILURE` to edit the manifesto, or `POST-MACHINE RHYTHM` to edit the supporting description.

Colors are at the top of `styles.css`. The hot amber accent is `--hot: #ffc400`.

## Search and sharing

The site includes a canonical URL, descriptive search metadata, Open Graph and X cards, Atherian artist structured data, crawlable channel links, `robots.txt`, and `sitemap.xml`. The A/7 favicon package includes SVG, ICO, PNG, Apple touch, and web-app sizes.

After publishing major changes, submit `https://atherian.io/sitemap.xml` in Google Search Console and Bing Webmaster Tools. Use the home-page URL inspection tool to request a recrawl when the title, description, or favicon changes.
