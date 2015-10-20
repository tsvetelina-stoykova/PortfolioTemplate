


function smoothScroll (duration) {
  $('a[href^="#"]').on('click', function(event) {


    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, duration);
    }
  });
}




// function workBelt() {
//
//   $(".trigger").remove();
//   $(".return").remove();
//
//   $('.thumb-container label').click(function() {
//     $('.work-belt').addClass("slided");
//     $('.work-container').show();
//   });
//
//   $('.work-return').click(function() {
//     $('.work-belt').removeClass("slided");
//     $('.work-container').hide(800);
//   });
//
// }
function workBelt() {

	$('.thumb-unit').click(function() {
		$('.work-belt').css('left', '-100%');
		$('.work-container').show();
	});

	$('.work-return').click(function() {
		$('.work-belt').css('left', '0%');
		$('.work-container').hide();

	});
}

function workLoad() {

	$.ajaxSetup({ cache: false });

	$('.thumb-unit').click(function(){

		var $this = $(this),
        newTitle = $this.find('strong').text(),
        newfolder = $this.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
		    newHTML = '/work1/'+ newfolder +'.html';

		$('.project-load').load(spinner).load(newHTML);
    $('.project-title').text(newTitle);

	});


}


(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );






$(function() {
	smoothScroll(1000);
	workBelt();
	workLoad();

  $("header h1").fitText(1.2, { minFontSize: '20px', maxFontSize: '72px' });
  
});
