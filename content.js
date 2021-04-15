
chrome.storage.local.get(['canvas_theme'], result=> {
    if (result.canvas_theme) {
        let theme = JSON.parse(result.canvas_theme)
        document.querySelector(':root').style.setProperty('--canvas-style-bgc', theme.backgroundcolor)
        document.querySelector(':root').style.setProperty('--canvas-style-tc', theme.textcolor)
        console.log("[CANVAS THEMEINATOR] Theme Loaded: " + theme.name)
    } else {
        chrome.storage.local.set({ 'canvas_theme' : JSON.stringify({
            name: "Dark",
            backgroundcolor: "rgb(46, 46, 46)",
            textcolor: "white"
        })})
        console.log("[CANVAS THEMEINATOR] Theme Loaded: Dark")
    }
})
chrome.storage.local.get(['canvasborderradius'], result=> {
    document.querySelector(':root').style.setProperty('--canvas-border-radius', (result.canvasborderradius) ? (result.canvasborderradius) : ('15px'))
})

