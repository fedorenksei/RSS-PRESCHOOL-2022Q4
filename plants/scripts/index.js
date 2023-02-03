console.log(`Score: 85/85`)

function switchClass(element, classToSwitch) {
    if (element.classList.contains(classToSwitch)) {
        element.classList.remove(classToSwitch);
    } else element.classList.add(classToSwitch);
}