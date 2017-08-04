function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  
  $('.projects').hide();
  
  $('.projects-button').on('click', function() {
		$(this).next().slideToggle(400);
    $(this).toggleClass('active');
     
   
    if($(this).text() === 'Recent Projects'){
      $(this).text('Projects Viewed');
    }
    else{
      $(this).text('Recent Projects');
    }
	});
}

$(document).ready(main);