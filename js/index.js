
// delay my code from executing until all DOM assets have been loaded //
$(document).ready()

// show more of the blog post //
$('.readmore').on('click', function(event) {
	event.preventDefault();
  	$(this).next('p.hide').slideDown();
  	$(this).show();
  	$('.readmore').hide();
  	$('.readless').show();
});

// show less of the blog post //
$('.readless').on('click', function(event) {
	event.preventDefault();
	$('p.hide').slideUp();
	$('.readless').hide();
	$('.readmore').show();
})

// learn more About Relaxr//
$('.learnmore').on('click', function(event) {
	event.preventDefault();
  	$(this).next('.hide').slideDown();
  	$('.learnmore').slideDown();
  	$('.learnmore').hide();
  	
});