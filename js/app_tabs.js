(() => {


    'use strict';


    const tabs = document.querySelectorAll('.tabs');

    tabs.forEach((elementTab) => {
        let tabsTabs = elementTab.querySelectorAll('.tabs__tab');
        let tabsContainers = elementTab.querySelectorAll('.tabs__container');
        let indexTabSelected = 0;
        
        tabsTabs.forEach(function(element, index) {
            element.addEventListener('click', () => {
                tabsTabs[indexTabSelected].classList.remove('tabs__tab--selected');
                element.classList.add('tabs__tab--selected');
                tabsContainers[indexTabSelected].classList.remove('tabs__container--selected');
                tabsContainers[index].classList.add('tabs__container--selected');
                indexTabSelected = index;
            });
        });
    });


})();