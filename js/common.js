// Pop up форма
$('.video').magnificPopup({
  type: 'iframe',
  
  
  iframe: {
    patterns: {
      dailymotion: {

        index: 'dailymotion.com',
        
        id: function(url) {        
          var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
          if (m !== null) {
            if(m[4] !== undefined) {

              return m[4];
            }
            return m[2];
          }
          return null;
        },
        
        src: 'https://www.dailymotion.com/embed/video/%id%'
        
      }
    }
  }


});

// Скролл 
$(document).ready(function(){
  $("a[href*=#]").bind("click", function(e){
    var anchor = $(this);
    var name = anchor.attr("href").replace(new RegExp("#", "gi"), "");
    $('html, body').stop().animate({
      scrollTop: $("a[name=" + name + "]").offset().top
    }, 500);
    e.preventDefault();
    return false;
  });
});
// Кнопка для смартфонов 
$(document).ready(function() {

	$(".auth_buttons").click(function() {
		$(this).next().slideToggle();
	});
	$(".main_mnu_button").click(function() {
		$(".navigate-wrapper").slideToggle();
	});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: https://owlcarousel2.github.io/OwlCarousel2/docs/
  $('.owl-carousel').owlCarousel({
    items:1,
    merge:true,
    loop:true,
    margin:10,
    video:true,
    lazyLoad:true,
    center:true,
    responsive:{
      480:{
        items:1
      },
      600:{
        items:4
      }
    }
  })

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});
    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
    $("#application-form").submit(function() {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $("#callback").serialize()
      }).done(function() {
        alert("Спасибо за заявку!");
        setTimeout(function() {
          $.fancybox.close();
        }, 1000);
      });
      return false;
    });



// Accardeon
! function(i) {
  var o, n;
  i(".title_block").on("click", function() {
    o = i(this).parents(".accordion_item"), n = o.find(".info"),
    o.hasClass("active_block") ? (o.removeClass("active_block"),
      n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
      o.siblings(".active_block").removeClass("active_block").children(
        ".info").stop(!0, !0).slideUp())
    })
}(jQuery);


    //  Slider
    var slideNow = 1;
    var slideCount = $('#slidewrapper').children().length;
    var slideInterval = 3000;
    var navBtnId = 0;
    var translateWidth = 0;

    $(document).ready(function() {
      var switchInterval = setInterval(nextSlide, slideInterval);

      $('#viewport').hover(function() {
        clearInterval(switchInterval);
      }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
      });

      $('#next-btn').click(function() {
        nextSlide();
      });

      $('#prev-btn').click(function() {
        prevSlide();
      });

      $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
          translateWidth = -$('#viewport').width() * (navBtnId);
          $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
          });
          slideNow = navBtnId + 1;
        }
      });
    });


    function nextSlide() {
      if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
      } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
      }
    }

    function prevSlide() {
      if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
      } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
      }
    }
// Видео слайдер попап
jQuery(document).ready(function() {
  jQuery("a.popupbox-video").fancybox({
   type:'swf',
   allowfullscreen: 'true'
 });
});
// 
// Слайдер
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  dots: true,
  responsiveClass:true,
  responsive:{
    0:{
      items:3,
      nav:true
    },
    600:{
      items:3,
      nav:false
    },
    1000:{
      items:3,
      nav:true,
      loop:false
    }
  }
});
// Карта гугла
function initMap() {
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 52.40, lng: 54.98333},
          zoom: 12,
          styles: [
          {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#263c3f'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#6b9a76'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#38414e'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#212a37'}]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9ca5b3'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#746855'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#1f2835'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#f3d19c'}]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{color: '#2f3948'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#17263c'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#515c6d'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#17263c'}]
          }
          ]
        });
      }
// 
// 
// Калькулятор \\\0.85 это Скидка в 15% [#discount-price] менять на свое усматрение
$(function() {
  $("#price").on("click", function() {
    var sum = 0;
    var pro = 0;
    $("#price :checked").each(function() {
      sum += parseInt($(this).val());
    });
    $("#price :checked").each(function() {
      var title; 
      if(title = $('#btn-unv').is(':checked') ) {
        document.getElementById('js1').style.color="#e73b3b";
        document.getElementById('js1').style.backgroundImage="url(img/check.png)";
        document.getElementById('js1').style.backgroundPosition="0px 13px";
      } else {
        document.getElementById('js1').style.color="#3c434a";
        document.getElementById('js1').style.backgroundImage="url(img/list-pic1.png)";
        document.getElementById('js1').style.backgroundPosition="0px 20px";;
      };
      var title1; 
      if(title1 = $('#btn-experience').is(':checked') ) {
        document.getElementById('js2').style.color="#e73b3b";
        document.getElementById('js2').style.backgroundImage="url(img/check.png)";
        document.getElementById('js2').style.backgroundPosition="0px 13px";
      } else {
        document.getElementById('js2').style.color="#3c434a";
        document.getElementById('js2').style.backgroundImage="url(img/list-pic1.png)";
        document.getElementById('js2').style.backgroundPosition="0px 20px";;
      }
      var title2; 
      if(title2 = $('#btn-qualification').is(':checked') ) {
        document.getElementById('js3').style.color="#e73b3b";
        document.getElementById('js3').style.backgroundImage="url(img/check.png)";
        document.getElementById('js3').style.backgroundPosition="0px 13px";
      } else {
        document.getElementById('js3').style.color="#3c434a";
        document.getElementById('js3').style.backgroundImage="url(img/list-pic1.png)";
        document.getElementById('js3').style.backgroundPosition="0px 20px";;
      }
      var title3; 
      if(title3 = $('#btn-prison').is(':checked') ) {
        document.getElementById('js4').style.color="#e73b3b";
        document.getElementById('js4').style.backgroundImage="url(img/check.png)";
        document.getElementById('js4').style.backgroundPosition="0px 13px";
      } else {
        document.getElementById('js4').style.color="#3c434a";
        document.getElementById('js4').style.backgroundImage="url(img/list-pic1.png)";
        document.getElementById('js4').style.backgroundPosition="0px 20px";;
      }
      var title4; 
      if(title4 = $('#btn-instr').is(':checked') ) {
        document.getElementById('js5').style.color="#e73b3b";
        document.getElementById('js5').style.backgroundImage="url(img/check.png)";
        document.getElementById('js5').style.backgroundPosition="0px 13px";
      } else {
        document.getElementById('js5').style.color="#3c434a";
        document.getElementById('js5').style.backgroundImage="url(img/list-pic1.png)";
        document.getElementById('js5').style.backgroundPosition="0px 20px";;
      }
      var title5; 
      if(title5 = $('#btn-audit').is(':checked') ) {
        document.getElementById('js6').style.color="#e73b3b";
        document.getElementById('js6').style.backgroundImage="url(img/check.png)";
        document.getElementById('js6').style.backgroundPosition="0px 13px";
      } else {
        document.getElementById('js6').style.color="#3c434a";
        document.getElementById('js6').style.backgroundImage="url(img/list-pic1.png)";
        document.getElementById('js6').style.backgroundPosition="0px 20px";;
      }
    });
    $("#sum").text(sum + pro);
    $("#discount-price").text(sum *0.85);
  }); 
});
//     Калькулятор часть со стилями для блока
