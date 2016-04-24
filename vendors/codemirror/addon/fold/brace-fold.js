CodeMirror.registerHelper("fold","brace",function(r,e){function o(o){for(var i=e.ch,d=0;;){var f=0>=i?-1:l.lastIndexOf(o,i-1);if(-1!=f){if(1==d&&f<e.ch)break;if(n=r.getTokenTypeAt(CodeMirror.Pos(t,f+1)),!/^(comment|string)/.test(n))return f+1;i=f-1}else{if(1==d)break;d=1,i=l.length}}}var i,n,t=e.line,l=r.getLine(t),d="{",f="}",i=o("{");if(null==i&&(d="[",f="]",i=o("[")),null!=i){var a,s,u=1,g=r.lastLine();r:for(var C=t;g>=C;++C)for(var M=r.getLine(C),c=C==t?i:0;;){var v=M.indexOf(d,c),P=M.indexOf(f,c);if(0>v&&(v=M.length),0>P&&(P=M.length),c=Math.min(v,P),c==M.length)break;if(r.getTokenTypeAt(CodeMirror.Pos(C,c+1))==n)if(c==v)++u;else if(!--u){a=C,s=c;break r}++c}if(null!=a&&(t!=a||s!=i))return{from:CodeMirror.Pos(t,i),to:CodeMirror.Pos(a,s)}}}),CodeMirror.braceRangeFinder=CodeMirror.fold.brace,CodeMirror.registerHelper("fold","import",function(r,e){function o(e){if(e<r.firstLine()||e>r.lastLine())return null;var o=r.getTokenAt(CodeMirror.Pos(e,1));if(/\S/.test(o.string)||(o=r.getTokenAt(CodeMirror.Pos(e,o.end+1))),"keyword"!=o.type||"import"!=o.string)return null;for(var i=e,n=Math.min(r.lastLine(),e+10);n>=i;++i){var t=r.getLine(i),l=t.indexOf(";");if(-1!=l)return{startCh:o.end,end:CodeMirror.Pos(i,l)}}}var i,e=e.line,n=o(e);if(!n||o(e-1)||(i=o(e-2))&&i.end.line==e-1)return null;for(var t=n.end;;){var l=o(t.line+1);if(null==l)break;t=l.end}return{from:r.clipPos(CodeMirror.Pos(e,n.startCh+1)),to:t}}),CodeMirror.importRangeFinder=CodeMirror.fold["import"],CodeMirror.registerHelper("fold","include",function(r,e){function o(e){if(e<r.firstLine()||e>r.lastLine())return null;var o=r.getTokenAt(CodeMirror.Pos(e,1));return/\S/.test(o.string)||(o=r.getTokenAt(CodeMirror.Pos(e,o.end+1))),"meta"==o.type&&"#include"==o.string.slice(0,8)?o.start+8:void 0}var e=e.line,i=o(e);if(null==i||null!=o(e-1))return null;for(var n=e;;){var t=o(n+1);if(null==t)break;++n}return{from:CodeMirror.Pos(e,i+1),to:r.clipPos(CodeMirror.Pos(n))}}),CodeMirror.includeRangeFinder=CodeMirror.fold.include;