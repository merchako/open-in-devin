function openInDevin(tab) {
  if (!tab.url.startsWith('https://github.com/')) return;
  browser.tabs.create({
    url: tab.url.replace('https://github.com', 'https://devinreview.com')
  });
}

browser.browserAction.onClicked.addListener(openInDevin);

// Gray out the action on non-GitHub tabs
function updateAction(tabId, url) {
  const onGitHub = url && url.startsWith('https://github.com/');
  if (onGitHub) {
    browser.browserAction.enable(tabId);
  } else {
    browser.browserAction.disable(tabId);
  }
}

browser.tabs.onActivated.addListener(({ tabId }) => {
  browser.tabs.get(tabId).then((tab) => updateAction(tabId, tab.url));
});

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url !== undefined) updateAction(tabId, changeInfo.url);
});
