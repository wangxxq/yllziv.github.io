CodeMirror.registerHelper("lint","coffeescript",function(r){var e=[],o=function(r){var o=r.lineNumber;e.push({from:CodeMirror.Pos(o-1,0),to:CodeMirror.Pos(o,0),severity:r.level,message:r.message})};try{for(var i=coffeelint.lint(r),t=0;t<i.length;t++)o(i[t])}catch(s){e.push({from:CodeMirror.Pos(s.location.first_line,0),to:CodeMirror.Pos(s.location.last_line,s.location.last_column),severity:"error",message:s.message})}return e}),CodeMirror.coffeeValidator=CodeMirror.lint.coffeescript;