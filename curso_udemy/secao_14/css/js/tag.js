const colours = {
    p: "#ff0000",
    div: "#00ff00",
    span: "0000FF",
    section: "#f0f0f0",
    ul: "#eeee00",
    ol: "#00eeee",
    header: "#0e0e0e",
    nav: "#0a0efb",
    padrao: "#616161",
    get(tag){
        return this[tag] ? this[tag] : this.padrao
    }


}

document.querySelectorAll(".tag").forEach(box => {
    const tagName = box.tagName.toLowerCase()

    box.style.borderColor = colours.get(tagName)

    if (!box.classList.contains("nolabel")){
        const label = document.createElement("label")
        label.style.backgroundColor = colours.get(tagName)
        label.innerHTML = tagName
        box.insertBefore(label, box.childNodes[0])
    }
})