function getElement(elementId) {
    var targetElement = document.getElementById(elementId);
    return targetElement;
}

function makeBold(divId) {
    var textElement = document.getElementById(divId);
    textElement.style.fontWeight = 600;
    if ((window.matchMedia("screen and (min-width: 600px)").matches)) {
        textElement.style.paddingLeft = '60px';
    }
}

function makeNormal(divId) {
    var textElement = document.getElementById(divId);
    textElement.style.fontWeight = 400;
    if ((window.matchMedia("screen and (min-width: 600px)").matches)) {
        textElement.style.paddingLeft = '40px';
    }
}


function concatElementDiv() {
    const elements =
        [['apresentacao', 'menu-item1'],
        ['trabalhos', 'menu-item2'],
        ['apresentacao', 'menu-item3']];
    elements.forEach(element => {
        let targetElement = getElement(element[0]);
        if ((targetElement.getBoundingClientRect().top + 100) < (window.innerHeight) * 0.8 &&
            (targetElement.getBoundingClientRect().bottom + 100) > (window.innerHeight) * 0.80) {
            makeBold(element[1]);
        } else {
            makeNormal(element[1])
        }
    });
    return true;
}


window.addEventListener('scroll', concatElementDiv);