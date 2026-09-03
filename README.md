# ATHERIAN // 777 — GitHub Pages site

A dependency-free, mobile-first artist homepage. It is ready to publish as a GitHub Pages site.

## Featured release

The first section in `index.html` showcases **Animate — Atherian / Tholos Records**, releasing September 9, 2026 on all platforms. The unmodified supplied cover lives at `assets/animate-official-artwork.jpg`; `releases.css` adds intermittent displaced image slices, title cuts, and a scan sweep. The release effects can be paused and respect reduced-motion preferences.

`releases.js` switches the announcement to “Out now” on September 9 in the visitor’s local calendar and refreshes it each minute. No precise release hour has been assumed. The release date remains visible. No track or pre-save address has been supplied, so the music link points to the existing player rather than pretending to play the upcoming release.

To feature a future release, update the section’s title, artist, label, artwork, date, and announcement in `index.html`, the artwork background in `releases.css`, and the date/copy in `releases.js`. JavaScript months are zero-based (September is `8`). The rest of the artist homepage and its existing channel configuration are preserved.

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

The homepage player starts with Atherian’s “Afterglow” and continues through a five-track Atherian sequence using Spotify’s official embed player. Browser autoplay rules may require the visitor to press the player’s play button. Track addresses and order are in the `PLAYER_QUEUE` list near the top of `script.js`.

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
