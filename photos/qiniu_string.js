function uptoken(n,e){var i=new qiniu.rs.PutPolicy(n+":"+e);return i.token()}function uploadFile(n,e,i){var t=new qiniu.io.PutExtra;qiniu.io.putFile(n,e,i,t,function(n,e){n?console.log(n):console.log("upload success : ",e.hash,e.key)})}function getFilenameSuffix(n){if(".DS_Store"==n)return".DS_Store";if(null==n||0==n.length)return null;var e=/\.[^\.]+/.exec(n);return null==e?null:(e+"").toLowerCase()}const fs=require("fs"),path="../../asset/albumString";var qiniu=require("qiniu");qiniu.conf.ACCESS_KEY="vMYxdJtxMZqz5vGnyAI6Fnxlxg03QwpoW2naBag4",qiniu.conf.SECRET_KEY="If94B-wvEIrC16rCx-KJk9qopmyXujb2GRwhMa6I",bucket="photos",fs.readdir(path,function(n,e){if(!n){var i=[];!function t(n){return n==e.length?void fs.writeFile("./albumString.json",JSON.stringify(i,null,"	")):void fs.stat(path+"/"+e[n],function(o,u){if(!o){if(u.isFile()){var l=getFilenameSuffix(e[n]);".js"!=l&&".json"!=l&&".DS_Store"!=l&&(filePath=path+"/"+e[n],console.log("抓取到文件: "+e[n]),key=e[n],token=uptoken(bucket,key),uploadFile(token,key,filePath),i.push(e[n]))}t(n+1)}})}(0)}});