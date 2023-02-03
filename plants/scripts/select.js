const select = document.querySelector('.city-select');
const options = select.querySelectorAll('.select-option');
const selectedCity = select.querySelector('.selected-city')

select.querySelector('.accordion-button')
    .addEventListener('click', function(){
        openOrCloseSelect();
    })
;

for (const option of options) {
    option.addEventListener('click', function() {
        selectOption(option)
        openOrCloseSelect();
    })
}

function openOrCloseSelect() {
    switchClass(select, 'city-select_opened');
    switchClass(
        select.querySelector('.select-options'), 
        'select-options_opened'
    );
}

function selectOption(option) {
    const city = option.innerText;
    selectedCity.innerText = city;
    select.classList.add('city-select_selected')
}