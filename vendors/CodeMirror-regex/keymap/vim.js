!function(){function r(){E=""}function e(r){E+=r}function n(r){return function(e){R+=r}}function i(){var r=parseInt(R,10);return R="",r||1}function o(r){for(var e=0,n=i();n>e;++e)r(e,e==n-1)}function t(r){return"string"==typeof r&&(r=CodeMirror.commands[r]),function(e){o(function(){r(e)})}}function f(r,e){for(var n in r)r.hasOwnProperty(n)&&e(n,r[n])}function c(r,e){for(var n in r)e(r[n])}function u(r){return"Shift-"==r.slice(0,6)?r.slice(0,1):"Space"==r?" ":3==r.length&&"'"==r[0]&&"'"==r[2]?r[1]:r.toLowerCase()}function a(r){if(" "==r)return"Space";var e=A.indexOf(r);return-1!=e?"'"+r+"'":r.toLowerCase()==r?r.toUpperCase():"Shift-"+r.toUpperCase()}function s(r,e,n,i){var o=0,t=-1;n>0&&(o=r.length,t=0);var f=o,c=o;r:for(;e!=o;e+=n)for(var u=0;u<i.length;++u)if(i[u].test(r.charAt(e+t))){for(f=e;e!=o&&i[u].test(r.charAt(e+t));e+=n);c=e;break r}return{from:Math.min(f,c),to:Math.max(f,c)}}function l(r,e,n,i,o){for(var t=r.getCursor(),f=0;i>f;f++)for(var c,u=r.getLine(t.line),a=t.ch;(t.ch==u.length&&n>0?(t.line++,t.ch=0,u=r.getLine(t.line)):0==t.ch&&0>n&&(t.line--,t.ch=u.length,u=r.getLine(t.line)),u)&&(c=s(u,t.ch,n,e),t.ch=c["end"==o?"to":"from"],a==t.ch&&c.from!=c.to);)t.ch=c[0>n?"from":"to"];return t}function p(r){var e=r.getCursor();e.ch,r.getLine(e.line),CodeMirror.commands.goLineEnd(r),e.line!=r.lineCount()&&(CodeMirror.commands.goLineEnd(r),r.replaceSelection(" ","end"),CodeMirror.commands.delCharRight(r))}function d(r,n){var i=P[n];if(void 0!==i){var o=r.getCursor().line,t=i>o?o:i,f=i>o?i:o;r.setCursor(t);for(var c=t;f>=c;c++)e("\n"+r.getLine(t)),r.removeLine(t)}}function m(r,n){var i=P[n];if(void 0!==i){for(var o=r.getCursor().line,t=i>o?o:i,f=i>o?i:o,c=t;f>=c;c++)e("\n"+r.getLine(c));r.setCursor(t)}}function h(r){var e=r.getCursor(),n=r.getLine(e.line).search(/\S/);r.setCursor(e.line,-1==n?line.length:n,!0)}function C(r,e,n){var i,o=r.getCursor(),t=r.getLine(o.line),f=u(e),c=n;return c.forward?(i=t.indexOf(f,o.ch+1),-1!=i&&c.inclusive&&(i+=1)):(i=t.lastIndexOf(f,o.ch),-1==i||c.inclusive||(i+=1)),i}function v(r,e,n){var i=C(r,e,n),o=r.getCursor();-1!=i&&r.setCursor({line:o.line,ch:i})}function g(r,e,n){var i=C(r,e,n),o=r.getCursor();-1!==i&&(n.forward?r.replaceRange("",{line:o.line,ch:o.ch},{line:o.line,ch:i}):r.replaceRange("",{line:o.line,ch:i},{line:o.line,ch:o.ch}))}function M(r){i(),r.setOption("keyMap","vim-insert")}function y(r){r[0]=function(r){R.length>0?n("0")(r):CodeMirror.commands.goLineStart(r)};for(var e=1;10>e;++e)r[e]=n(e)}function x(r){CodeMirror.keyMap["vim-prefix-m"][r]=function(e){P[r]=e.getCursor().line},CodeMirror.keyMap["vim-prefix-d'"][r]=function(e){d(e,r)},CodeMirror.keyMap["vim-prefix-y'"][r]=function(e){m(e,r)},CodeMirror.keyMap["vim-prefix-r"][r]=function(e){var n=e.getCursor();e.replaceRange(u(r),{line:n.line,ch:n.ch},{line:n.line,ch:n.ch+1}),CodeMirror.commands.goColumnLeft(e)},f(N,function(e,n){CodeMirror.keyMap["vim-prefix-"+e][r]=function(e){v(e,r,n)},CodeMirror.keyMap["vim-prefix-d"+e][r]=function(e){g(e,r,n)},CodeMirror.keyMap["vim-prefix-c"+e][r]=function(e){g(e,r,n),M(e)}})}function k(r,e,n){var i=e.line,n=n?n:r.getLine(i)[e.ch],o=-1!=["(","[","{"].indexOf(n),t=function(r){switch(r){case"(":return")";case"[":return"]";case"{":return"}";case")":return"(";case"]":return"[";case"}":return"{";default:return null}}(n);if(null==t)return e;for(var f=o?0:1;;){if(i==e.line)var c=o?r.getLine(i).substr(e.ch).split(""):r.getLine(i).substr(0,e.ch).split("").reverse();else var c=o?r.getLine(i).split(""):r.getLine(i).split("").reverse();for(var u=0;u<c.length;u++)if(c[u]==n?f++:c[u]==t&&f--,0==f)return o&&e.line==i?{line:i,ch:u+e.ch}:o?{line:i,ch:u}:{line:i,ch:c.length-u-1};o?i++:i--}}function L(r,e,n){var i=r.getCursor(),o=k(r,i,e),t=k(r,o);return t.ch+=n?1:0,o.ch+=n?0:1,{start:t,end:o}}function S(r,e,n){for(var i=null==n?r.length:n;i>=0;--i)if(e.test(r.charAt(i)))return i;return-1}function O(r,n,i,o,t){var f=$[n](r,t),c=f.start,u=f.end;if(c.line>u.line||c.line==u.line&&c.ch>u.ch)var a=!0;e(r.getRange(a?u:c,a?c:u)),i&&r.replaceRange("",a?u:c,a?c:u),o&&r.setOption("keyMap","vim-insert")}var R="",w="f",E="",D=0,P=[],U=0,A="~`!@#$%^&*()_-+=[{}]\\|/?.,<>:;\"'1234567890",I=[/\w/,/[^\w\s]/],B=[/\S/],F=CodeMirror.keyMap.vim={"'|'":function(r){r.setCursor(r.getCursor().line,i()-1,!0)},A:function(r){r.setCursor(r.getCursor().line,r.getCursor().ch+1,!0),M(r)},"Shift-A":function(r){CodeMirror.commands.goLineEnd(r),M(r)},I:function(r){M(r)},"Shift-I":function(r){h(r),M(r)},O:function(r){CodeMirror.commands.goLineEnd(r),CodeMirror.commands.newlineAndIndent(r),M(r)},"Shift-O":function(r){CodeMirror.commands.goLineStart(r),r.replaceSelection("\n","start"),r.indentLine(r.getCursor().line),M(r)},G:function(r){r.setOption("keyMap","vim-prefix-g")},"Shift-D":function(e){r(),P["Shift-D"]=e.getCursor(!1).line,e.setCursor(e.getCursor(!0).line),d(e,"Shift-D"),P=[]},S:function(r){t(function(r){CodeMirror.commands.delCharRight(r)})(r),M(r)},M:function(r){r.setOption("keyMap","vim-prefix-m"),P=[]},Y:function(e){e.setOption("keyMap","vim-prefix-y"),r(),D=0},"Shift-Y":function(e){r(),P["Shift-D"]=e.getCursor(!1).line,e.setCursor(e.getCursor(!0).line),m(e,"Shift-D"),P=[]},"/":function(r){var e=CodeMirror.commands.find;e&&e(r),w="f"},"'?'":function(r){var e=CodeMirror.commands.find;e&&(e(r),CodeMirror.commands.findPrev(r),w="r")},N:function(r){var e=CodeMirror.commands.findNext;e&&("r"!=w?e(r):CodeMirror.commands.findPrev(r))},"Shift-N":function(r){var e=CodeMirror.commands.findNext;e&&("r"!=w?CodeMirror.commands.findPrev(r):e.findNext(r))},"Shift-G":function(r){""==R?r.setCursor(r.lineCount()):r.setCursor(parseInt(R,10)-1),i(),CodeMirror.commands.goLineStart(r)},nofallthrough:!0,style:"fat-cursor"};c(["d","t","T","f","F","c","r"],function(e){CodeMirror.keyMap.vim[a(e)]=function(n){n.setOption("keyMap","vim-prefix-"+e),r()}}),y(CodeMirror.keyMap.vim),f({Left:"goColumnLeft",Right:"goColumnRight",Down:"goLineDown",Up:"goLineUp",Backspace:"goCharLeft",Space:"goCharRight",X:function(r){CodeMirror.commands.delCharRight(r)},P:function(r){r.getCursor().line,""!=E&&("\n"==E[0]&&CodeMirror.commands.goLineEnd(r),r.replaceRange(E,r.getCursor()))},"Shift-X":function(r){CodeMirror.commands.delCharLeft(r)},"Shift-J":function(r){p(r)},"Shift-P":function(r){var e=r.getCursor().line;""!=E&&(CodeMirror.commands.goLineUp(r),CodeMirror.commands.goLineEnd(r),r.replaceSelection(E,"end")),r.setCursor(e+1)},"'~'":function(r){var e=r.getCursor(),n=r.getRange({line:e.line,ch:e.ch},{line:e.line,ch:e.ch+1});n=n!=n.toLowerCase()?n.toLowerCase():n.toUpperCase(),r.replaceRange(n,{line:e.line,ch:e.ch},{line:e.line,ch:e.ch+1}),r.setCursor(e.line,e.ch+1)},"Ctrl-B":function(r){CodeMirror.commands.goPageUp(r)},"Ctrl-F":function(r){CodeMirror.commands.goPageDown(r)},"Ctrl-P":"goLineUp","Ctrl-N":"goLineDown",U:"undo","Ctrl-R":"redo"},function(r,e){F[r]=t(e)}),c(["vim-prefix-d'","vim-prefix-y'","vim-prefix-df","vim-prefix-dF","vim-prefix-dt","vim-prefix-dT","vim-prefix-c","vim-prefix-cf","vim-prefix-cF","vim-prefix-ct","vim-prefix-cT","vim-prefix-","vim-prefix-f","vim-prefix-F","vim-prefix-t","vim-prefix-T","vim-prefix-r","vim-prefix-m"],function(r){CodeMirror.keyMap[r]={auto:"vim",nofallthrough:!0,style:"fat-cursor"}}),CodeMirror.keyMap["vim-prefix-g"]={E:t(function(r){r.setCursor(l(r,I,-1,1,"start"))}),"Shift-E":t(function(r){r.setCursor(l(r,B,-1,1,"start"))}),G:function(r){r.setCursor({line:0,ch:r.getCursor().ch})},auto:"vim",nofallthrough:!0,style:"fat-cursor"},CodeMirror.keyMap["vim-prefix-d"]={D:t(function(r){e("\n"+r.getLine(r.getCursor().line)),r.removeLine(r.getCursor().line),r.setOption("keyMap","vim")}),"'":function(e){e.setOption("keyMap","vim-prefix-d'"),r()},B:function(r){var n=r.getCursor(),i=r.getLine(n.line),o=i.lastIndexOf(" ",n.ch);e(i.substring(o,n.ch)),r.replaceRange("",{line:n.line,ch:o},n),r.setOption("keyMap","vim")},nofallthrough:!0,style:"fat-cursor"},y(CodeMirror.keyMap["vim-prefix-d"]),CodeMirror.keyMap["vim-prefix-c"]={B:function(r){t("delWordLeft")(r),M(r)},C:function(r){o(function(e,n){CodeMirror.commands.deleteLine(r),e&&(CodeMirror.commands.delCharRight(r),n&&CodeMirror.commands.deleteLine(r))}),M(r)},nofallthrough:!0,style:"fat-cursor"},c(["vim-prefix-d","vim-prefix-c","vim-prefix-"],function(e){c(["f","F","T","t"],function(n){CodeMirror.keyMap[e][a(n)]=function(i){i.setOption("keyMap",e+n),r()}})});for(var N={t:{inclusive:!1,forward:!0},f:{inclusive:!0,forward:!0},T:{inclusive:!1,forward:!1},F:{inclusive:!0,forward:!1}},W=65;91>W;W++){var T=String.fromCharCode(W);x(a(T)),x(a(T.toLowerCase()))}c(A,function(r){x(a(r))}),x("Space"),CodeMirror.keyMap["vim-prefix-y"]={Y:t(function(r){e("\n"+r.getLine(r.getCursor().line+D)),D++}),"'":function(e){e.setOption("keyMap","vim-prefix-y'"),r()},nofallthrough:!0,style:"fat-cursor"},CodeMirror.keyMap["vim-insert"]={Esc:function(r){r.setCursor(r.getCursor().line,r.getCursor().ch-1,!0),r.setOption("keyMap","vim")},"Ctrl-N":"autocomplete","Ctrl-P":"autocomplete",fallthrough:["default"]};var b=["B","E","J","K","H","L","W","Shift-W","'^'","'$'","'%'","Esc"];motions={B:function(r,e){return l(r,I,-1,e)},"Shift-B":function(r,e){return l(r,B,-1,e)},E:function(r,e){return l(r,I,1,e,"end")},"Shift-E":function(r,e){return l(r,B,1,e,"end")},J:function(r,e){var n=r.getCursor();return{line:n.line+e,ch:n.ch}},K:function(r,e){var n=r.getCursor();return{line:n.line-e,ch:n.ch}},H:function(r,e){var n=r.getCursor();return{line:n.line,ch:n.ch-e}},L:function(r,e){var n=r.getCursor();return{line:n.line,ch:n.ch+e}},W:function(r,e){return l(r,I,1,e)},"Shift-W":function(r,e){return l(r,B,1,e)},"'^'":function(r,e){var n=r.getCursor(),i=r.getLine(n.line).split("");if(0==i.length)return n;for(var o=0;o<i.length;o++)if(i[o].match(/[^\s]/))return{line:n.line,ch:o}},"'$'":function(r){var e=r.getCursor(),n=r.getLine(e.line);return{line:e.line,ch:n.length}},"'%'":function(r){return k(r,r.getCursor())},Esc:function(r){return r.setOption("vim"),U=0,r.getCursor()}},b.forEach(function(r,n,i){CodeMirror.keyMap["vim-prefix-d"][r]=function(n){var i=n.getCursor(),o=motions[r](n,U?U:1);if(i.line>o.line||i.line==o.line&&i.ch>o.ch)var t=!0;e(n.getRange(t?o:i,t?i:o)),n.replaceRange("",t?o:i,t?i:o),U=0,n.setOption("keyMap","vim")},CodeMirror.keyMap["vim-prefix-c"][r]=function(n){var i=n.getCursor(),o=motions[r](n,U?U:1);if(i.line>o.line||i.line==o.line&&i.ch>o.ch)var t=!0;e(n.getRange(t?o:i,t?i:o)),n.replaceRange("",t?o:i,t?i:o),U=0,n.setOption("keyMap","vim-insert")},CodeMirror.keyMap["vim-prefix-y"][r]=function(n){var i=n.getCursor(),o=motions[r](n,U?U:1);if(i.line>o.line||i.line==o.line&&i.ch>o.ch)var t=!0;e(n.getRange(t?o:i,t?i:o)),U=0,n.setOption("keyMap","vim")},CodeMirror.keyMap.vim[r]=function(e){var n=motions[r](e,U?U:1);e.setCursor(n.line,n.ch),U=0}});var G=[1,2,3,4,5,6,7,8,9];G.forEach(function(r,e,n){CodeMirror.keyMap.vim[r]=function(e){U=10*U+r},CodeMirror.keyMap["vim-prefix-d"][r]=function(e){U=10*U+r},CodeMirror.keyMap["vim-prefix-y"][r]=function(e){U=10*U+r},CodeMirror.keyMap["vim-prefix-c"][r]=function(e){U=10*U+r}});var J=["d","y","c"];J.forEach(function(r,e,n){CodeMirror.keyMap["vim-prefix-"+r+"a"]={auto:"vim",nofallthrough:!0,style:"fat-cursor"},CodeMirror.keyMap["vim-prefix-"+r+"i"]={auto:"vim",nofallthrough:!0,style:"fat-cursor"},CodeMirror.keyMap["vim-prefix-"+r].A=function(e){U=0,e.setOption("keyMap","vim-prefix-"+r+"a")},CodeMirror.keyMap["vim-prefix-"+r].I=function(e){U=0,e.setOption("keyMap","vim-prefix-"+r+"i")}});for(var Y=["W","Shift-[","Shift-9","["],$={W:function(r,e){var n=r.getCursor(),i=r.getLine(n.line),o=new String(i.substring(0,n.ch)),t=S(o,/[^a-zA-Z0-9]/)+1,f=motions.E(r,1);return f.ch+=e?1:0,{start:{line:n.line,ch:t},end:f}},"Shift-[":function(r,e){return L(r,"}",e)},"Shift-9":function(r,e){return L(r,")",e)},"[":function(r,e){return L(r,"]",e)}},W=0;W<Y.length;++W){var H=Y[W];!function(r){CodeMirror.keyMap["vim-prefix-di"][r]=function(e){O(e,r,!0,!1,!1)},CodeMirror.keyMap["vim-prefix-da"][r]=function(e){O(e,r,!0,!1,!0)},CodeMirror.keyMap["vim-prefix-yi"][r]=function(e){O(e,r,!1,!1,!1)},CodeMirror.keyMap["vim-prefix-ya"][r]=function(e){O(e,r,!1,!1,!0)},CodeMirror.keyMap["vim-prefix-ci"][r]=function(e){O(e,r,!0,!0,!1)},CodeMirror.keyMap["vim-prefix-ca"][r]=function(e){O(e,r,!0,!0,!0)}}(H)}}();