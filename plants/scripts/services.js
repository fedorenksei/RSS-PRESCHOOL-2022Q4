const buttonGardens = document.querySelector('.button-services_gardens');
const buttonLawn = document.querySelector('.button-services_lawn');
const buttonPlanting = document.querySelector('.button-services_planting');
const serviceButtons = [buttonGardens, buttonLawn, buttonPlanting];
serviceButtons.forEach(buttonElem => {
    buttonElem.addEventListener('click', function() {switchServiceButton(buttonElem)});
})

let pressedServiceButtons = [];
function switchServiceButton(buttonElem) {
    switchButtonClass(buttonElem)
    function switchButtonClass(buttonElem) {
        const turnedOnClass = 'button-services_selected'
        if (buttonElem.classList.contains(turnedOnClass))
            buttonElem.classList.remove(turnedOnClass);
        else buttonElem.classList.add(turnedOnClass);
    }

    if (pressedServiceButtons.indexOf(buttonElem) === -1) {
        turnOnButton(buttonElem);
    } else {
        turnOffButton(buttonElem);
    }
    
    function turnOnButton(buttonElem) {
        pressedServiceButtons.push(buttonElem)
        
        // button turned on solely - blur other groups
        if (pressedServiceButtons.length === 1) {
            switchOtherGroupsThan(buttonElem)
            return
        }
        
        // there has been some buttons turned on - focus this group
        switchGroup(buttonElem)
        
        // there has been 2 of them (2 - max amount) - blur the older one
        if (pressedServiceButtons.length === 3) {
            const excessiveButton = pressedServiceButtons[0]
            turnOffButton(excessiveButton)
            switchButtonClass(excessiveButton)
        }
    }
    
    function turnOffButton(buttonElem) {
        const elemIndex = pressedServiceButtons.indexOf(buttonElem)
        pressedServiceButtons.splice(elemIndex, 1)
        
        // only this butten was turned on - take out of blur others
        if (pressedServiceButtons.length === 0) {
            switchOtherGroupsThan(buttonElem)
            return
        }
        
        // there are some other buttons turned on - blur this one
        switchGroup(buttonElem);
    }
    
    function switchGroup(buttonElem) {
        const groupOfButton = new Map();
        groupOfButton.set(buttonGardens, document.querySelectorAll('.project-type_gardens'))
        groupOfButton.set(buttonLawn, document.querySelectorAll('.project-type_lawn'))
        groupOfButton.set(buttonPlanting, document.querySelectorAll('.project-type_planting'))
        const projects = groupOfButton.get(buttonElem)
        
        const blurClass = 'project_blurred';
        for (const project of projects) {
            if (project.classList.contains(blurClass))
                project.classList.remove(blurClass);
            else project.classList.add(blurClass);
        }
    }
    function switchOtherGroupsThan(buttonElem) {
        serviceButtons.forEach(button => {
            if (button != buttonElem) switchGroup(button)
        })
    }
}