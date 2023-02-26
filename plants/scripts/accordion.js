const priceVariants = document.querySelectorAll('.price-variant') || [];
for (const priceVariant of priceVariants) {
    const button = priceVariant.querySelector('.accordion-button');
    button.addEventListener('click', function(){
        switchPriceVariant(priceVariant);
    })
}

let openedPriceVariant;

function switchPriceVariant(priceVariant) {
    const openedClass = 'price-variant_opened';
    // switch this variant
    priceVariant.classList.toggle(openedClass)

    // if it has closed, no one is opened
    if (openedPriceVariant == priceVariant) openedPriceVariant = null;
    // if it has opened
    else {
        // switch another variant if it has been opened before
        if (openedPriceVariant) openedPriceVariant.classList.toggle(openedClass);
        // now this variant is opened
        openedPriceVariant = priceVariant;
    }
}