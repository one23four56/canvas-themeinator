
function createSetThemeListener(elemid, name, color) {
    let elem = document.getElementById(elemid)
    elem.addEventListener('click', () => {
        chrome.storage.local.set({ 'canvasthemebgc': color })
        chrome.storage.local.set({ 'canvastheme': name })
        document.getElementById('theme').innerText = name
        document.getElementById('theme').style.color = color
    })
}

{
    createSetThemeListener('dark', 'Dark', 'rgb(46, 46, 46)')
    createSetThemeListener('amoled', 'AMOLED Dark', 'rgb(0, 0, 0)')
    createSetThemeListener('purple', 'Purple', 'rgb(103, 7, 192)')
    createSetThemeListener('blue', 'Blue', 'rgb(62, 91, 255)')
    createSetThemeListener('green', 'Green', 'rgb(0, 197, 105)')
    createSetThemeListener('orange', 'Orange', 'rgb(236, 143, 22)')
    createSetThemeListener('darkpurple', 'Dark Purple', 'rgb(59, 0, 114)')
    createSetThemeListener('darkblue', 'Dark Blue', 'rgb(0, 19, 124)')
}

{
    document.getElementById('rounded').addEventListener('change', () => {
        chrome.storage.local.set({ 'canvasborderradius': (document.getElementById('rounded').checked) ? '15px' : '0' })
    })
}

{
    chrome.storage.local.get(['canvastheme'], result => {
        document.getElementById('theme').innerText = "Dark"
        if (result.canvastheme) document.getElementById('theme').innerText = result.canvastheme
    })
    chrome.storage.local.get(['canvasthemebgc'], result => {
        document.getElementById('theme').style.color = "rgb(46, 46, 46)"
        if (result.canvasthemebgc) document.getElementById('theme').style.color = result.canvasthemebgc
    })
    chrome.storage.local.get(['canvasborderradius'], result => {
        if (result.canvasborderradius == '15px') document.getElementById("rounded").checked = true
        if (result.canvasborderradius === undefined) document.getElementById("rounded").checked = true
    })
}