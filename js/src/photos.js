var photos={page:1,offset:20,init:function(){var o=this;$.getJSON("./albumString.json",function(n){o.render(o.page,n),o.scroll(n)})},render:function(o,n){var t=(o-1)*this.offset,e=o*this.offset;if(!(t>=n.length)){for(var i="",a=t;e>a&&a<n.length;a++)i+='<li><div class="img-box"><a class="img-bg" rel="example_group" href="http://photos.yanglonglong.com/'+n[a]+'?raw=true"></a><img lazy-src="http://photos.yanglonglong.com/'+n[a]+'?imageView2/1/w/173/h/173/interlace/1"  src="http://photos.yanglonglong.com/'+n[a]+'?imageView2/1/w/173/h/173/interlace/1" /></li>';$(".img-box-ul").append(i),$(".img-box-ul").lazyload(),$("a[rel=example_group]").fancybox()}},scroll:function(o){var n=this;$(window).scroll(function(){var t=window.pageYOffset,e=t+window.innerHeight,i=0,a=$(".instagram").offset().top+$(".instagram").height();a>=t&&e+i>a&&n.render(++n.page,o)})}};$(document).ready(function(){photos.init()});