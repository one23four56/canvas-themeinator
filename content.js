
chrome.storage.local.get(['canvas_theme'], result=> {
    if (result.canvas_theme) {
        let theme = JSON.parse(result.canvas_theme)
        document.querySelector(':root').style.setProperty('--canvas-style-bgc', theme.backgroundcolor)
        document.querySelector(':root').style.setProperty('--canvas-style-tc', theme.textcolor)
        document.querySelector(':root').style.setProperty('--canvas-style-bc', theme.bordercolor)
        console.log("[CANVAS THEMEINATOR] Theme Loaded: " + theme.name)
    } else {
        chrome.storage.local.set({ 'canvas_theme' : JSON.stringify({
            name: "Dark",
            backgroundcolor: "rgb(46, 46, 46)",
            textcolor: "white", 
            bordercolor: "white",
        })})
        document.querySelector(':root').style.setProperty('--canvas-style-bgc', "rgb(46, 46, 46)")
        document.querySelector(':root').style.setProperty('--canvas-style-tc', "white")
        document.querySelector(':root').style.setProperty('--canvas-style-bc', "white")
        console.log("[CANVAS THEMEINATOR] Theme Loaded: Dark")
    }
})
chrome.storage.local.get(['canvasborderradius'], result=> {
    document.querySelector(':root').style.setProperty('--canvas-border-radius', (result.canvasborderradius) ? (result.canvasborderradius) : ('15px'))
})

chrome.storage.local.get(['boxshadow'], result=>{
    if (result.boxshadow===undefined) {
        chrome.storage.local.set({ 'boxshadow' : true })
        document.querySelector(':root').style.setProperty('--canvas-box-shadow', '0px 2px 10px 0px white')
    } else {
        document.querySelector(':root').style.setProperty('--canvas-box-shadow', (result.boxshadow) ? '0px 2px 10px 0px white' : 'none')
    }
})
