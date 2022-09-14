(() => {


    'use strict';


    let indexDistribution = {
        one: -1,
        two: -1,
        three: -1,
    };
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
                        images[index].style.width = 'calc(66.7% - 1rem)';
                        images[index + 1].style.width = 'calc(33.33% - 1rem)';
                        indexDistribution.one = index;
                        indexDistribution.two = index + 1;
                        delete indexDistribution.three;
                    } else if (images[index].classList.contains('galery-service--30')) {
                        images[index].style.width = 'calc(50% - 1rem)';
                        images[index + 1].style.width = 'calc(25% - 1rem)';
                        images[index + 2].style.width = 'calc(25% - 1rem)';
                        indexDistribution.one = index;
                        indexDistribution.two = index + 1;
                        indexDistribution.three = index + 2;
                    }
                } else if (index === images.length - 1) {
                    if (images[index].classList.contains('galery-service--50')) {
                        images[index - 1].style.width = 'calc(33.33% - 1rem)';
                        images[index].style.width = 'calc(66.7% - 1rem)';
                        indexDistribution.one = index - 1;
                        indexDistribution.two = index;
                        delete indexDistribution.three;
                    } else if (images[index].classList.contains('galery-service--30')) {
                        images[index].style.width = 'calc(50% - 1rem)';
                        images[index - 1].style.width = 'calc(25% - 1rem)';
                        images[index - 2].style.width = 'calc(25% - 1rem)';
                        indexDistribution.one = index - 2;
                        indexDistribution.two = index - 1;
                        indexDistribution.three = index;
                    }
                } else {
                    if (images[index].classList.contains('galery-service--50')) {
                        if (images[index + 1].classList.contains('galery-service--50')) {
                            images[index].style.width = 'calc(66.7% - 1rem)';
                            images[index + 1].style.width = 'calc(33.33% - 1rem)';
                            indexDistribution.one = index;
                            indexDistribution.two = index + 1;
                            delete indexDistribution.three;
                        } else {
                            images[index - 1].style.width = 'calc(33.33% - 1rem)';
                            images[index].style.width = 'calc(66.7% - 1rem)';
                            indexDistribution.one = index - 1;
                            indexDistribution.two = index;
                            delete indexDistribution.three;
                        }
                    } else if (images[index].classList.contains('galery-service--30')) {
                        if (images[index + 1].classList.contains('galery-service--50')) {
                            images[index].style.width = 'calc(50% - 1rem)';
                            images[index - 1].style.width = 'calc(25% - 1rem)';
                            images[index - 2].style.width = 'calc(25% - 1rem)';    
                            indexDistribution.one = index - 2;
                            indexDistribution.two = index - 1;
                            indexDistribution.three = index;
                        } else if (images[index - 1].classList.contains('galery-service--50')) {
                            images[index].style.width = 'calc(50% - 1rem)';
                            images[index + 1].style.width = 'calc(25% - 1rem)';
                            images[index + 2].style.width = 'calc(25% - 1rem)';    
                            indexDistribution.one = index;
                            indexDistribution.two = index + 1;
                            indexDistribution.three = index + 2;
                        } else {
                            images[index - 1].style.width = 'calc(25% - 1rem)';    
                            images[index].style.width = 'calc(50% - 1rem)';
                            images[index + 1].style.width = 'calc(25% - 1rem)';
                            indexDistribution.one = index - 1;
                            indexDistribution.two = index;
                            indexDistribution.three = index + 1;
                        }
                    }
                }
            }
        });
    });

    images.forEach((element) => {
        element.addEventListener('mouseout', () => {
            images.forEach((element) => {
                if (window.innerWidth > 850) {
                    if (element.classList.contains('galery-service--50')) {
                        element.style.width = 'calc(50% - 1rem)';
                    } else if (element.classList.contains('galery-service--30')) {
                        element.style.width = 'calc(33.33% - 1rem)';
                    }
                }
            });
        });
    });

    window.addEventListener('resize', () => {

        if (window.innerWidth == 850) {
            if (images[0].style.width !== 'max(100%, 25rem)') {
                images.forEach((element) => {
                    element.style.width = 'max(100%, 25rem)';
                });
            }
        } else if (window.innerWidth == 851) {
            if (images[0].style.width === 'max(100%, 25rem)') {
                images.forEach((element) => {
                    if (element.classList.contains('galery-service--50')) {
                        element.style.width = 'calc(50% - 1rem)';
                    } else if (element.classList.contains('galery-service--30')) {
                        element.style.width = 'calc(33.33% - 1rem)';
                    }
                });
            }
        }


    });


})();