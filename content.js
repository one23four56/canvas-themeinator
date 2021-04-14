chrome.storage.local.get(['canvasthemebgc'], result=> {
    document.querySelector(':root').style.setProperty('--canvas-style-bgc', (result.canvasthemebgc) ? (result.canvasthemebgc) : ('rgb(46, 46, 46)'))
})
chrome.storage.local.get(['canvasborderradius'], result=> {
    document.querySelector(':root').style.setProperty('--canvas-border-radius', (result.canvasborderradius) ? (result.canvasborderradius) : ('15px'))
})

