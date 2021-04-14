chrome.storage.local.get(['canvasborderradius'], result=> {
    if (result.canvasborderradius=='15px') document.getElementById("rounded").checked = true
})
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
document.getElementById('orange').addEventListener('click', ()=>{
    chrome.storage.local.set({'canvasthemebgc' : 'rgb(236, 143, 22)'})
})
document.getElementById("darkpurple").addEventListener('click', ()=>{
    chrome.storage.local.set({'canvasthemebgc' : 'rgb(59, 0, 114)'})
})
document.getElementById('darkblue').addEventListener('click', ()=>{
    chrome.storage.local.set({'canvasthemebgc' : 'rgb(0, 19, 124)'})
})
document.getElementById('rounded').addEventListener('change', ()=>{
    chrome.storage.local.set({'canvasborderradius' : (document.getElementById('rounded').checked) ? '15px' : '0'})
})