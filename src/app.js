import ScrollMagic from 'scrollmagic';

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({ offset: 250, reverse: false }).setClassToggle("#callouts .icon-block", "active");
controller.addScene(scene);

const scene2 = new ScrollMagic.Scene({ triggerElement: '#contact p', reverse: false }).setClassToggle("#contact>div>:not(:first-child)", "active");
controller.addScene(scene2);

const scene3 = new ScrollMagic.Scene({ triggerElement: '#callouts', reverse: false }).setClassToggle("#callouts i", "active");
controller.addScene(scene3);

const scene4 = new ScrollMagic.Scene({ triggerElement: '#skills .skills-header', reverse: false }).setClassToggle("#skills .bar-inner", "active");
controller.addScene(scene4);