CodeMirror.overlayMode=CodeMirror.overlayParser=function(r,e,o){return{startState:function(){return{base:CodeMirror.startState(r),overlay:CodeMirror.startState(e),basePos:0,baseCur:null,overlayPos:0,overlayCur:null}},copyState:function(o){return{base:CodeMirror.copyState(r,o.base),overlay:CodeMirror.copyState(e,o.overlay),basePos:o.basePos,baseCur:null,overlayPos:o.overlayPos,overlayCur:null}},token:function(a,s){return a.start==s.basePos&&(s.baseCur=r.token(a,s.base),s.basePos=a.pos),a.start==s.overlayPos&&(a.pos=a.start,s.overlayCur=e.token(a,s.overlay),s.overlayPos=a.pos),a.pos=Math.min(s.basePos,s.overlayPos),a.eol()&&(s.basePos=s.overlayPos=0),null==s.overlayCur?s.baseCur:null!=s.baseCur&&o?s.baseCur+" "+s.overlayCur:s.overlayCur},indent:r.indent&&function(e,o){return r.indent(e.base,o)},electricChars:r.electricChars}};