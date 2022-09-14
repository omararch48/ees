(() => {


    'use strict';


    let mainUbication = window.scrollY,
        outFooter = true,
        isSinglePage = false;
    const footer = document.querySelector('.footer'),
    mainMenu = document.querySelector('.main-menu'),
    activateElement = (element, showClass = '', hiddenClass = '') => {
        element.classList.toggle(showClass);
        if (hiddenClass !== '') {
            element.classList.toggle(hiddenClass);
        }
    };

    footer.addEventListener('mouseover', () => {
        outFooter = false;
    });

    footer.addEventListener('mouseout', () => {
        outFooter = true;
    });

    window.onscroll = function() {
        if (mainUbication > 100) {
            if (mainMenu.classList.contains('main-menu__listMod')) {
                activateElement(mainMenu, 'main-menu__listMod');
            }
        }
        let displacement = window.scrollY;
        if (mainUbication >= displacement) {
            if (outFooter) {
                document.querySelector('.main-menu').style.top = '0';
                if (mainUbication > 100 && mainUbication < 600) {
                    if (!isSinglePage) {
                        mainMenu.style.backgroundColor = 'var(--main-transparentBlack)';
                    }
                } else if (mainUbication > 600) {
                    mainMenu.style.backgroundColor = 'var(--main-green)';
                } else {
                    if (!isSinglePage) {
                        mainMenu.style.backgroundColor = 'transparent';
                    }
                }
            }
        } else {
            mainMenu.style.top = '-10rem';
        }
        mainUbication = displacement;
        if (mainUbication > 100) {
            activateElement(mainMenu, 'main-menu__listMod');
        }
    }

    if (document.querySelectorAll('#singlePage').length > 0) {
        isSinglePage = true;
    }
    


})();