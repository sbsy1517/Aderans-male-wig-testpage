(function () {
	$('.mobile-menu-btn').on('click', function() {
		$('.hamburger-menu').toggleClass('animate');
        $('.mobile-menu').toggleClass('open');
	});


})();

$(window).resize(function(){
    x=$(window).width();
    if(x>992){
      $('.mobile-menu').removeClass('open').addClass('d-none');
      $('.hamburger-menu').removeClass('animate');
    }else{
        $('.mobile-menu').removeClass('d-none');
    }
});


//index navbar scroll setting
$(window).trigger('resize').trigger('scroll');
$(window).scroll(function(e){
  if ($(window).scrollTop()>0){
    $(".fixed-top").addClass("top");
    
  }else{
    $(".fixed-top").removeClass("top");
  };
  x=$(window).width();
  if(x>992){
    $(".fixed-top").removeClass("mobile-top")
  }else{
    $(".fixed-top").addClass("mobile-top")
  };
  
});


// //go down and top button setting
// $(document).on("click",'.nav-btn',function(e){
// e.preventDefault();
// let target=$('.nav-btn').attr('href');
// $('html,body').animate({
//     scrollTop: $(target).offset().top - 130
// },100);
// });



