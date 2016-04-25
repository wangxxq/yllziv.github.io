$(document).ready(function() {
  $('td').each(function() {
    var movieurl = $(this).find('a').attr('href');
    var titlehtml = '<p style="text-align:center; text-overflow:ellipsis; white-space:nowrap;overflow:hidden;">' +
      '<a href="' + movieurl + '" target="_blank">' +
      $(this).find('a').attr('title') + '</a></p>'
    $(this).append($(titlehtml));
  });
});
