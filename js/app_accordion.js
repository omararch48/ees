(() => {


    'use strict';


    const titles = document.querySelectorAll('.all_services__row');
    const contents = document.querySelectorAll('.all_services__content');
    
    titles.forEach(function(element, index) {
        element.addEventListener('click', () => {
            if (contents[index].classList.contains('all_services__content-active')) {
                contents[index].classList.remove('all_services__content-active');
                titles[index].classList.remove('all_services__content-active');
            } else {
                contents[index].classList.add('all_services__content-active');
                titles[index].classList.add('all_services__content-active');
            }
        });
    });


})();