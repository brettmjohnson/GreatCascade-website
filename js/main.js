$('.thumbnails').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    gallery: {
        enabled: true
    },

//    mainClass: 'mfp-with-zoom',
    zoom: {
        enabled: true,
        duration: 300,
        easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        opener: function(openerElement) {
            return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
    },
    
    // Delay in milliseconds before popup is removed
  removalDelay: 300,

  // Class that is added to popup wrapper and background
  // make it unique to apply your CSS animations just to this exact popup
  mainClass: 'mfp-fade'
});
