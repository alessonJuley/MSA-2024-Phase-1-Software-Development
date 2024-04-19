// strict mode to get more useful errors when you make mistakes
'use strict';

// reference to the button in the page
const switcher = document.querySelector('.btn');

// 'click' is the event. toggle changes the body's class attribute.
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});