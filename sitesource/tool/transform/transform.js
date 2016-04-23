function updateSelectHistory(e){for(var r='<option selected="selected" class="display-none">请选择历史纪录</option>',o=0;o<e.length;o++)r+='<option value="'+e[o]+'">'+decodeURI(e[o])+"</option>";$(".json-history").html(r)}var base64EncodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",base64DecodeChars=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1),transfrom={convertToUnicode:function(e){return escape(e).replace(/%/g,"\\").toLowerCase()},unconvertToUnicode:function(e){return unescape(e.replace(/\\/g,"%"))},encodeUTF8:function(e){for(var r="",o="",n=0,t=e.length;t>n;n++)r=e.charCodeAt(n).toString(16),o+="\\u"+new Array(5-r.length).join("0")+r;return o},decodeUTF8:function(e){return e.replace(/(\\u)(\w{4}|\w{2})/gi,function(e,r,o){return String.fromCharCode(parseInt(o,16))})},encodeBase64:function(e){var r,o,n,t,a,c;for(n=e.length,o=0,r="";n>o;){if(t=255&e.charCodeAt(o++),o==n){r+=base64EncodeChars.charAt(t>>2),r+=base64EncodeChars.charAt((3&t)<<4),r+="==";break}if(a=e.charCodeAt(o++),o==n){r+=base64EncodeChars.charAt(t>>2),r+=base64EncodeChars.charAt((3&t)<<4|(240&a)>>4),r+=base64EncodeChars.charAt((15&a)<<2),r+="=";break}c=e.charCodeAt(o++),r+=base64EncodeChars.charAt(t>>2),r+=base64EncodeChars.charAt((3&t)<<4|(240&a)>>4),r+=base64EncodeChars.charAt((15&a)<<2|(192&c)>>6),r+=base64EncodeChars.charAt(63&c)}return r},decodeBase64:function(e){var r,o,n,t,a,c,s;for(c=e.length,a=0,s="";c>a;){do r=base64DecodeChars[255&e.charCodeAt(a++)];while(c>a&&-1==r);if(-1==r)break;do o=base64DecodeChars[255&e.charCodeAt(a++)];while(c>a&&-1==o);if(-1==o)break;s+=String.fromCharCode(r<<2|(48&o)>>4);do{if(n=255&e.charCodeAt(a++),61==n)return s;n=base64DecodeChars[n]}while(c>a&&-1==n);if(-1==n)break;s+=String.fromCharCode((15&o)<<4|(60&n)>>2);do{if(t=255&e.charCodeAt(a++),61==t)return s;t=base64DecodeChars[t]}while(c>a&&-1==t);if(-1==t)break;s+=String.fromCharCode((3&n)<<6|t)}return s},utf16to8:function(e){var r,o,n,t;for(r="",n=e.length,o=0;n>o;o++)t=e.charCodeAt(o),t>=1&&127>=t?r+=e.charAt(o):t>2047?(r+=String.fromCharCode(224|t>>12&15),r+=String.fromCharCode(128|t>>6&63),r+=String.fromCharCode(128|t>>0&63)):(r+=String.fromCharCode(192|t>>6&31),r+=String.fromCharCode(128|t>>0&63));return r},utf8to16:function(e){var r,o,n,t,a,c;for(r="",n=e.length,o=0;n>o;)switch(t=e.charCodeAt(o++),t>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:r+=e.charAt(o-1);break;case 12:case 13:a=e.charCodeAt(o++),r+=String.fromCharCode((31&t)<<6|63&a);break;case 14:a=e.charCodeAt(o++),c=e.charCodeAt(o++),r+=String.fromCharCode((15&t)<<12|(63&a)<<6|(63&c)<<0)}return r},htmlToString:function(e){var r=e.replace(/\\/g,"\\\\").replace(/\\/g,"\\/").replace(/\'/g,"\\'").split("\n"),o=r.length,n=[];return jQuery.each(r,function(e,r){""!==r&&(e===o-1?n.push("'"+r+"';"):n.push("'"+r+"'+\n"))}),n.join("")}};$(document).ready(function(){$("iframe",window.parent.document).height($("#tool").height()),$(window).resize(function(){$("iframe",window.parent.document).height($("#tool").height())});var e=[];window.localStorage.getItem("historyTransformArray")&&(e=window.localStorage.getItem("historyTransformArray").split(","),updateSelectHistory(e)),$("#transform-unicode-btn").on("click",function(){$("#destJSON").val(transfrom.convertToUnicode($("#sourceJSON").val()))}),$("#transform-deunicode-btn").on("click",function(){$("#destJSON").val(transfrom.unconvertToUnicode($("#sourceJSON").val()))}),$("#transform-encodeutf8-btn").on("click",function(){$("#destJSON").val(transfrom.encodeUTF8($("#sourceJSON").val()))}),$("#transform-decodeutf8-btn").on("click",function(){$("#destJSON").val(transfrom.decodeUTF8($("#sourceJSON").val()))}),$("#transform-enurl-btn").on("click",function(){$("#destJSON").val(encodeURI($("#sourceJSON").val()))}),$("#transform-deurl-btn").on("click",function(){$("#destJSON").val(decodeURI($("#sourceJSON").val()))}),$("#transform-enbase64-btn").on("click",function(){$("#destJSON").val(transfrom.encodeBase64(transfrom.utf16to8($("#sourceJSON").val())))}),$("#transform-debase64-btn").on("click",function(){$("#destJSON").val(transfrom.utf8to16(transfrom.decodeBase64($("#sourceJSON").val())))}),$("#transform-b16md5-btn").on("click",function(){$("#destJSON").val(hex_md5($("#sourceJSON").val()))}),$("#transform-htmltostring-btn").on("click",function(){$("#destJSON").val(transfrom.htmlToString($("#sourceJSON").val()))}),$("#transform-clean-btn").on("click",function(){window.localStorage.removeItem("historyTransformArray"),$(".json-history").html('<option selected="selected" class="display-none">没有保存的纪录，请点击保存纪录按钮</option>')}),$("#transform-save-btn").on("click",function(){e.push(encodeURI($("#sourceJSON").val())),window.localStorage.setItem("historyTransformArray",e),updateSelectHistory(e)}),$(".json-history").on("change",function(){$("#sourceJSON").val(decodeURI($(this).val()))})});