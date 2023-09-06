// Any project-specific code — listeners and triggers for plugins

$(document).ready(function() {

  // Animate some scrolling for smoother transitions 
  $(function() {
    $('.js-smoothscroll').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 500);
        }
      }
    });
  });
  
  // Animation variable set on the body
  // Set the root
  var root = $('body');
  
  var container = $('#animated');
  var viewport_height = window.innerHeight;
  var scroll_height = viewport_height;
  
  root.css('--scroll', + window.pageYOffset / (document.body.offsetHeight - scroll_height));
  
  // Scroll events
  window.addEventListener('scroll',scroll,false);
  function scroll() {
    root.css('--scroll', + window.pageYOffset / (document.body.offsetHeight - scroll_height));
  }
});
