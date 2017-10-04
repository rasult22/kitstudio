$(function() {
   
    // start the first slider *****
    
    $('.main-slider').slick({

           dots: true,
           prevArrow: '<div class="prev-s-one-s"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
           nextArrow: '<div class="next-s-one-s"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
    });
    
    // the end first slider *****
    
    //start the second slider *****
    
    $('.slider-right .all-slides').slick({
        
        prevArrow: '<div class="prev-s-two-s"></div>',
        nextArrow: '<div class="next-s-two-s "></div>',
        swipe: false
    });
    
    // the end second slider *****
    
    //slider wrap 
    
    
    $('.draggable').addClass('z-index');
    
    
    // button scroll for page 
    
    var $body = $('html body');
    var $buttonScroll = $('.scrollTop');
    
    $(window).on('scroll', function() {
        
        if($(this).scrollTop() > 350) {
            
            $buttonScroll.fadeIn();
        } else {
            
            $buttonScroll.fadeOut();
        }
    });
    
    $buttonScroll.on('click', function() {
        
         $body.animate({
            
            scrollTop: 0
        }, 800)
    });
    
    // the end button scroll for page 
    
    // this is section eight (this code does switch between two elements)
    
        var brif = $('.brif_img');
        var audit = $('.audit_img');
         
        brif.on('mouseover', function() { 
            
            $(this).addClass('brif_img-dark'); 
        }); 
    
        brif.on('mouseout', function() { 
            
            $(this).removeClass('brif_img-dark'); 
        }); 
     
        audit.on('mouseover', function(){ 
            
            $(this).addClass('audit_img-dark'); 
        }); 
    
        audit.on('mouseout', function(){
            
            $(this).removeClass('audit_img-dark'); 
        });
    
    //the end section eight
    
    // hamburger menu
    
        $('.menuToggle').on('click', function() {

            $(this).toggleClass('click');

            $('.menu').slideToggle(400);
        });

    // the end hamburger menu
    
    //this is section-two (two-sell)
    
    var $description = $('.descriptions-sell');
    
    function doChange(name, num) {
        
        name.classList.add(num);
    }
    
    function removeChange(name, num) {
        
        name.classList.remove(num);
    }
    
    var $icons = $('.style-icon');
    var $imgsAll = $('.right-sell .all');
    
    //****
    
    var one = $('.descriptions-sell');
    var two = $('.descriptions-sell-two');
    var three = $('.descriptions-sell-three');
    var four = $('.descriptions-sell-four');
    var five = $('.descriptions-sell-five');
    
    //****
    
    for(var i = 0; i < $icons.length; i++) {
        
        $icons.eq(i).on('mouseenter', function() {
            
            var $attr = $(this).attr('data-name');
            
            if($attr == 1) {
            
                doChange($imgsAll[4], 'changes');
                
                one.addClass('open');
                one.removeClass('none');
                two.addClass('none');
                three.addClass('none');
                four.addClass('none');
                five.addClass('none');
            } else if($attr == 2) {
                
                doChange($imgsAll[3], 'changes');
                
               one.addClass('none');
               two.addClass('open');
               two.removeClass('none');
               three.addClass('none');
               four.addClass('none');
               five.addClass('none');
            } else if($attr == 3) {
                
                doChange($imgsAll[2], 'changes');
                one.addClass('none');
                two.addClass('none');
                three.removeClass('none');
                three.addClass('open');
                four.addClass('none');
                five.addClass('none');
            } else if($attr == 4) {
                
                doChange($imgsAll[1], 'changes');
                one.addClass('none');
                two.addClass('open');
                three.addClass('none');
                four.addClass('open');
                four.removeClass('none');
                five.addClass('none');
            } else if($attr == 5) {
                
                doChange($imgsAll[0], 'changes');
                one.addClass('none');
                two.addClass('none');
                three.addClass('none');
                four.addClass('none');
                five.removeClass('none');
                five.addClass('open');
            } 
        })
    }
    
    for(var i = 0; i < $icons.length; i++) {
        
        $icons.eq(i).on('mouseleave', function() {
            
            var $attr = $(this).attr('data-name');
            
            if($attr == 1) {
            
                removeChange($imgsAll[4], 'changes');
            } else if($attr == 2) {
                
                removeChange($imgsAll[3], 'changes');
            } else if($attr == 3) {
                
                removeChange($imgsAll[2], 'changes');
            } else if($attr == 4) {
                
                removeChange($imgsAll[1], 'changes');
            } else if($attr == 5) {
                
                removeChange($imgsAll[0], 'changes');
            }
        })
    }
    
    //*******
    
    function addIcons(name, classN) {
        
        name.classList.add(classN);
    }
    
    for(var i = 0; i < $imgsAll.length; i++) {
        
        $imgsAll.eq(i).on('mouseenter', function() {
            
            $(this).addClass('changes');
            
            var $attrImgs = $(this).attr('data-number');
            
            if($attrImgs == 1) {
                
                addIcons($icons[4], 'hover-icon-y');
            } else if($attrImgs == 2) {
                
                addIcons($icons[3], 'hover-icon-p');
            } else if($attrImgs == 3) {
                
                addIcons($icons[2], 'hover-icon-b');
            } else if($attrImgs == 4) {
                
                addIcons($icons[1], 'hover-icon-g');
            } else if($attrImgs == 5) {
                
                addIcons($icons[0], 'hover-icon-g');
            }
        });
    }
    
    function removeIcons(name, classN) {
        
        name.classList.remove(classN);
    }
    
     for(var i = 0; i < $imgsAll.length; i++) {
        
        $imgsAll.eq(i).on('mouseleave', function() {
            
            $(this).removeClass('changes');
            
            var $attrImgs = $(this).attr('data-number');
            
            if($attrImgs == 1) {
                
                removeIcons($icons[4], 'hover-icon-y');
            } else if($attrImgs == 2) {
                
                removeIcons($icons[3], 'hover-icon-p');
            } else if($attrImgs == 3) {
                
                removeIcons($icons[2], 'hover-icon-b');
            } else if($attrImgs == 4) {
                
                removeIcons($icons[1], 'hover-icon-g');
            } else if($attrImgs == 5) {
                
                removeIcons($icons[0], 'hover-icon-g');
            } 
        })
    }
    
    //this is the end section-two
    
    //this is section nine(slider-two)
    
    var $prev = $('.prev-s-two-s');
    var $next = $('.next-s-two-s');
    
    var $allPeople = $('.all-people .all-h');
    var z = 0; 
    
    $next.on('click', function() {
       
        runNext();
    });
    
    $prev.on('click', function() {
           
        $allPeople.eq(z).removeClass('change-bg-nine');
        z--;
        
        if(z < 0) {
            
            z = $allPeople.length - 1;
        }
        
         $allPeople.eq(z).addClass('change-bg-nine');
    });
    
    function runNext() {
        
        $allPeople.eq(z).removeClass('change-bg-nine');
        z++;
        
        if(z >= $allPeople.length) {
            
            z = 0;
        }
        
         $allPeople.eq(z).addClass('change-bg-nine');
    }
    
    //popup
    
    $('.close').on('click', function() {
        
        popupMain.close();
        popupSimple.close();
        $('.main-popup-done').addClass('cls');
    });
    
    $('.overlay').on('click', function() {
        
        popupMain.close();
        popupSimple.close();
    });
    
    var popupMain = new popupSend({
        
        modal: '.main-popup',
        overlay: '.overlay'
    });
    
    var popupSimple = new popupSend({
        
        modal: '.simple-popup',
        overlay: '.overlay'
    });
    
    var $sendB = $('.send-b');
    
    $sendB.on('click', function() {
        
        popupSimple.open();
    });
    
    
    $('.i-want').on('click', function() {
        
        popupMain.open();
    });
    
    $('.btn-buy').on('click', function() {
        
        popupMain.open();
    });
    
    $('.button-advice').on('click', function() {
        
        popupMain.open();
    });
    
    //send and second popup
    
      var $allP = $('.all-p').addClass('close-poup');

      $("#form").submit(function() {
        
        $.ajax({
            
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
            
        }).done(function() {
            
            $('.overlay').removeClass('open-overlay');
            
            if($allP.hasClass('close-poup')) {
                
                $('.main-popup-done').removeClass('cls');
            }
        });
        
        return false;
    });

     $("#form-two").submit(function() {
        
        $.ajax({
            
            type: "POST",
            url: "mailTwo.php",
            data: $(this).serialize()
            
        }).done(function() {
            
            $('.overlay').removeClass('open-overlay');
            
            if($allP.hasClass('close-poup')) {
                
                $('.main-popup-done').removeClass('cls');
            }
        });
        
        return false;
    });
    
	//SECTION_PROBLEM_TOOOLTIPS
     $('.items .item-bad').on('mouseenter',function(e){
         $(this).find('.bad-tooltip').fadeIn(50);
         /* Отмена всплытия для детеныша */
         $(this).find('.bad-tooltip').on('mouseenter',function(e){e.stopPropagation();});
     });
     $('.items .item-bad').on('mouseleave',function(){
         $(this).find('.bad-tooltip').fadeOut(50);
     });
    $('.items .item-good').on('mouseenter',function(e){
         $(this).find('.good-tooltip').fadeIn(50);
         /* Отмена всплытия для детеныша */
         $(this).find('.good-tooltip').on('mouseenter',function(e){e.stopPropagation();});
     });
     $('.items .item-good').on('mouseleave',function(){
         $(this).find('.good-tooltip').fadeOut(50);
     });
    
    //nav scroll
    
    $('.nav a').not('.link').on('click', function(e){
		e.preventDefault();

		var selector = $(this).attr('href');
		var section = $(selector);

		$('html, body').animate({
			scrollTop: section.offset().top - 0
			}, 550);
		});
    
     
    $('.menu a').not('.link').on('click', function(e){
		e.preventDefault();

		var selectorTwo = $(this).attr('href');
		var sectionTwo = $(selectorTwo);

		$('html, body').animate({
			scrollTop: sectionTwo.offset().top - 30
			}, 550);
		});
    
     $('.item a').on('click', function(e){
		e.preventDefault();

		var selectorTwo = $(this).attr('href');
		var sectionTwo = $(selectorTwo);

		$('html, body').animate({
			scrollTop: sectionTwo.offset().top - 30
			}, 550);
		});
    
    //screens 
    
    var $displayNone = $('.dsp-none');
    
    var $allScrens = $('.top-sect-s');
       
    var $scAll = $('.sc-all');
    
    for(var i = 0; i < $scAll.length; i++) {
        
        $scAll.eq(i).on('mouseenter', function() {
            
            var $scrnData = $(this).attr('data-scrn');
            if($scrnData == 1) {
                
                $allScrens[8].classList.remove('dsp-none');
                $allScrens[7].classList.add('dsp-none');
                $allScrens[6].classList.add('dsp-none');
                $allScrens[5].classList.add('dsp-none');
                $allScrens[4].classList.add('dsp-none');
                $allScrens[3].classList.add('dsp-none');
                $allScrens[2].classList.add('dsp-none');
                $allScrens[1].classList.add('dsp-none');
                $allScrens[0].classList.add('dsp-none');
               
            } else if($scrnData == 2) {
                
                $allScrens[8].classList.add('dsp-none');
                $allScrens[7].classList.remove('dsp-none');
                $allScrens[6].classList.add('dsp-none');
                $allScrens[5].classList.add('dsp-none');
                $allScrens[4].classList.add('dsp-none');
                $allScrens[3].classList.add('dsp-none');
                $allScrens[2].classList.add('dsp-none');
                $allScrens[1].classList.add('dsp-none');
                $allScrens[0].classList.add('dsp-none');
                
            } else if($scrnData == 3) {
                
                $allScrens[8].classList.add('dsp-none');
                $allScrens[7].classList.add('dsp-none');
                $allScrens[6].classList.remove('dsp-none');
                $allScrens[5].classList.add('dsp-none');
                $allScrens[4].classList.add('dsp-none');
                $allScrens[3].classList.add('dsp-none');
                $allScrens[2].classList.add('dsp-none');
                $allScrens[1].classList.add('dsp-none');
                $allScrens[0].classList.add('dsp-none');
                
            } else if($scrnData == 4) {
                
                $allScrens[8].classList.add('dsp-none');
                $allScrens[7].classList.add('dsp-none');
                $allScrens[6].classList.add('dsp-none');
                $allScrens[5].classList.add('dsp-none');
                $allScrens[4].classList.remove('dsp-none');
                $allScrens[3].classList.add('dsp-none');
                $allScrens[2].classList.add('dsp-none');
                $allScrens[1].classList.add('dsp-none');
                $allScrens[0].classList.add('dsp-none');
                
            } else if($scrnData == 5) {
                
                $allScrens[8].classList.add('dsp-none');
                $allScrens[7].classList.add('dsp-none');
                $allScrens[6].classList.add('dsp-none');
                $allScrens[5].classList.add('dsp-none');
                $allScrens[4].classList.add('dsp-none');
                $allScrens[3].classList.add('dsp-none');
                $allScrens[2].classList.add('dsp-none');
                $allScrens[1].classList.add('dsp-none');
                $allScrens[0].classList.remove('dsp-none');
                
            } else if($scrnData == 6) {
                
                $allScrens[8].classList.add('dsp-none');
                $allScrens[7].classList.add('dsp-none');
                $allScrens[6].classList.add('dsp-none');
                $allScrens[5].classList.remove('dsp-none');
                $allScrens[4].classList.add('dsp-none');
                $allScrens[3].classList.add('dsp-none');
                $allScrens[2].classList.add('dsp-none');
                $allScrens[1].classList.add('dsp-none');
                $allScrens[0].classList.add('dsp-none');
                
            } else if($scrnData == 7) {
                /*for(i=0;i<allScrens.lenght;i++){
                    if(i == 1){
                        $(this).removeClass('dsp-none');
                        continue;
                    }
                    else{
                        $(this).addClass('dsp-none');
                    }
                }*/
                
                $allScrens[8].classList.add('dsp-none');
                $allScrens[7].classList.add('dsp-none');
                $allScrens[6].classList.add('dsp-none');
                $allScrens[5].classList.add('dsp-none');
                $allScrens[4].classList.add('dsp-none');
                $allScrens[3].classList.add('dsp-none');
                $allScrens[2].classList.add('dsp-none');
                $allScrens[1].classList.remove('dsp-none');
                $allScrens[0].classList.add('dsp-none');
            } else if($scrnData == 8) {
                
                $allScrens[8].classList.add('dsp-none');
                $allScrens[7].classList.add('dsp-none');
                $allScrens[6].classList.add('dsp-none');
                $allScrens[5].classList.add('dsp-none');
                $allScrens[4].classList.add('dsp-none');
                $allScrens[3].classList.add('dsp-none');
                $allScrens[2].classList.remove('dsp-none');
                $allScrens[1].classList.add('dsp-none');
                $allScrens[0].classList.add('dsp-none');
                
            } else if($scrnData == 9) {
                
                $allScrens[8].classList.add('dsp-none');
                $allScrens[7].classList.add('dsp-none');
                $allScrens[6].classList.add('dsp-none');
                $allScrens[5].classList.add('dsp-none');
                $allScrens[4].classList.add('dsp-none');
                $allScrens[3].classList.remove('dsp-none');
                $allScrens[2].classList.add('dsp-none');
                $allScrens[1].classList.add('dsp-none');
                $allScrens[0].classList.add('dsp-none');
            }
        });
    }
    
    $('.top-screens .scrn').on('click', function() {
            
            window.open('http://acperovo.ru');
    });
        
    $('.almost-top .one').on('click', function() {
          
          window.open('http://www.profitator.ru');
    });
        
    $('.almost-top .two').on('click', function() {
          
          window.open('https://ru.anviovr.com');
    });
    
    $('.center-screens .three').on('click', function() {
        
        window.open('http://www.frontrowshop.ru');
    });
    
    $('.center-screens .four').on('click', function() {
        
        window.open('http://Аносино.рф');
    });
    
    $('.center-screens .five').on('click', function() {
        
        window.open('http://www.biosdesign.ru');
    });
    
    $('.buttom-screens .six').on('click', function() {
        
        window.open('http://leto-realty.ru');
    });
    
    $('.buttom-screens .seven').on('click', function() {
        
        window.open('http://generalvent.ru');
    });
    
    $('.buttom-screens .eight').on('click', function() {
        
        window.open('https://lekiko.ru');
    });
     var iphonenum = document.querySelector('.check_phone');
  iphonenum.onkeypress = function(e) {
  e = e || event;

  if (e.ctrlKey || e.altKey || e.metaKey) return;

  var chr = getChar(e);

  // с null надо осторожно в неравенствах,
  // т.к. например null >= '0' => true
  // на всякий случай лучше вынести проверку chr == null отдельно
  if (chr == null) return;

  if (chr < '0' || chr > '9') {
    return false;
  }
}
   $('.slider-rate .all-rates').slick({ 
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 600,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10%',
                slidesToShow: 1
              }
            }
          ]
        
    });
    
});

//popup
function popupSend(options) {
    
    var that = this;
    
    this.modal = $(options.modal);
    this.overlay = $(options.overlay);
    
    this.open = function() {
        
        that.modal.slideDown(500);
        that.overlay.addClass('open-overlay');  
    }
    
    this.close = function() {
        
        that.modal.slideUp(500);
        that.overlay.removeClass('open-overlay');
    }
}
function getChar(event) {
      if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode) // IE
      }

      if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which) // остальные
      }

      return null; // специальная клавиша
    }



