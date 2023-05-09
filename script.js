$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        
        
    });
    $('nav ul li a').click(function() {
        $('nav ul').removeClass('active');
        $('.menu-btn i').removeClass("active");
      });
});
$(document).ready(function() {
    // Smooth scroll to section on click
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      var target = $(this.hash);
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1300);
    });
    
  });