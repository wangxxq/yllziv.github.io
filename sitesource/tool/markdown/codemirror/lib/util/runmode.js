CodeMirror.runMode=function(r,e,o,n){function t(r){return r.replace(/[<&]/,function(r){return"<"==r?"&lt;":"&amp;"})}var i=CodeMirror.getMode(CodeMirror.defaults,e),a=1==o.nodeType,s=n&&n.tabSize||CodeMirror.defaults.tabSize;if(a){var d=o,f=[],u=0;o=function(r,e){if("\n"==r)return f.push("<br>"),void(u=0);for(var o="",n=0;;){var i=r.indexOf("	",n);if(-1==i){o+=t(r.slice(n)),u+=r.length-n;break}u+=i-n,o+=t(r.slice(n,i));var a=s-u%s;u+=a;for(var d=0;a>d;++d)o+=" ";n=i+1}e?f.push('<span class="cm-'+t(e)+'">'+o+"</span>"):f.push(o)}}for(var l=CodeMirror.splitLines(r),c=CodeMirror.startState(i),p=0,v=l.length;v>p;++p){p&&o("\n");for(var M=new CodeMirror.StringStream(l[p]);!M.eol();){var C=i.token(M,c);o(M.current(),C,p,M.start),M.start=M.pos}}a&&(d.innerHTML=f.join(""))};