const App = () => {
  chrome.storage.local.get(['blacklist'], function (result) {
    console.log({ result });
  });

  return (
    <h1>App</h1>
  )
};

export default App;
