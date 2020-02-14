$(document).ready(function(){


  //-----------------STICKY NAVIGATION--------------------  
$('.js--section-about').waypoint(function(direction){
    if(direction=="down"){
        //αν σκρολαρει κατω θελουμε να προσθετουμε στο nav την class sticky 
        $('nav').addClass('sticky');
    }else{
        //αν σκρολαρει πανω θελουμε να αφαιρουμε την class sticky 
        $('nav').removeClass('sticky');
    }},{offset:'60px;'}); //αρα θα συμβει 60px πριν ακουμπησει το ection που εχουμε ορισει


//-------------------SCROLL ON BUTTONS----------------------

$('.js--scroll-to-about').click(function(){
    $('html,body').animate(
        {scrollTop:$('.js--section-about').offset().top},1000);
})


//----NAVIGATION SMOOTH SCROLLING---------
// I searched for smooth scrolling snippet 
//paste the code and define anchors 
$(function() {
    $('a[href*=\\#]:not([href=\\#])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 770);
          return false;
        }
      }
    });
  });


/*---Animations on scroll...waypoints---*/

$('.js--wp-1').waypoint(function(direction){
  $('.js--wp-1').addClass('animated fadeIn');
    }, {offset: '50%'});
});

$('.js--wp-2').waypoint(function(direction){

  $('.js--wp-2').addClass('animated fadeIn');

}, {offset: '50%'});

$('.js--wp-3').waypoint(function(direction){

  $('.js--wp-3').addClass('animated fadeIn');

}, {offset: '50%'});

//--------MOBILE NAVIGATION--------------------------
$('.js--nav-icon').click(function(){
  //save the navigation selection 
  var nav=$('.js--main-nav');
  var icon=$('.js--nav-icon .nav-icon')
  nav.slideToggle(200); //will do the animation for the nav-list 
  

  if(icon.attr('name')=='menu'){
    icon.attr('name','close');
    // icon.removeAttr('name');
  }else if(icon.attr('name')=='close'){
    icon.attr('name','menu');
  }
});
