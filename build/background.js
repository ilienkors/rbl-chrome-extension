const DEFAULT_BLACKLIST = [
  {
    'names': ['nestle'],
    'description': 'nestle description',
  },
  {
    'names': ['lion', 'kitkat', 'nuts', 'aero'],
    'description': '',
  },
  {
    'names': ['oreo'],
    'description': '',
  },
  {
    'names': ['nesquik'],
    'description': '',
  },
  {
    'names': ['світоч'],
    'description': '',
  },
  {
    'names': ['чудо'],
    'description': '',
  },
  {
    'names': ['словяночка'],
    'description': '',
  },
  {
    'names': ['агуша'],
    'description': '',
  }
]

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.clear();
  chrome.storage.local.set({ blacklist: DEFAULT_BLACKLIST });
});

chrome.runtime.onMessage.addListener(({ action, numberOfFoundWords }, { tab: { id: tabId } }) => {
  if (action === 'setNumberOfFoundWords') {
    chrome.action.setBadgeText(
      {
        tabId,
        text: numberOfFoundWords.toString()
      },
    )
    return true;
  }
});
