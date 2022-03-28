import Fuse from 'fuse.js';

let pageBlacklist = [];

chrome.runtime.onMessage.addListener(({ action }, sender, sendResponse) => {
  if (action === 'getPageBlacklist') {
    sendResponse({ pageBlacklist });
  }
});

chrome.storage.local.get(['blacklist'], ({ blacklist }) => {
  const wordsOnPageArray = [... new Set(document.body.innerText.split(/(?:\n| )+/))];

  const fuse = new Fuse(wordsOnPageArray, {
    threshold: 0.2,
    minMatchCharLength: 3,
    includeScore: true,
    distance: 10
  })

  const foundBlacklistItems = blacklist.reduce((arrayOfItems, blacklistItem) => {
    const foundNames = blacklistItem.names.filter((name) => {
      const searchResult = fuse.search(name)
      return Boolean(searchResult[0]?.item)
    })
    return foundNames.length ? [...arrayOfItems, blacklistItem] : arrayOfItems;
  }, [])

  pageBlacklist = foundBlacklistItems;

  chrome.runtime.sendMessage({
    action: 'setNumberOfFoundWords',
    numberOfFoundWords: foundBlacklistItems.length
  }, (status) => {
    console.log({ status })
  });

});
