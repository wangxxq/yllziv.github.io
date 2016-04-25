jQuery(document).ready(function($) {
  $('.level-bar-inner').css('width', '0');
  $(window).on('load', function() {
    $('.level-bar-inner').each(function() {
      var itemWidth = $(this).data('level');
      $(this).animate({
        width: itemWidth
      }, 800);
    });
  });
  $('.level-label').tooltip();
});

$(document).ready(function() {
  $('iframe', window.parent.document).height($('.yll-person').height());
  $(window).resize(function() {
    $('iframe', window.parent.document).height($('.yll-person').height());
  })
});
