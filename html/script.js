
function createSetThemeListener(elemid, name, color, textcolor) {
    let elem = document.getElementById(elemid)
    elem.addEventListener('click', () => {
        chrome.storage.local.set({ 'canvas_theme' : JSON.stringify({
            name: name,
            backgroundcolor: color,
            textcolor: textcolor
        })})
        document.getElementById('theme').innerText = name
        document.getElementById('theme').style.color = textcolor
        document.getElementById('theme').style.backgroundColor = color
    })
}

{
    createSetThemeListener('dark', 'Dark', 'rgb(46, 46, 46)', 'white')
    createSetThemeListener('amoled', 'AMOLED Dark', 'rgb(0, 0, 0)', 'white')
    createSetThemeListener('purple', 'Purple', 'rgb(103, 7, 192)', 'white')
    createSetThemeListener('blue', 'Blue', 'rgb(62, 91, 255)', 'white')
    createSetThemeListener('green', 'Green', 'rgb(0, 197, 105)', 'white')
    createSetThemeListener('orange', 'Orange', 'rgb(236, 143, 22)', 'white')
    createSetThemeListener('darkpurple', 'Dark Purple', 'rgb(59, 0, 114)', 'white')
    createSetThemeListener('darkblue', 'Dark Blue', 'rgb(0, 19, 124)', 'white')
    createSetThemeListener('light', 'Light', 'white', 'black')
}

{
    document.getElementById('rounded').addEventListener('change', () => {
        chrome.storage.local.set({ 'canvasborderradius': (document.getElementById('rounded').checked) ? '15px' : '0' })
    })
}

{
    chrome.storage.local.get(['canvas_theme'], result=>{
        let theme = JSON.parse(result.canvas_theme)
        if (theme) {
            document.getElementById('theme').innerText = theme.name
            document.getElementById('theme').style.color = theme.textcolor
            document.getElementById('theme').style.backgroundColor = theme.backgroundcolor
        } else {
            document.getElementById('theme').innerText = "Dark"
            document.getElementById('theme').style.color = "white"
            document.getElementById('theme').style.backgroundColor = "rgb(46, 46, 46)"
        }
    })
    chrome.storage.local.get(['canvasborderradius'], result => {
        if (result.canvasborderradius == '15px') document.getElementById("rounded").checked = true
        if (result.canvasborderradius === undefined) document.getElementById("rounded").checked = true
    })
}