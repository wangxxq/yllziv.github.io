CodeMirror.tagRangeFinder=function(e,n,r){for(var i="A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",t=i+"-:.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",a=new RegExp("^["+i+"]["+t+"]*"),u=e.getLine(n),f=!1,o=null,l=0;!f;){if(l=u.indexOf("<",l),-1==l)return;if(l+1<u.length&&"/"==u[l+1])l++;else if(u.substr(l+1).match(a)){var s=u.indexOf(">",l+1);if(-1==s){for(var d=n+1,v=!1,g=e.lineCount();g>d&&!v;){var F=e.getLine(d),c=F.indexOf(">");if(-1!=c){v=!0;var h=F.lastIndexOf("/",c);if(-1!=h&&c>h){var x=u.substr(h,c-h+1);if(!x.match(/\/\s*\>/))return r===!0&&d++,d}}d++}f=!0}else{var b=u.lastIndexOf("/",s);if(-1==b)f=!0;else{var x=u.substr(b,s-b+1);x.match(/\/\s*\>/)||(f=!0)}}if(f){var p=u.substr(l+1);o=p.match(a),o?(o=o[0],-1!=u.indexOf("</"+o+">",l)&&(f=!1)):f=!1}f||l++}else l++}if(f)for(var C="(\\<\\/"+o+"\\>)|(\\<"+o+"\\>)|(\\<"+o+"\\s)|(\\<"+o+"$)",O=new RegExp(C,"g"),m="</"+o+">",L=1,d=n+1,g=e.lineCount();g>d;){u=e.getLine(d);var k=u.match(O);if(k)for(var D=0;D<k.length;D++)if(k[D]==m?L--:L++,!L)return r===!0&&d++,d;d++}else;},CodeMirror.braceRangeFinder=function(e,n,r){for(var i,t,a=e.getLine(n),u=a.length;;){var f=a.lastIndexOf("{",u);if(0>f)break;if(t=e.getTokenAt({line:n,ch:f}).className,!/^(comment|string)/.test(t)){i=f;break}u=f-1}if(!(null==i||a.lastIndexOf("}")>i)){var o,l=1,s=e.lineCount();e:for(var d=n+1;s>d;++d)for(var v=e.getLine(d),g=0;;){var F=v.indexOf("{",g),c=v.indexOf("}",g);if(0>F&&(F=v.length),0>c&&(c=v.length),g=Math.min(F,c),g==v.length)break;if(e.getTokenAt({line:d,ch:g+1}).className==t)if(g==F)++l;else if(!--l){o=d;break e}++g}if(null!=o&&o!=n+1)return r===!0&&o++,o}},CodeMirror.indentRangeFinder=function(e,n){for(var r,i=e.getOption("tabSize"),t=e.getLineHandle(n).indentation(i),a=n+1,u=e.lineCount();u>a;++a){var f=e.getLineHandle(a);if(!/^\s*$/.test(f.text)){if(f.indentation(i)<=t)break;r=a}}return r?r+1:null},CodeMirror.newFoldFunction=function(e,n,r){function i(e,n){for(var r=0;r<a.length;++r){var i=e.lineInfo(a[r].start);if(i){if(i.line==n)return{pos:r,region:a[r]}}else a.splice(r--,1)}}function t(e,n){e.clearMarker(n.start);for(var r=0;r<n.hidden.length;++r)e.showLine(n.hidden[r])}var a=[];return null==n&&(n='<div style="position: absolute; left: 2px; color:#600">&#x25bc;</div>%N%'),function(u,f){u.operation(function(){var o=i(u,f);if(o)a.splice(o.pos,1),t(u,o.region);else{var l=e(u,f,r);if(null==l)return;for(var s=[],d=f+1;l>d;++d){var v=u.hideLine(d);v&&s.push(v)}var g=u.setMarker(f,n),F={start:g,hidden:s};u.onDeleteLine(g,function(){t(u,F)}),a.push(F)}})}};