chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      if (!location.href.includes('github.com')) {
        alert('Not a GitHub page.');
        return;
      }
      window.open(
        location.href.replace('https://github.com', 'https://devinreview.com'),
        '_blank'
      );
    }
  });
});
