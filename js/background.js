chrome.commands.onCommand.addListener(function(command) {
  if (command == 'toggle_env') {  toggleEnv(); }
});

function toggleEnv() {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) { 
    var currentTab = tabs[0],
        tabUrl = currentTab.url,
        proHost = 'www.cool-tabs.com',
        devHost = 'www.cooltabs.space',
        newUrl;

    if (tabUrl.match(/www\.cool-tabs\.com/))
      newUrl = tabUrl.replace(proHost, devHost)
    else if(tabUrl.match(/www\.cooltabs\.space/))
      newUrl = tabUrl.replace(devHost, proHost)

    if (newUrl)
      chrome.tabs.update(currentTab.id, {url: newUrl});
  });
}
