$(document).ready(function () {
    'use strict';

    // onLoad -> clear fields
    $('.contact_form--input').each(function(index, el) {
        $(el).val('');
    });

    $('.go-down').on('click', function () {
        $('.body, html').animate({
            scrollTop: $('.about').offset().top
        }, 1000)
    });

    $('.menu-item-box .menu-item').on('click', function (e) {
        e.preventDefault();
        $('.menu-item-box').removeClass('active');
        $(this).parent('.menu-item-box').addClass('active');
        $('html, body').animate({
            scrollTop: $($(this).data('link')).offset().top
        }, 1000);
    });

    $('.menu_like-link').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).data('link')).offset().top + 300
        }, 1000);
    });

    $('.disabled-link').click(function(event) {
        /* Act on the event */
        event.preventDefault();
    });

    



    $('.section-link').on('click', function (e) {
        e.preventDefault();
        $('.menu-item-box').removeClass('active');
        $(this).parent('.menu-item-box').addClass('active');
        $('html, body').animate({
            scrollTop: $($(this).data('link')).offset().top
        }, 1000);
    });

    $(".project-box").on('click', function() {
        const url = $(this).data().url;
        if(url !== "") {
            window.open(url, '_blank');
        }
        
    });

    // COntact Form
    $('#contact_form').submit(function(event) {
        /* Act on the event */
        event.preventDefault();
        let inputs = {};
        $('.contact_form--input').each(function(index, el) {
            inputs[this.name] = $(this).val();
        });

        // console.log(inputs);
        // $.ajax({
        //     url: '/path/to/file',
        //     type: 'default GET (Other values: POST)',
        //     dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
        //     data: {param1: 'value1'},
        // })
        // .done(function() {
        //     console.log("success");
        // })
        // .fail(function() {
        //     console.log("error");
        // })
        // .always(function() {
        //     console.log("complete");
        // });
        

        setTimeout(() => {
            $('#to_hide').fadeOut('slow', function() {
                alert("Thank you for reaching me out, I will reach you out as soon as possible.");
                $('.contact_form--input').each(function(index, el) {
                    $(el).val('');
                });
            });
        }, 1000);

        
    });

    if ($('.projects-slider').length) {
        $('.projects-slider').slick({
            slidesToShow: 4,
            infinite: true,
            focusOnSelect: true,
            responsive: [{
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2,
                    infinite: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2,
                    infinite: true
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                    infinite: true
                }
            }]
        });
    }
   

    


});
// Valentine.celebrate();
/* <div class="container" id="ValentinesSection">
    <div class="row" id="ValentinesRow">
      <div class="col-lg-8 col-xs-12 mx-auto">
        <form id="valentinesForm">
          <input type="text" class="d-inline form-control" style="text-align: center; padding-top:15px; width:50%;" placeholder="enter secret code" id="SecretCode"> 
          <button class="btn p-3 btn-danger" style="margin-top: 5px;" id="ValentinesBtn">
            <i class="far fa-heart"></i> подтвердить <i class="far fa-heart"></i>
          </button>
          
        </form>
      </div>
      <!-- Gifts!!!! -->
      <div class="col-12 text-center p-3 hidden" style="background-color: #dc143c; color: white;" id="lox1234">
        <h1><i class="far fa-heart pb-2"></i> С днем святого пидораса! <i class="far fa-heart"></i></h1>
        <h3>❤️🥰😍 Поздравляю, ты лох! ❤️🥰😍 </h3>
      </div>
      <div class="col-12 text-center p-3 hidden" style="background-color: #dc143c; color: white;" id="tissa2020">
        <h1><i class="far fa-heart pb-2"></i> С днем святого валентина! <i class="far fa-heart"></i></h1>
        <div style="height: 430px;">
          <img src="./IMG_3174.JPG" height="300px" alt="" class="rotate90">
          <img src="./IMG_0402.JPG" height="350px" alt="" >
        </div>
        <h3>❤️🥰😍 Любимой Красивой Злюке ❤️🥰😍 </h3>
      </div>
      <div class="col-12 text-center p-3 hidden" style="background-color: #dc143c; color: white;" id="nikima168">
        <h1><i class="far fa-heart pb-2"></i> С днем святого валентина! <i class="far fa-heart"></i></h1>
        <div>
          <img src="./B416DB34-73C2-48D4-858B-E5F2918B4567.JPG" class="rotateNeg90" height="500px" alt="" class="rotate90">
        </div>
        <h3>❤️🥰😍 Самой Любимой И Красивой Маме ❤️🥰😍 </h3>
      </div>
      <div class="col-12 text-center p-3 hidden" style="background-color: #dc143c; color: white;" id="devochka">
        <h1><i class="far fa-heart pb-2"></i> С днем святого валентина! <i class="far fa-heart"></i></h1>
        <h3>❤️🥰😍 Желаю прочитать это красивой девчонке! ❤️🥰😍 </h3>
      </div>
    </div>
  </div>
     */


const Valentine = (function() {

  const codes = ['tissa2020', 'nikima168', 'lox1234', 'devochka'];
  
  function celebrate() {
    // hide 
    $(".hidden").hide();
    // set up some css
    if(window.innerWidth < 800) {
      $("#SecretCode").css('font-size', "10px");
      $("#ValentinesBtn").css('font-size', "10px");
    }
    // set up handlers
    _setUpHandlers();
  }

  function _setUpHandlers() {
    $("#ValentinesBtn").on('click', proccessSecretCode);
  }

  function _clearField() {
    $("#SecretCode").val('').prop('readonly', false);;
  }

  function _showError(windowWidth) {
    let message = "Incorrect code =<";
    if(windowWidth < 800) message = "Слишком маленький экран =<";
    $("#SecretCode").val(message).prop('readonly', true);
    setTimeout(() => {
      _clearField();
    }, 1500);
  }

  function _GiveGift(code) {
    $("#ValentinesRow").children().first().fadeOut('slow', function() {
      const that = $(this);
      $(this).fadeOut('slow', function() {
        $("#" + code).slideDown(2000, function() {
          setTimeout(() => {
            $(this).slideUp(2000, function() {
              $(that).fadeIn('slow');
            });
          }, 6000);
        });
      });
    });
    
  }

  function proccessSecretCode(e) {
    // grab valentines field
    const code = $("#SecretCode").val(),
          windowWidth = window.innerWidth;
    e.preventDefault();
    // clear field
    _clearField();
    // validate code
    codes.includes(code) ? _GiveGift(code) : _showError(windowWidth);
  }

  return {
    celebrate
  };
})();


