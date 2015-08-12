$(document).ready(function() {
  
  /* Slider */
  if ($('#carousel-example-generic').length > 0) {
    $('#carousel-example-generic').carousel({
      interval: 10000 //changes the speed
    })
  }
  /* /Slider */

  /* disqus */
  /* * * CONFIGURATION VARIABLES * * */
  var disqus_shortname = 'khnuksm';
  /* * * DON'T EDIT BELOW THIS LINE * * */
  (function () {
      var s = document.createElement('script'); s.async = true;
      s.type = 'text/javascript';
      s.src = '//' + disqus_shortname + '.disqus.com/count.js';
      (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
  }());
  /* /disqus */

  /* Вирівнювання блоків на сторінці з викладачами*/
  $('.lector').matchHeight(); //matchHeight.min.js



  /* Вирівнювання зображень останніх новин*/
  $('.img-short-news').matchHeight(); //matchHeight.min.js

  

  $('#agree-registration').click(function() {
    $('#modal-registration-rules').modal('hide');
    $('#check-agree').prop('checked', true);
  });
  
  $('#disagree-registration').click(function() {
    $('#modal-registration-rules').modal('hide');
    $('#check-agree').prop('checked', false);
  });

  $('#go-to-registration').click(function() {
    location.href = 'registration.html';
  });
});

/* Форма для відправки фідбека*/
$('#send-feedback').click(function() {
  var formValid = true;
  $('.important-input').each(function() {
    var formGroup = $(this).parents('.form-groupp');
    var glyphicon = formGroup.find('.form-control-feedback');
    if (this.checkValidity()) {
      formGroup.addClass('has-success').removeClass('has-error');
      glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');
    } else {
      formGroup.addClass('has-error').removeClass('has-success');
      glyphicon.addClass('glyphicon-remove').removeClass('glyphicon-ok'); 
      formValid = false;  
    }
  });

  if (formValid) {
    $('#modal-contact-us').modal('hide');
    $('#modal-success-message').modal('show');
    $('input').val('');
    $('textarea').val('').parents('.form-groupp').removeClass('has-success')
      .removeClass('has-warning').find('.form-control-feedback')
      .removeClass('glyphicon-ok').removeClass('glyphicon-warning-sign');  
    $('input').each(function() {        
      var formGroup = $(this).parents('.form-groupp');
      var glyphicon = formGroup.find('.form-control-feedback');
      formGroup.removeClass('has-success').removeClass('has-warning');
      glyphicon.removeClass('glyphicon-ok').removeClass('glyphicon-warning-sign');  
    });
  }
});

$('.warning-input').blur(function() {
  if($(this).val().length < 3) {
    $(this).next('span').remove();
    $(this).after('<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>')
      .parent().removeClass('has-success').addClass('has-warning');
  }
});
  
$('.warning-input').focus(function() {
  $(this).next('span').remove();
  $(this).parent().removeClass('has-warning');
  if($(this).val().length >= 3) {
    $(this).after('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');
    $(this).parent().addClass('has-success');
  }
});

$('.warning-input').keydown(function() {
  if($(this).val().length >= 3) {
    $(this).next('span').remove();
    $(this).after('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');
    $(this).parent().addClass('has-success');
  }       
});
/* /Форма для відправки фідбека*/ 

$('#send-registration').click(function() {
  var formValid = true;
  $('.important-input').each(function() {
    var formGroup = $(this).parents('.form-group');
    if (this.checkValidity()) {
      formGroup.addClass('has-success').removeClass('has-error');
      formGroup.find('.error-empty').addClass('hidden');
      formGroup.find('.error-label').addClass('hidden');
    } else {
      if($(this).val().length === 0) {
        formGroup.find('.error-empty').removeClass('hidden');
        formGroup.find('.error-label').addClass('hidden');
      } else {
        formGroup.find('.error-label').removeClass('hidden');
        formGroup.find('.error-empty').addClass('hidden');
      }
      formGroup.addClass('has-error').removeClass('has-success');
      formValid = false;      
    }
  });

  var inputPassword = $('#inputPassword');
  if($('#inputPassword').val() != $('#confirmPassword').val() && $('#inputPassword').val().length != 0) {
    $('.error-password').removeClass('hidden');
    $('#inputPassword').parents('.form-group').removeClass('has-success').addClass('has-error');
    $('#confirmPassword').parents('.form-group').removeClass('has-success').addClass('has-error');
    formValid = false; 
  } else 
    if($('#inputPassword').val() === $('#confirmPassword').val() && $('#inputPassword').val().length != 0) {
      $('.error-password').addClass('hidden');
    }

  if(!$('#radio-male').is(':checked') && !$('#radio-female').is(':checked'))
  {
    $('.error-gender').removeClass('hidden');
    $('.error-gender').parents('.form-group').removeClass('has-success').addClass('has-error');
    formValid = false; 
  } else {
    $('.error-gender').addClass('hidden');
    $('.error-gender').parents('.form-group').addClass('has-success').removeClass('has-error');
  }

  if(!$('#check-agree').is(':checked'))
  {
    $('.error-agree').removeClass('hidden');
    $('.error-agree').parents('.form-group').removeClass('has-success').addClass('has-error');
    formValid = false; 
  } else {
    $('.error-agree').addClass('hidden');
    $('.error-agree').parents('.form-group').addClass('has-success').removeClass('has-error');
  }    
});

$('#login-user').click(function() {
  var formValid = true;
  $('.important-input').each(function() {
    var formGroup = $(this).parents('.form-group');
    var glyphicon = formGroup.find('.form-control-feedback');
    if (this.checkValidity()) {
      formGroup.addClass('has-success').removeClass('has-error');
      glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');
    } else {
      formGroup.addClass('has-error').removeClass('has-success');
      glyphicon.addClass('glyphicon-remove').removeClass('glyphicon-ok'); 
      formValid = false;  
    }
  });      
});

$('#res-pass').click(function() {
  $('.important-input').each(function() {
    var formGroup = $(this).parents('.form-group');
    var glyphicon = formGroup.find('.form-control-feedback');
    if (this.checkValidity()) {
      formGroup.addClass('has-success').removeClass('has-error');
      glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');
    } else {
      formGroup.addClass('has-error').removeClass('has-success');
      glyphicon.addClass('glyphicon-remove').removeClass('glyphicon-ok'); 
      formValid = false;  
    }
  });
});