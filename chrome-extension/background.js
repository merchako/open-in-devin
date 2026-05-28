function openInDevin(tabId) {
  chrome.scripting.executeScript({
    target: { tabId },
    func: () => {
      window.open(
        location.href.replace('https://github.com', 'https://devinreview.com'),
        '_blank'
      );
    }
  });
}

// Toolbar icon click
chrome.action.onClicked.addListener((tab) => openInDevin(tab.id));

// Gray out icon on non-GitHub tabs
chrome.runtime.onInstalled.addListener(() => {
  chrome.action.disable();
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'github.com', schemes: ['https'] }
        })
      ],
      actions: [new chrome.declarativeContent.ShowAction()]
    }]);
  });
});
