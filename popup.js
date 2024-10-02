document.getElementById("getTitle").addEventListener("click", function() {
    
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const tab = tabs[0];
      const title = tab.title;
      document.getElementById("title").textContent = title;
    });
  });
  