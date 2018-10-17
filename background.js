  chrome.runtime.onInstalled.addListener(function() {
      chrome.storage.sync.set({
          regEx: '([A-Z]*)\w+-([1-9]*)[^-]$'
      }, function() {
          console.log("The regEx is set.");
      });
      chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
          chrome.declarativeContent.onPageChanged.addRules([{
              conditions: [new chrome.declarativeContent.PageStateMatcher({
                  pageUrl: {
                      hostEquals: 'scm.teamspace.local',
                      pathContains: '/plugins/servlet/create-branch'
                  },
              })],
              actions: [new chrome.declarativeContent.ShowPageAction()]
          }]);
      });
  });