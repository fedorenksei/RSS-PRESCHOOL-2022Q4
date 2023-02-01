const buttonGardens = document.querySelector('.button-services_gardens');
const buttonLawn = document.querySelector('.button-services_lawn');
const buttonPlanting = document.querySelector('.button-services_planting');
const serviceButtons = [buttonGardens, buttonLawn, buttonPlanting];
serviceButtons.forEach(buttonElem => {
    buttonElem.addEventListener('click', function() {switchServiceButton(buttonElem)});
})

let pressedServiceButtons = [];
function switchServiceButton(buttonElem) {
    const groupOfButton = new Map();
    groupOfButton.set(buttonGardens, document.querySelectorAll('.project-type_gardens'))
    groupOfButton.set(buttonLawn, document.querySelectorAll('.project-type_lawn'))
    groupOfButton.set(buttonPlanting, document.querySelectorAll('.project-type_planting'))
    
    if (pressedServiceButtons.indexOf(buttonElem) === -1) {
        turnOnButton(buttonElem);
        buttonElem.classList.add('button-services_selected');
    } else {
        turnOffButton(buttonElem);
        buttonElem.classList.remove('button-services_selected');
    }

    
    function turnOnButton(buttonElem) {
        pressedServiceButtons.push(buttonElem)
        
        if (pressedServiceButtons.length === 1) {
            blurOtherGroupsThan(buttonElem)
            return
        }
        
        focusGroup(buttonElem);
        if (pressedServiceButtons.length === 3) {
            const excessiveButton = pressedServiceButtons.shift()
            blurGroup(excessiveButton)
            excessiveButton.classList.remove('button-services_selected');
        }
    }
    
    function turnOffButton(buttonElem) {
        const elemIndex = pressedServiceButtons.indexOf(buttonElem)
        pressedServiceButtons.splice(elemIndex, 1)
        
        if (pressedServiceButtons.length === 0) {
            focusOtherGroupsThan(buttonElem)
            return
        }
        
        blurGroup(buttonElem);
        // buttonElem.classList.remove('button-services_selected');
    }
    
    function blurGroup(buttonElem) {
        const projects = groupOfButton.get(buttonElem)
        for (const project of projects) {
            project.classList.add('project_blurred')
        }
    }
    function blurOtherGroupsThan(buttonElem) {
        serviceButtons.forEach(button => {
            if (button != buttonElem) blurGroup(button)
        })
    }

    function focusGroup(buttonElem) {
        const projects = groupOfButton.get(buttonElem)
        for (const project of projects) {
            project.classList.remove('project_blurred')
        }
    }
    function focusOtherGroupsThan(buttonElem) {
        serviceButtons.forEach(button => {
            if (button != buttonElem) focusGroup(button)
        })
    }
}



// classes: 'project_blurred', 'button-services_selected'


