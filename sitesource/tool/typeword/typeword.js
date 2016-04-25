var _capslk = 0;
var art_line = 1;
var art_num = 0;
var last_code = 0;
var start_time = 0;
var time_cha = 0;
var typing_num = 0;
var all_num = 0;
var error_num = 0;
var right_num = "--";
var jindu = 0;
var sudu_num = "--";
var _jishi = null;
if (key_data != "") {
  show_key();
  jishi();
  for (var i = 1; i < key_data.length; i++) { all_num += key_data[i].length }
}

function jishi() {
  if (start_time > 0) {
    time_cha = get_time() - start_time;
    sudu_num = Math.round(typing_num / time_cha * 60000)
  }
  if (typing_num > 0) {
    right_num = Math.round((1 - error_num / typing_num) * 10000) / 100;
    jindu = Math.round((typing_num - error_num) / all_num * 10000) / 100
  }
  document.getElementById("shijian").innerHTML = "时间：" + get_date(time_cha);
  document.getElementById("sudu").innerHTML = "速度：" + sudu_num + " KMP";
  document.getElementById("right_num").innerHTML = "正确率：" + right_num + " %";
  document.getElementById("jindu").innerHTML = "进度：" + jindu + " %";
  _jishi = setTimeout("jishi()", 100)
}

function get_date(A) {
  var B = new Date(A);
  return B.getMinutes() + "分" + B.getSeconds() + "秒"
}

function get_time() {
  var A = new Date();
  return A.getTime()
}

function show_key() {
  if (key_data[art_line]) {
    var B = key_data[art_line].charCodeAt(art_num);
    show_text();
    set_on(B, "on", 1);
    set_shift(B)
  } else {
    clearTimeout(_jishi);
    var A = document.getElementById("art_text");
    A.style.paddingLeft = "0px";
    A.innerHTML = "<h3>O(∩_∩)O哈哈~ 恭喜你已经完成本次测试！</h3>";
    document.getElementById("jindu").innerHTML = "进度：100 %"
  }
}

function show_sudu() {
  var A = document.getElementById("shijian")
}

function set_shift(C) {
  var B = /^(126|33|64|35|36|37|81|87|69|82|84|65|83|68|70|71|90|88|67|86|66)$/;
  var A = /^(94|38|42|40|41|95|43|89|85|73|79|80|123|125|124|72|74|75|76|58|34|78|77|60|62|63)$/;
  set_on("991", null);
  set_on("992", null);
  if (C >= 97 && C <= 122) {
    if (_capslk == 1) {
      C -= 32;
      if (B.test(C)) { set_on("992", "on", 1) } else {
        if (A.test(C)) { set_on("991", "on", 1) }
      }
    }
  } else {
    if (C >= 65 && C <= 90) {
      if (_capslk != 1) {
        if (B.test(C)) { set_on("992", "on", 1) } else {
          if (A.test(C)) { set_on("991", "on", 1) }
        }
      }
    } else {
      if (B.test(C)) { set_on("992", "on", 1) } else {
        if (A.test(C)) { set_on("991", "on", 1) }
      }
    }
  }
}

function show_text() {
  if (key_data[art_line]) {
    var C = document.getElementById("art_text");
    C.style.paddingLeft = Math.round((990 - key_data[art_line].length * 65) / 2) + "px";
    var B = "";
    for (var A = 0; A < key_data[art_line].length; A++) { B += '<div class="b_' + (A == art_num ? "on" : "alt") + '"><ul><li>' + key_data[art_line].substr(A, 1) + "</li></ul></div>" }
    C.innerHTML = B
  }
}

function checkKey(B) {
  if (key_data[art_line]) {
    var A = get_keyCode(B);
    var C = key_data[art_line].charCodeAt(art_num);
    if (start_time == 0) { start_time = get_time() }
    set_on(last_code, null);
    last_code = 0;
    typing_num++;
    if (A == C) {
      set_on(A, null);
      if (art_num < key_data[art_line].length - 1) { art_num++ } else {
        art_num = 0;
        art_line++
      }
    } else {
      error_num++;
      if (code_code(A) != code_code(C)) {
        last_code = A;
        set_on(A, "err", 1)
      }
    }
    show_key()
  }
  return false
}

function checkDown(B) {
  var B = B ? B : (window.event ? window.event : null);
  var A = B.which ? B.which : B.keyCode;
  if (A == 8 || A == 9 || A == 32) {
    checkKey(B);
    return false
  }
  if (A == 20) {
    if (_capslk == 1) {
      _capslk = 0;
      set_on(20, null)
    } else {
      _capslk = 1;
      set_on(20, "on", 1)
    }
  }
}

function get_keyCode(B) {
  var B = B ? B : (window.event ? window.event : null);
  var A = B.which ? B.which : B.keyCode;
  var C = B.shiftKey ? B.shiftKey : ((A == 16) ? true : false);
  if ((A >= 65 && A <= 90 && !C) || (A >= 97 && A <= 122 && C)) {
    _capslk = 1;
    set_on(20, "on", 1)
  } else {
    if ((A >= 65 && A <= 90) || (A >= 97 && A <= 122)) {
      _capslk = 0;
      set_on(20, null)
    }
  }
  return A
}

function set_on(D, A, C) {
  D = code_code(D);
  var E = document.getElementById("a_" + D);
  if (A == "on" || A == "err") {
    if (E) {
      if (A == "on") {
        var B = /(_on)+$/i;
        if (!B.test(E.className)) { E.className += "_on" }
      } else {
        var B = /(_err)+$/i;
        if (!B.test(E.className)) { E.className += "_err" }
      }
      if (!C) { setTimeout(function() { set_on(D, null) }, 150) }
    }
  } else {
    if (E) { E.className = E.className.replace(/(_on|_err)+$/i, "") }
  }
  return true
}

function code_code(D) {
  if (D >= 65 && D <= 90) { D += 32 }
  var B = new Array(126, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43, 60, 62, 63, 58, 34, 123, 125, 124);
  var C = new Array(96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 44, 46, 47, 59, 39, 91, 93, 92);
  for (var A = 0; A < B.length; A++) { D = D == B[A] ? C[A] : D }
  return D
}

function MM_jumpMenu(A) { document.location = A.value };
