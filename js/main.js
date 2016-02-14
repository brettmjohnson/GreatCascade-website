$('.thumbnails').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    gallery: {
        enabled: true
    },
    mainClass: 'mfp-with-zoom',
    zoom: {
        enabled: true,
        duration: 200,
        easing: 'ease-out',
        opener: function(openerElement) {
            return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
    }
});
