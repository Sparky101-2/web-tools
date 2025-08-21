chrome.action.onClicked.addListener(() => {
  chrome.bookmarks.search({ title: "Mobile bookmarks" }, (results) => {
    if (results.length > 0) {
      const mobileFolder = results[0];
      chrome.tabs.create({ url: `chrome://bookmarks/?id=${mobileFolder.id}` });
    } else {
      // Fallback: open bookmarks manager if folder not found
      chrome.tabs.create({ url: "chrome://bookmarks/" });
    }
  });
});