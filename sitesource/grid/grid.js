$(document).ready(function() {
  $('iframe', window.parent.document).height($('#grid').height());
  $(window).resize(function() {
    $('iframe', window.parent.document).height($('#grid').height());
  })
});
