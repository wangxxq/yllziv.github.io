CodeMirror.defineMode("scheme",function(){function e(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}function t(e,t,n){this.indent=e,this.type=t,this.prev=n}function n(e,n,r){e.indentStack=new t(n,r,e.indentStack)}function r(e){e.indentStack=e.indentStack.prev}function i(e){return e.match(x)}function a(e){return e.match(b)}function c(e,t){return t===!0&&e.backUp(1),e.match(k)}function l(e){return e.match(v)}var s="builtin",d="comment",o="string",u="atom",m="number",p="bracket",f=2,h=e("λ case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt #f floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? #t tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"),g=e("define let letrec let* lambda"),x=new RegExp(/^(?:[-+]i|[-+][01]+#*(?:\/[01]+#*)?i|[-+]?[01]+#*(?:\/[01]+#*)?@[-+]?[01]+#*(?:\/[01]+#*)?|[-+]?[01]+#*(?:\/[01]+#*)?[-+](?:[01]+#*(?:\/[01]+#*)?)?i|[-+]?[01]+#*(?:\/[01]+#*)?)(?=[()\s;"]|$)/i),b=new RegExp(/^(?:[-+]i|[-+][0-7]+#*(?:\/[0-7]+#*)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?@[-+]?[0-7]+#*(?:\/[0-7]+#*)?|[-+]?[0-7]+#*(?:\/[0-7]+#*)?[-+](?:[0-7]+#*(?:\/[0-7]+#*)?)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?)(?=[()\s;"]|$)/i),v=new RegExp(/^(?:[-+]i|[-+][\da-f]+#*(?:\/[\da-f]+#*)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?@[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?[-+](?:[\da-f]+#*(?:\/[\da-f]+#*)?)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?)(?=[()\s;"]|$)/i),k=new RegExp(/^(?:[-+]i|[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)i|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)@[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)?i|(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*))(?=[()\s;"]|$)/i);return{startState:function(){return{indentStack:null,indentation:0,mode:!1,sExprComment:!1}},token:function(e,t){if(null==t.indentStack&&e.sol()&&(t.indentation=e.indentation()),e.eatSpace())return null;var x=null;switch(t.mode){case"string":for(var b,v=!1;null!=(b=e.next());){if('"'==b&&!v){t.mode=!1;break}v=!v&&"\\"==b}x=o;break;case"comment":for(var b,k=!1;null!=(b=e.next());){if("#"==b&&k){t.mode=!1;break}k="|"==b}x=d;break;case"s-expr-comment":if(t.mode=!1,"("!=e.peek()&&"["!=e.peek()){e.eatWhile(/[^\/s]/),x=d;break}t.sExprComment=0;default:var y=e.next();if('"'==y)t.mode="string",x=o;else if("'"==y)x=u;else if("#"==y)if(e.eat("|"))t.mode="comment",x=d;else if(e.eat(/[tf]/i))x=u;else if(e.eat(";"))t.mode="s-expr-comment",x=d;else{var w=null,E=!1,S=!0;e.eat(/[ei]/i)?E=!0:e.backUp(1),e.match(/^#b/i)?w=i:e.match(/^#o/i)?w=a:e.match(/^#x/i)?w=l:e.match(/^#d/i)?w=c:e.match(/^[-+0-9.]/,!1)?(S=!1,w=c):E||e.eat("#"),null!=w&&(S&&!E&&e.match(/^#[ei]/i),w(e)&&(x=m))}else if(/^[-+0-9.]/.test(y)&&c(e,!0))x=m;else if(";"==y)e.skipToEnd(),x=d;else if("("==y||"["==y){for(var q,C="",$=e.column();null!=(q=e.eat(/[^\s\(\[\;\)\]]/));)C+=q;C.length>0&&g.propertyIsEnumerable(C)?n(t,$+f,y):(e.eatSpace(),e.eol()||";"==e.peek()?n(t,$+1,y):n(t,$+e.current().length,y)),e.backUp(e.current().length-1),"number"==typeof t.sExprComment&&t.sExprComment++,x=p}else")"==y||"]"==y?(x=p,null!=t.indentStack&&t.indentStack.type==(")"==y?"(":"[")&&(r(t),"number"==typeof t.sExprComment&&0==--t.sExprComment&&(x=d,t.sExprComment=!1))):(e.eatWhile(/[\w\$_\-!$%&*+\.\/:<=>?@\^~]/),x=h&&h.propertyIsEnumerable(e.current())?s:"variable")}return"number"==typeof t.sExprComment?d:x},indent:function(e){return null==e.indentStack?e.indentation:e.indentStack.indent},lineComment:";;"}}),CodeMirror.defineMIME("text/x-scheme","scheme");