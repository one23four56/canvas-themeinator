document.getElementById('dark').addEventListener('click', ()=>{
    chrome.storage.local.set({'canvasthemebgc' : 'rgb(46, 46, 46)'})
})
document.getElementById('amoled').addEventListener('click', ()=>{
    chrome.storage.local.set({'canvasthemebgc' : 'rgb(0, 0, 0)'})
})
document.getElementById('purple').addEventListener('click', ()=>{
    chrome.storage.local.set({'canvasthemebgc' : 'rgb(103, 7, 192)'})
})
document.getElementById('blue').addEventListener('click', ()=>{
    chrome.storage.local.set({'canvasthemebgc' : 'rgb(62, 91, 255)'})
})
document.getElementById('green').addEventListener('click', ()=>{
    chrome.storage.local.set({'canvasthemebgc' : 'rgb(0, 197, 105)'})
})