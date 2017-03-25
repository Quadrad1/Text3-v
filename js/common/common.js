$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
});
$(".sidebar__list-item").click(function(){
  $(".sidebar__list__item__sublist-item-a").css({'display':'block'});
});




var check_menu__button = 0;
$(".menu__button").click(function(){

  if(check_menu__button == 0){
    $(".menu__nav-cont").css({'display':'flex'})
    check_menu__button = 1;
  }else if(check_menu__button == 1){
    $(".menu__nav-cont").css({'display':'none'})
    check_menu__button = 0;
  }
});
