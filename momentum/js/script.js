console.log(`Самооценка: 20/150. Если это возможно, прошу проверить работу ближе к дедлайну кросс-чека, планирую доделать.`)

const timeElement = document.querySelector('.time')
const dateElement = document.querySelector('.date')
const greetingElement = document.querySelector('.greeting')

function updateMoment() {
    const moment = new Date()

    timeElement.textContent = moment.toLocaleTimeString()

    dateElement.textContent = moment.toLocaleDateString('ru-RU', {
        weekday: 'long',
        month: 'long', 
        day: 'numeric', 
    })
    
    const hours = moment.getHours()
    let greeting
    if (hours < 6) {
        greeting = 'Good night'
    } else if (hours < 12) {
        greeting = 'Good morning'
    } else if (hours < 18) {
        greeting = 'Good afternoon'
    } else {
        greeting = 'Good evening'
    }
    greetingElement.textContent = greeting

    setTimeout(updateMoment, 1000)
}

updateMoment()