var photos = {
  page: 1,
  offset: 20,
  init: function() {
    var that = this;
    $.getJSON("./albumString.json", function(data) {
      that.render(that.page, data);
      that.scroll(data);
    });
  },

  render: function(page, data) {
    var begin = (page - 1) * this.offset;
    var end = page * this.offset;
    if (begin >= data.length) return;
    var html, li = "";
    for (var i = begin; i < end && i < data.length; i++) {
      li += '<li><div class="img-box">' +
        '<a class="img-bg" rel="example_group" href="http://photos.yanglonglong.com/' + data[i] + '?raw=true"></a>' +
        '<img lazy-src="http://photos.yanglonglong.com/' + data[i] + '?imageView2/1/w/173/h/173/interlace/1" ' +
        ' src="http://photos.yanglonglong.com/' + data[i] + '?imageView2/1/w/173/h/173/interlace/1" />' +
        '</li>';
    }

    $(".img-box-ul").append(li);
    $(".img-box-ul").lazyload();
    $("a[rel=example_group]").fancybox({
      helpers: {
        overlay: {
          locked: false
        }
      }
    });
  },

  scroll: function(data) {
    var that = this;
    $(window).scroll(function() {
      var windowPageYOffset = window.pageYOffset;
      var windowPageYOffsetAddHeight = windowPageYOffset + window.innerHeight;
      var sensitivity = 0;

      var offsetTop = $(".instagram").offset().top + $(".instagram").height();

      if (offsetTop >= windowPageYOffset && offsetTop < windowPageYOffsetAddHeight + sensitivity) {
        that.render(++that.page, data);
      }
    })
  }
}
$(document).ready(function() {
  photos.init();
})
