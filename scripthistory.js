$(function(){

$('.content-sentents').fadeIn(2500);

$('.content-image').fadeIn(4500);


$('.kami1').hover(
  function(){
    $('.kami2').fadeIn();
  },
  function(){
    $('.kami2').fadeOut();
  }
);


$('.kami3').hover(
  function(){
    $('.kami4').fadeIn();
  },
  function(){
    $('.kami4').fadeOut();
  }
);


$('.kami5').hover(
  function(){
    $('.kami6').fadeIn();
  },
  function(){
    $('.kami6').fadeOut();
  }
);


$('.kami7').hover(
  function(){
    $('.kami8').fadeIn();
  },
  function(){
    $('.kami8').fadeOut();
  }
);


$('.kami9').hover(
  function(){
    $('.kami10').fadeIn();
  },
  function(){
    $('.kami10').fadeOut();
  }
);


$('.kami11').hover(
  function(){
    $('.kami12').fadeIn();
  },
  function(){
    $('.kami12').fadeOut();
  }
);


$('.login-show1').click(function() {
  $('#login-modal1').fadeIn();
});


$('.login-show2').click(function() {
  $('#login-modal2').fadeIn();
});


$('.login-show3').click(function() {
  $('#login-modal3').fadeIn();
});


$('.login-show4').click(function() {
  $('#login-modal4').fadeIn();
});


$('.login-show5').click(function() {
  $('#login-modal5').fadeIn();
});


$('.login-show6').click(function() {
  $('#login-modal6').fadeIn();
});


$('.close-modal').click(function(){
    $('#login-modal1').fadeOut();
  });

  $('.close-modal').click(function(){
      $('#login-modal2').fadeOut();
    });

  $('.close-modal').click(function(){
      $('#login-modal3').fadeOut();
    });

  $('.close-modal').click(function(){
      $('#login-modal4').fadeOut();
    });


  $('.close-modal').click(function(){
      $('#login-modal5').fadeOut();
    });


  $('.close-modal').click(function(){
      $('#login-modal6').fadeOut();
    });


});
