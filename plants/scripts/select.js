const select = document.querySelector('.selected-city-container');
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
    select.classList.toggle('city-select_opened')
}

function selectOption(option) {
    const cityHolder = document.querySelector('.city-parameters > [name="phone"]');
    const phoneHolder = document.querySelector('.city-parameters > [name="city"]');
    const addressHolder = document.querySelector('.city-parameters > [name="address"]');
    
    const cityData = {
        'Canandaigua, NY': {
            phone: '+1	585	393 0001',
            address: '151 Charlotte Street',
        },
        'Yonkers, NY': {
            phone: '+1	914	678 0003',
            address: '511 Warburton Ave',
        },
        'Sherrill, NY': {
            phone: '+1	315	908 0004',
            address: '14 WEST Noyes BLVD',
        },
        'New York City': {
            phone: '+1	212	456 0002',
            address: '9 East 91st Street',
        },
    }

    const city = option.innerText;
    selectedCity.innerText = city;
    select.classList.add('city-select_selected');
    [
        [cityHolder, city], 
        [phoneHolder, cityData[city].phone],
        [addressHolder, cityData[city].address]
    ].forEach(([holder, value]) => {
        holder.innerText = value
    })
    document.querySelector('.city-info').classList.add('city-info_visible')
    document.querySelector('.city-info .call-us-button')
        .setAttribute('href', 'tel:' + cityData[city].phone)
    ;

    // for mobile
    document.querySelector('.section.contacts')
        .classList.add('section-contacts_remove-background-picture')
    ;
}