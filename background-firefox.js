browser.browserAction.onClicked.addListener((tab) => {
  if (!tab.url.includes('github.com')) {
    alert('Not a GitHub page.');
    return;
  }
  browser.tabs.create({
    url: tab.url.replace('https://github.com', 'https://devinreview.com')
  });
});
