chrome.runtime.onInstalled.addListener(() => {
  // Disable the action everywhere by default, then enable only on github.com
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

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      window.open(
        location.href.replace('https://github.com', 'https://devinreview.com'),
        '_blank'
      );
    }
  });
});
