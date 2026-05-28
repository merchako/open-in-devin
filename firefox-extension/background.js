function openInDevin(tab) {
  browser.tabs.create({
    url: tab.url.replace('https://github.com', 'https://devinreview.com')
  });
}

// Toolbar icon click
browser.browserAction.onClicked.addListener(openInDevin);

// Keyboard shortcut — fires regardless of action enabled/disabled state
browser.commands.onCommand.addListener((command) => {
  if (command !== 'open-in-devin') return;
  browser.tabs.query({ active: true, currentWindow: true }).then(([tab]) => {
    if (tab?.url?.startsWith('https://github.com/')) openInDevin(tab);
  });
});

// Gray out icon on non-GitHub tabs
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
