# Open in Devin

A minimal browser extension (and bookmarklet) that opens any GitHub PR in [Devin Review](https://devinreview.com/) with one click.

When you click the extension icon on a GitHub PR page, it replaces `https://github.com` with `https://devinreview.com` and opens the result in a new tab.

The extension only activates on `github.com` — it has no access to any other site.

---

## Bookmarklet

No installation required. Drag this link to your bookmarks bar:

**[Open in Devin](javascript:(function(){if(!location.href.includes('github.com')){alert('Not%20a%20GitHub%20page.');return;}window.open(location.href.replace('https://github.com','https://devinreview.com'),'_blank');})();)**

Or create a bookmark manually with this URL:

```
javascript:(function(){if(!location.href.includes('github.com')){alert('Not a GitHub page.');return;}window.open(location.href.replace('https://github.com','https://devinreview.com'),'_blank');})();
```

---

## Extension Installation

### Chrome, Arc, Brave, Edge, Opera, Vivaldi

1. Download or clone this repo
2. Go to your browser's extensions page:
   - Chrome: <a href="chrome://extensions"><code>chrome://extensions</code></a>
   - Arc: <a href="arc://extensions"><code>arc://extensions</code></a>
   - Brave: <a href="brave://extensions"><code>brave://extensions</code></a>
   - Edge: <a href="edge://extensions"><code>edge://extensions</code></a>
   - Opera: <a href="opera://extensions"><code>opera://extensions</code></a>
   - Vivaldi: <a href="vivaldi://extensions"><code>vivaldi://extensions</code></a>
3. Toggle **Developer mode** on
4. Click **Load unpacked** and select the `chrome-extension/` folder
5. The extension icon appears in the toolbar — click it on any GitHub PR

To reload after editing: click the refresh icon on the extension card.

### Firefox

1. Download or clone this repo
2. Go to <a href="about:debugging"><code>about:debugging</code></a> in the address bar
3. Click **This Firefox** in the left sidebar
4. Click **Load Temporary Add-on…**
5. Select either file inside the `firefox-extension/` folder

> **Note:** Temporary add-ons in Firefox are removed when the browser is closed. For a permanent install the extension must be signed by Mozilla. For personal use, enable unsigned extensions in [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) or [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) by setting `xpinstall.signatures.required` to `false` in `about:config`.

---

## Usage

1. Navigate to any GitHub pull request
2. Click the **Open in Devin** icon in your browser toolbar (or use the keyboard shortcut)
3. The PR opens in Devin Review in a new tab

The icon is grayed out on non-GitHub pages. The keyboard shortcut also only works on GitHub.

### Keyboard shortcut

| OS | Shortcut |
|----|----------|
| macOS | `Cmd + Option + R` |
| Windows / Linux | `Alt + Shift + R` |

To customize: go to <a href="chrome://extensions/shortcuts"><code>chrome://extensions/shortcuts</code></a> (or your browser's equivalent).

---

## Files

```
chrome-extension/     Chrome, Arc, Brave, Edge, Opera, Vivaldi (Manifest V3)
firefox-extension/    Firefox (Manifest V2)
```
