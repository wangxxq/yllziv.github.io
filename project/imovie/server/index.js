function queryConnectionHandler(e,n){n.writeHead(200,{"Content-Type":"application/json; charset=UTF-8","Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS","Access-Control-Allow-Headers":"Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With","Access-Control-Allow-Origin":"*"});var i=url.parse(e.url).pathname,o=require("url").parse(e.url.toLowerCase(),!0);if("/random"==i){var r=o.query.num||0;client.query('select * from "movie" where douban_movie_lookedman>100000 order by random() limit '+r,function(e,i){e?n.send(""):i.rows.length>0?(movies=JSON.stringify(i.rows),n.end(movies)):n.send("false")})}if("/individuality"==i){o.query.from||0,o.query.to||0;if("POST"===e.method){var t="";e.on("data",function(e){t+=e}),e.on("end",function(){var e=individual.getIndividualMoives(JSON.parse(t)),i=individual.getSql(e,0,150);console.log(i),client.query(i,function(e,i){e?n.send(""):i.rows.length>0?(movies=JSON.stringify(i.rows),n.end(movies)):n.send("false")})})}}if("/daily"==i){var r=o.query.num||0,s=o.query.mood||"开心",l=individual.getDailySql(s,130);client.query(l,function(e,i){e?n.send(""):i.rows.length>0?(movies=JSON.stringify(i.rows),n.end(movies)):n.send("false")})}if("/theme"==i){var r=o.query.num||0,u=o.query.myear||"2014",a=o.query.mtype||"喜剧",d=o.query.mlanguage||"普通话",c=o.query.mscore||"7",l=individual.getThemeSql(130,u,a,d,c);client.query(l,function(e,i){e?n.send(""):i.rows.length>0?(movies=JSON.stringify(i.rows),n.end(movies)):n.send("false")})}if("/themeone"==i){var r=o.query.num||0,a=o.query.mtype||"喜剧",l=individual.getThemeOneSql(r,a);console.log(l),client.query(l,function(e,i){e?n.send(""):i.rows.length>0?(movies=JSON.stringify(i.rows),n.end(movies)):n.send("false")})}}var pg=require("pg"),http=require("http"),url=require("url"),conString="tcp://postgres:admin@115.28.28.161:5432/imovie",client=new pg.Client(conString),movies=null,individual=require("./individual");client.connect(function(e,n){return e?(console.log("ClientConnectionReady Error: "+e.message),void client.end()):void console.log("Connecting to postgres success...")});var server=http.createServer(queryConnectionHandler);server.listen(19931),console.log("Server running at http://localhost:19931/random?num=2");