function showMoveList(){pagingReady(maxCount),addInfo(0,n),$("li>a").bind("click",function(){currentPage=parseInt($(this).text()),refreshView(),$("li>a").removeClass("active"),$(this).addClass("active"),updatepaging()}),$("#Previous").bind("click",function(){currentPage-=1,refreshView();var e=$(".active");e.removeClass("active"),e.parent().prev().children().addClass("active"),updatepaging(),judgingdot()}),$("#Next").bind("click",function(){currentPage+=1,refreshView();var e=$(".active");e.removeClass("active"),e.parent().next().children().addClass("active"),updatepaging(),judgingdot()}),$("#First").bind("click",function(){currentPage=1,refreshView();var e=$(".active");e.removeClass("active"),$("li>a:first").addClass("active"),$("li>a").hide(),$("li>a").filter(":lt(9)").show(),currentMax=maxCount>=9?9:maxCount,judgingdot()}),$("#Last").bind("click",function(){currentPage=maxCount,refreshView();var e=$(".active");e.removeClass("active"),$("li>a:last").addClass("active"),currentMax=maxCount,maxCount>9&&($("li>a").hide(),$("li>a:gt("+(maxCount-10)+")").filter(":lt(9)").show(),judgingdot())})}function refreshView(){$("li").removeClass("disabled"),1==currentPage?$("#Previous").addClass("disabled"):currentPage==maxCount&&$("#Next").addClass("disabled"),addInfo((currentPage-1)*n,n),$("html,body").animate({scrollTop:"0px"},500)}function judgingdot(){"none"==$("li>a:first").css("display")?$("#morefirst").show():$("#morefirst").hide(),"none"==$("li>a:last").css("display")?$("#morelast").show():$("#morelast").hide()}function pagingReady(e){var a=$(".paginations");$("<li id='First' href='#' aria-label='Previous'><span aria-hidden='true'>首页</span></li>").appendTo(a),$("<li id='Previous' href='#' aria-label='Previous'><span aria-hidden='true'>&laquo;</span></li>").appendTo(a),$("<li id='morefirst' herf='#' style='display:none'><span>&nbsp;...&nbsp;</span></li>").appendTo(a);for(var i=1;e>=i;i++)$("<li><a herf='#'>&nbsp;"+i+"&nbsp;</a></li>").appendTo(a);$("<li id='morelast' herf='#' style='display:none'><span>&nbsp;...&nbsp;</span></li>").appendTo(a),currentMax=e,e>=9&&($("li>a:gt(8)").css("display","none"),$("#morelast").css("display","inline"),currentMax=9),$("<li id='Next' href='#' aria-label='Next'><span aria-hidden='true'>&raquo;</span></li>").appendTo(a),$("<li id='Last' href='#' aria-label='Previous'><span aria-hidden='true'>尾页</span></li>").appendTo(a),$("#Previous").addClass("disabled "),$("li>a:first").addClass("active")}function updatepaging(){maxCount>9&&(currentPage==currentMax&&(maxCount-currentPage>=5?move(5):currentPage>maxCount-5&&($("li>a").hide(),$("li>a:gt("+(maxCount-10)+")").filter(":lt(9)").show(),currentPage=maxCount,currentMax=maxCount)),currentPage==currentMax-8&&(currentPage-5>1?move(-5):9>currentPage&&($("li>a").hide(),$("li>a").filter(":lt(9)").show(),currentMax=maxCount>=9?9:maxCount))),judgingdot()}function move(e){var a=currentMax-10+e;a>=0&&maxCount-10>=a&&($("li>a").hide(),$("li>a:gt("+(currentMax-10+e)+")").filter(":lt(9)").show(),currentMax+=e)}function getOriginMoviestest(e){$.ajax({type:"get",url:"http://"+serverIp+":19931/daily?num="+e+"&mood="+mood,async:!1,success:function(e){movietest=e}})}function addInfo(e,a){for(var i=$(".moviepic"),t=$(".title"),n=$(".douban"),r=$(".imdb"),o=$(".content"),s=$(".rating"),u=$(".evaluation"),l=$(".rateStar"),d=-110,c=e,v=0;e+a>c;c++,v++){i[v].src=movietest[c].douban_movie_imgurl,t[v].innerHTML=movietest[c].douban_movie_name,n[v].setAttribute("href",movietest[c].douban_movie_url),r[v].setAttribute("href",movietest[c].imdb_movie_url);var m=movietest[c].douban_movie_actor.split("/"),p="";p=m.length>=2?m.slice(0,2).join("/"):m[0];var g=movietest[c].douban_movie_language.split("/")[0],f=movietest[c].douban_movie_releasetime.split("/")[0],h=movietest[c].douban_movie_abstract;h.length>89&&(h=h.slice(0,86)+"..."),o[v].innerHTML="<span>导演：</span>"+movietest[c].douban_movie_director+"<span>主演：</span>"+p+"</br>"+movietest[c].douban_movie_class+f+movietest[c].douban_movie_time+g+"</br><span>剧情简介</span>:"+h,s[v].innerHTML=movietest[c].douban_movie_score,u[v].innerHTML="("+movietest[c].douban_movie_scorepeople+"人评价)",d=-11*(10-Math.floor(movietest[c].douban_movie_score)),$(l[v]).css("background-position-y",d+"px")}}var movietest=[],returncount=100,currentPage=1,maxCount=0,n=10,currentMax=0;jQuery(function(e){getOriginMoviestest(returncount),maxCount=Math.floor(returncount/10),showMoveList(),e("#MovieList").show()});