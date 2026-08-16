# ATHERIAN // 777 — GitHub Pages site

A dependency-free, mobile-first artist homepage. It is ready to publish as a GitHub Pages site.

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
