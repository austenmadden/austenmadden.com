$(document).ready(function(){
  width = $(window).width();
  if (width >= 745) {
    mobileMenuOn = false;
    var navHeight = parseInt($('#select').css('height'));
  } else {
    mobileMenuOn = true;
    var navHeight = parseInt($('#mobile').css('height'));
  }
  menuToggled = false;


  $('#about').click(function() {
    if (mobileMenuOn) {
      navHeight = parseInt($('#mobile').css('height'));
    } else {
      navHeight = parseInt($('#select').css('height'));
    }
    $('html, body').animate({
                scrollTop: $('.bio').offset().top - navHeight
            }, 400);
    $('#select').css('height', '');
    if (mobileMenuOn) {
      $('#nav').css('display', 'none');
    }
  })

  $('#experience').click(function() {
    if (mobileMenuOn) {
      navHeight = parseInt($('#mobile').css('height'));
    } else {
      navHeight = parseInt($('#select').css('height'));
    }
    $('html, body').animate({
                scrollTop: $('.companies').offset().top - navHeight
            }, 400);
    $('#select').css('height', '');
    if (mobileMenuOn) {
      $('#nav').css('display', 'none');
    }
  })

  $('#projects').click(function() {
    if (mobileMenuOn) {
      navHeight = parseInt($('#mobile').css('height'));
    } else {
      navHeight = parseInt($('#select').css('height'));
    }
    $('html, body').animate({
                scrollTop: $('.projects').offset().top - navHeight
            }, 400);
    $('#select').css('height', '');
    if (mobileMenuOn) {
      $('#nav').css('display', 'none');
    }
  })

  $('#home').click(function() {
    if (mobileMenuOn) {
      navHeight = parseInt($('#mobile').css('height'));
    } else {
      navHeight = parseInt($('#select').css('height'));
    }
    $('html, body').animate({
                scrollTop: $('.home').offset().top - navHeight
            }, 400);
    $('#select').css('height', '');
    if (mobileMenuOn) {
      $('#nav').css('display', 'none');
    }
  })

  $('#social').click(function() {
    if (mobileMenuOn) {
      navHeight = parseInt($('#mobile').css('height'));
    } else {
      navHeight = parseInt($('#select').css('height'));
    }
    $('html, body').animate({
                scrollTop: $('.social').offset().top - navHeight
            }, 400);
    $('#select').css('height', '');
    if (mobileMenuOn) {
      $('#nav').css('display', 'none');
    }
  })

  $('#skills').click(function() {
    if (mobileMenuOn) {
      navHeight = parseInt($('#mobile').css('height'));
    } else {
      navHeight = parseInt($('#select').css('height'));
    }
    $('html, body').animate({
                scrollTop: $('.skills').offset().top - navHeight
            }, 400);
    $('#select').css('height', '');
    if (mobileMenuOn) {
      $('#nav').css('display', 'none');
    }
  })

  $('#mobile').click(function() {
    if (!menuToggled) {
      $('#select').css('height', '100%');
      $('#nav').css('display', 'block');
      $('#nav').css('width', '100px');
      menuToggled = true;
    } else {
      $('#select').css('height', '');
      $('#nav').css('display', 'none');
      menuToggled = false;
    }
  })

  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    var halfOfScreen = $(window).height()/2
    var aboutPicDistance = $('.bio').offset().top - navHeight - halfOfScreen
    if (scrollDistance === 0) {
			atStartState()
    } else {
			scrollingState()
    }

		if (scrollDistance >= aboutPicDistance && $('#welcome').hasClass('landingScrollText')) {
			$('#welcome').addClass('landingStaticText');
			$('#welcome').removeClass('landingScrollText');
		} else if (scrollDistance < aboutPicDistance && !$('#welcome').hasClass('landingScrollText')) {
			$('#welcome').addClass('landingScrollText');
			$('#welcome').removeClass('landingStaticText');
		}
  });

  if (mobileMenuOn) {
    toggleMobileMenuOn();
  }
});

$(window).resize(function() {
    // This will execute whenever the window is resized
    width = $(window).width(); // New width
    if (width >= 745) {
      mobileMenuOn = false;
      toggleMobileMenuOff();
      navHeight = parseInt($('#select').css('height'));
    } else {
      mobileMenuOn = true;
      toggleMobileMenuOn();
      navHeight = parseInt($('#mobile').css('height'));
    }
});

function atStartState() {
	$('#select').addClass('selectStart');
	$('#mobile').addClass('mobileStart');
	$('#mobile').addClass('shadow');
	$('#select').removeClass('select');
	$('#mobile').removeClass('mobile');
	$('#nav').addClass('shadow')
}

function scrollingState() {
	$('#select').addClass('select');
	$('#mobile').addClass('mobile');
	$('#mobile').removeClass('shadow');
	$('#select').removeClass('selectStart');
	$('#mobile').removeClass('mobileStart');
	$('#nav').removeClass('shadow');
}

function toggleMobileMenuOn() {
   $('#nav').css('display', 'none');
   $('#mobile').css('display', 'block');
}

function toggleMobileMenuOff() {
  $('#nav').css('display', 'inline-block');
  $('#mobile').css('display', 'none');
  $('#nav').css('width', '');
}
