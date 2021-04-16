
function createSetThemeListener(elemid, name, color, textcolor, bordercolor) {
    let elem = document.getElementById(elemid)
    elem.addEventListener('click', () => {
        document.getElementById("custom-form").style.display = 'none'
        chrome.storage.local.set({ 'canvas_theme' : JSON.stringify({
            name: name,
            backgroundcolor: color,
            textcolor: textcolor,
            bordercolor: bordercolor,
        })})
        document.getElementById('theme').innerText = name
        document.getElementById('theme').style.color = textcolor
        document.getElementById('theme').style.backgroundColor = color
    })
}

{
    createSetThemeListener('dark', 'Dark', 'rgb(46, 46, 46)', 'white', 'white')
    createSetThemeListener('amoled', 'AMOLED Dark', 'rgb(0, 0, 0)', 'white', 'white')
    createSetThemeListener('purple', 'Purple', 'rgb(103, 7, 192)', 'white', 'white')
    createSetThemeListener('blue', 'Blue', 'rgb(62, 91, 255)', 'white', 'white')
    createSetThemeListener('green', 'Green', 'rgb(0, 197, 105)', 'white', 'white')
    createSetThemeListener('orange', 'Orange', 'rgb(236, 143, 22)', 'white', 'white')
    createSetThemeListener('darkpurple', 'Dark Purple', 'rgb(59, 0, 114)', 'white', 'white')
    createSetThemeListener('darkblue', 'Dark Blue', 'rgb(0, 19, 124)', 'white', 'white')
    createSetThemeListener('light', 'Light', 'white', 'black', 'black')
    createSetThemeListener('aqua', 'Aqua', 'rgb(209, 255, 242)', 'black', 'black')

    document.getElementById("custom-form").style.display = 'none'
    document.getElementById('custom').addEventListener('click', ()=>{
        if (document.getElementById("custom-form").style.display !== 'none') {
            document.getElementById("custom-form").style.display = 'none'
        } else {
            document.getElementById("custom-form").style.display = 'initial'
        }
    })

    document.getElementById("custom-form").addEventListener('submit', event=>{
        event.preventDefault()
        let formData = new FormData(document.getElementById("custom-form"))
        let name = formData.get("name-input")
        let textcolor = formData.get("tc-input")
        let bordercolor = formData.get("boc-input")
        let color = formData.get("bc-input")
        document.getElementById("custom-form").style.display = 'none'
        chrome.storage.local.set({ 'canvas_theme' : JSON.stringify({
            name: name,
            backgroundcolor: color,
            textcolor: textcolor, 
            bordercolor: bordercolor,
        })})
        document.getElementById('theme').innerText = name
        document.getElementById('theme').style.color = textcolor
        document.getElementById('theme').style.backgroundColor = color
    })
}

{
    document.getElementById('rounded').addEventListener('change', () => {
        chrome.storage.local.set({ 'canvasborderradius': (document.getElementById('rounded').checked) ? '15px' : '0' })
    })
    document.getElementById('boxshadow').addEventListener('change', ()=>{
        chrome.storage.local.set({ 'boxshadow' : document.getElementById('boxshadow').checked})  
    })
}

{
    chrome.storage.local.get(['canvas_theme'], result=>{
        if (result.canvas_theme) {
            let theme = JSON.parse(result.canvas_theme)
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
    chrome.storage.local.get(['boxshadow'], result=>{
        if (result.boxshadow == true || result.boxshadow === undefined) document.getElementById("boxshadow").checked = true
    })
}