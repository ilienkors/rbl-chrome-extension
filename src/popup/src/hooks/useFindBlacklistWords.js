import { useEffect, useState } from "preact/hooks";

export const useFindBlacklistWords = () => {
  const [pageBlacklist, setPageBlacklist] = useState([]);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'getPageBlacklist' }, ({ pageBlacklist }) => {
        setPageBlacklist(pageBlacklist);
      });
    });
  }, [])

  return { pageBlacklist };
}
