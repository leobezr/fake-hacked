try {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (changeInfo.status === "complete") {
            chrome.scripting.executeScript({
                files: ["app.js"],
                target: { tabId: tab.id }
            })
        }
    })
} catch (err) {
    console.log(err)
}