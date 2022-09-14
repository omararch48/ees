(() => {


    'use strict';


    let indexDistribution = [-1, -1, -1];
    const images = document.querySelectorAll('.galery-service'),
    activateElement = (element, showClass = '', hiddenClass = '') => {
        element.classList.toggle(showClass);
        if (hiddenClass !== '') {
            element.classList.toggle(hiddenClass);
        }
    };
    
    images.forEach(function(element, index) {
        element.addEventListener('mouseover', () => {
            if (window.innerWidth > 850) {
                if (index === 0) {
                    if (images[index].classList.contains('galery-service--50')) {
                        activateElement(images[index], 'galery-selected');
                        activateElement(images[index + 1], 'galery-lateral');
                        indexDistribution[0] = index;
                        indexDistribution[1] = index + 1;
                        indexDistribution.pop();
                    } else if (images[index].classList.contains('galery-service--30')) {
                        activateElement(images[index], 'galery-selected');
                        activateElement(images[index + 1], 'galery-lateral');
                        activateElement(images[index + 2], 'galery-lateral');
                        indexDistribution[0] = index;
                        indexDistribution[1] = index + 1;
                        indexDistribution[2] = index + 2;
                    }
                } else if (index === images.length - 1) {
                    if (images[index].classList.contains('galery-service--50')) {
                        activateElement(images[index - 1], 'galery-lateral');
                        activateElement(images[index], 'galery-selected');
                        indexDistribution[0] = index - 1;
                        indexDistribution[1] = index;
                        indexDistribution.pop();
                    } else if (images[index].classList.contains('galery-service--30')) {
                        activateElement(images[index], 'galery-selected');
                        activateElement(images[index - 1], 'galery-lateral');
                        activateElement(images[index - 2], 'galery-lateral');
                        indexDistribution[0] = index - 2;
                        indexDistribution[1] = index - 1;
                        indexDistribution[2] = index;
                    }
                } else {
                    if (images[index].classList.contains('galery-service--50')) {
                        if (images[index + 1].classList.contains('galery-service--50')) {
                            activateElement(images[index], 'galery-selected');
                            activateElement(images[index + 1], 'galery-lateral');
                            indexDistribution[0] = index;
                            indexDistribution[1] = index + 1;
                            indexDistribution.pop();
                        } else {
                            activateElement(images[index - 1], 'galery-lateral');
                            activateElement(images[index], 'galery-selected');
                            indexDistribution[0] = index - 1;
                            indexDistribution[1] = index;
                            indexDistribution.pop();
                        }
                    } else if (images[index].classList.contains('galery-service--30')) {
                        if (images[index + 1].classList.contains('galery-service--50')) {
                            activateElement(images[index], 'galery-selected');
                            activateElement(images[index - 1], 'galery-lateral');
                            activateElement(images[index - 2], 'galery-lateral');  
                            indexDistribution[0] = index - 2;
                            indexDistribution[1] = index - 1;
                            indexDistribution[2] = index;
                        } else if (images[index - 1].classList.contains('galery-service--50')) {
                            activateElement(images[index], 'galery-selected');
                            activateElement(images[index + 1], 'galery-lateral');
                            activateElement(images[index + 2], 'galery-lateral');
                            indexDistribution[0] = index;
                            indexDistribution[1] = index + 1;
                            indexDistribution[2] = index + 2;
                        } else {
                            activateElement(images[index - 1], 'galery-lateral');
                            activateElement(images[index], 'galery-selected');
                            activateElement(images[index + 1], 'galery-lateral');
                            indexDistribution[0] = index - 1;
                            indexDistribution[1] = index;
                            indexDistribution[2] = index + 1;
                        }
                    }
                }
            }
        });
    });

    images.forEach((element) => {
        element.addEventListener('mouseout', () => {
            if (indexDistribution[0] !== -1) {
                indexDistribution.forEach((element) => {
                    if (images[element].classList.contains('galery-selected')) {
                        activateElement(images[element], 'galery-selected');
                    } else if (images[element].classList.contains('galery-lateral')) {
                        activateElement(images[element], 'galery-lateral');
                    }            
                });  
            }
            indexDistribution = [-1, -1, -1];
        });
    });


})();