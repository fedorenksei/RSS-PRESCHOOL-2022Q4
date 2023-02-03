const priceVariants = document.querySelectorAll('.price-variant') || [];
for (const priceVariant of priceVariants) {
    const button = priceVariant.querySelector('.accordion-button');
    button.addEventListener('click', function(){
        switchPriceVariant(priceVariant);
    })
}

let openedPriceVariant;

function switchPriceVariant(priceVariant) {
    // switch this variant
    switchClass(priceVariant);

    // if it has closed, no one is opened
    if (openedPriceVariant == priceVariant) openedPriceVariant = null;
    // if it has opened
    else {
        // switch another variant if it has been opened before
        if (openedPriceVariant) switchClass(openedPriceVariant);
        // now this variant is opened
        openedPriceVariant = priceVariant;
    }

    function switchClass(priceVariant) {
        const turnedOnClass = 'price-variant_opened'
        if (priceVariant.classList.contains(turnedOnClass))
            priceVariant.classList.remove(turnedOnClass);
        else priceVariant.classList.add(turnedOnClass);
    }
}