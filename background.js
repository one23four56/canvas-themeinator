chrome.action.onClicked.addListener(()=>{
    chrome.tabs.create({
        "url" : "https://canvas.instructure.com/",
    })
})