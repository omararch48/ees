(() => {


    'use strict';


    let isMenuDisplay = false,
        isMenuOut = false;
    const body = document.querySelector('body'),
    mainMenuMobile = document.querySelector('.main-menu__mobile'),
    menuMobile = document.querySelector('.menu-mobile'),
    menuMobileClose = document.querySelector('.menu-mobile__close'),
    activateElement = (element, showClass = '', hiddenClass = '') => {
        element.classList.toggle(showClass);
        if (hiddenClass !== '') {
            element.classList.toggle(hiddenClass);
        }
    };

    mainMenuMobile.addEventListener('click', () => {
        isMenuOut = false;
        menuMobile.style.display = 'block';
        setTimeout(() => {
            menuMobile.style.top = '0';
        }, 100);
        isMenuDisplay = true;
    });
    
    menuMobileClose.addEventListener('click', () => {
        isMenuOut = false;
        menuMobile.style.top = '-40rem';
        setTimeout(() => {
            menuMobile.style.display = 'none';
        }, 400);
        isMenuDisplay = false;
    });

    menuMobile.addEventListener('mouseenter', () => {
        isMenuOut = false;
    });

    menuMobile.addEventListener('mouseout', () => {
        isMenuOut = true;
    });

    body.addEventListener('click', () => {
        if (isMenuOut) {
            menuMobile.style.top = '-40rem';
            setTimeout(() => {
                menuMobile.style.display = 'none';
            }, 400);
            isMenuOut = false;
        }
    });

    document.addEventListener('keydown', ({key}) => {
        if (key === 'Escape' && isMenuDisplay) {
            menuMobile.style.top = '-40rem';
            setTimeout(() => {
                menuMobile.style.display = 'none';
            }, 400);
            isMenuDisplay = false;
        }
    });


})();