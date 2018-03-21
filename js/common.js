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
	/* $("#callback").submit(function() {
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
	}); */
	$("#callback,#callback2,#callback3,#application-form,#consult-form").submit(function(e) { //устанавливаем событие отправки для формы с id=form
	  var form_data = $(this).serialize(); //собераем все данные из формы
	  $.ajax({
		type: "POST", //Метод отправки
		url: "mail.php", //путь до php фаила отправителя
		data: form_data,
		success: function() {
		  $.fancybox.close();
		  //код в этом блоке выполняется при успешной отправке сообщения
		  swal(
			'Спасибо!',
			'С вами скоро свяжутся!',
			'success'
		  );
		}
	  });
	  e.preventDefault();
	});

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
      nav:true,
    },
    1000:{
      items:3,
      nav:true,
      loop:false
    }
  }
});
// Карта гугла
// 
// Калькулятор \\\0.85 это Скидка в 15% [#discount-price] менять на свое усматрение
$(function() {
  
  $("#price").on("click", function() {
    var sum = 47000;
    var pro = 0;
    $("#price :checked").each(function() {
      sum -= parseInt($(this).val());
    });
    $("#price input:checked").each(function() {
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
    $("#sum").text(sum + pro + ' Руб');
    $("#discount-price").text(sum *0.85 + ' Руб');
  }); 
});
//     Калькулятор часть со стилями для блока


$('.button-box').click(function(){
	if($(this).hasClass('active')){
		$(this).removeClass('active');
		$('.price-generator').css('display','none');
	}else{
		$(this).addClass('active');
		$('.price-generator').css('display','block');
	}
});
