$(function() {

  var updatingMatches;
  var resultField = CodeMirror.fromTextArea( // 带匹配的文本
    document.getElementById("tbInput"), {
      onChange: function() {
        if (resultField && !updatingMatches) {
          run();
          highlightMatches();
        }
      },
      styleActiveLine: true,
      matchBrackets: true,
      lineWrapping: true,
      lineNumbers: true,
      theme: 'monokai',
      autofocus: true
    }
  );


  var jrt = jch.jRegexTester;
  var $tbReg = $("#tbReg"); // 正则表达式
  var $tbInput = $("#tbInput"); // 待匹配文本
  var $tbReplace = $("#tbReplace"); // 要替换的内容
  var $tbOutput = $("#tbOutput"); // 输出内容
  var cmReg = null;
  var cmInput = null;
  var cmReplace = null;
  var cmOutput = null;
  var workMode = jrt.workMode.match;
  var replaceMode = jrt.replaceMode.includeNoMatch;
  var newLineChar = jrt.newLineChar.CRLF;
  var RegExpOption = "g";
  init();

  function init() {
    bind();
    changeWorkMode(jrt.workMode.match);
    $tbReg.val("([^?&=]+)=([^?&=]*)");
    resultField.setValue("https://www.google.com.hk/search?q=CodeMirror&aqs=chrome&sourceid=chrome&es_sm=91&ie=UTF-8");
    $tbReplace.val("\"$1\":\"$2\",\r\n");
    run();
  }

  function bind() {
    //输入自动运行
    $tbReg.add($tbInput).add($tbReplace).bind("change input", function(e) {
      run();
      highlightMatches();

    });

    //手动运行
    $("#btnRun").click(function(e) {
      run();
    });
    //修改工作模式
    $("input[name='workMode']").change(function(e) {
      changeWorkMode($("input[name='workMode']:checked").val());
      run();
    });
    //修改替换模式
    $("input[name='replaceMode']").change(function(e) {
      replaceMode = Number($("input[name='replaceMode']:checked").val());
      run();
    });
    //修改换行符
    $("input[name='newLineChar']").change(function(e) {
      newLineChar = Number($("input[name='newLineChar']:checked").val());
      run();
    });
    //修改正则选项
    $("input[name='RegExpOption']").change(function(e) {
      var $ipt = $(this);
      var val = $ipt.val();
      RegExpOption = RegExpOption.replace(val, "");
      RegExpOption += $ipt.prop("checked") ? val : "";
      run();
    });
    //将输出内容导入输入内容框
    $("#btnOutputToInput").click(function(e) {
      resultField.setValue($tbOutput.val());
      run();
    });
  }

  function run() {
    var txtReg = $tbReg.val();
    var txtInput = resultField.getValue();
    var txtReplace = $tbReplace.val();
    var reg = valiInputReg($tbReg, RegExpOption);
    var outputResult = "";
    var matchArr = [];
    if (txtReg.length == 0 || txtInput.length == 0) {
      return;
    }
    if (!(reg instanceof RegExp)) {
      return valiOutput(false);
    }
    if (workMode === jrt.workMode.match) {
      matchArr = jch.jRegexTester.matchs(reg, txtInput);
      if (matchArr.length == 0) {
        return valiOutput(false);
      }
      $.each(matchArr, function(i, match) {
        if (!(match instanceof Array)) {
          return true;
        }
        outputResult += match[0] + (i == matchArr.length - 1 ? "" : jrt.getNewLineChar(newLineChar));
      });
    } else if (workMode === jrt.workMode.replace) {
      outputResult = jch.jRegexTester.replace(reg, txtInput, txtReplace, replaceMode);
    }
    valiOutput(outputResult);
  }
  /**
   * 变更工作模式
   * @param  {jch.jRegexTester.workMode} wm 目标工作模式
   * @returns void
   */
  function changeWorkMode(wm) {
    workMode = Number(wm);
    var $row = $tbReplace.parents(".row");
    if (workMode === jrt.workMode.match) {
      $row.hide(0);
    } else if (workMode === jrt.workMode.replace) {
      $row.show(0);
    }
  }
  /**
   * 校验正则表达式输入框输入的正则是否正确，返回正则对象
   *
   * @param {JQuery} $textarea 文本框的DOM对象
   * @param {string} regOption 正则表达式选项
   * @param {string} parentSelector 增加样式的父级选择器
   * @returns {RegExp} (description)
   */
  function valiInputReg($textarea, regOption, parentSelector) {
    if (regOption === void 0) { regOption = ""; }
    if (parentSelector === void 0) { parentSelector = ".form-group"; }
    var txt = $textarea.val();
    var $form = $textarea.parents(parentSelector).eq(0);
    var reg = null;
    if (txt.length == 0) {
      return reg;
    }
    try {
      reg = new RegExp(txt, regOption);
      $form.removeClass("has-error");
    } catch (ex) {
      $form.addClass("has-error");
    }
    return reg;
  }

  function valiOutput(outputText) {
    var $parent = $tbOutput.parents(".form-group").eq(0);
    if (typeof outputText === "boolean" && outputText === false) {
      $tbOutput.val("");
      $parent.addClass("has-error");
    } else if (typeof outputText === "string") {
      $tbOutput.val(outputText);
      $parent.removeClass("has-error");
    }
  }


  // 匹配高亮



  // Array of CodeMirror mark object for all matches
  var matchMarks;

  function highlightMatches() {
    var resultText = resultField.getValue();

    updatingMatches = true;

    // Clear the old marks
    if (matchMarks) {
      resultField.operation(function() {
        matchMarks.forEach(function(markObj) {
          markObj.clear();
        });
      });
    }
    matchMarks = [];

    // Find new matches
    var regEx;
    try {
      var searchText = $('#tbReg').val();
      if (searchText) {
        regEx = new RegExp(searchText, RegExpOption); // TODO: flags
      }
    } catch (e) {
      regEx = null;
    }

    function getPos(offset) {
      return {
        line: resultText.substr(0, offset).split("\n").length - 1,
        ch: (offset - 1) - resultText.lastIndexOf("\n", offset - 1)
      };
    }

    if (regEx && resultText.search(regEx) !== -1) {
      resultField.operation(function() {
        var currentMatch;
        var lastIndex = -1;

        regEx.index = 0;

        while ((currentMatch = regEx.exec(resultText)) !== null) {
          var matchLength = currentMatch[0].length;
          var startPos = getPos(currentMatch.index);
          var endPos = getPos(currentMatch.index + matchLength);
          var marker = resultField.markText(
            startPos,
            endPos,
            "match-highlight"
          );

          marker.match = currentMatch;
          matchMarks.push(marker);

          // Avoid infinite loop
          if (currentMatch.index === lastIndex) {
            break;
          }

          lastIndex = currentMatch.index;
        }
      });
    }

    updatingMatches = false;
  }

  // 提示
  var displayedMarker;
  var focusedRange;

  function updateMatchTip(e) {
    var marker = resultField.findMarksAt(resultField.coordsChar({ x: e.pageX, y: e.pageY }))[0];

    if (marker !== displayedMarker) {
      var $matchTip = $("#match-tip");

      // Hide existing display
      $matchTip.hide();
      if (focusedRange) {
        focusedRange.clear();
        focusedRange = null;
      }

      if (marker) {
        var i;
        var match = marker.match;
        var html = "index: " + match.index + "<br>" +
          "length: " + match[0].length + "<br>";

        if (match.length > 1) {
          html += "groups:<br><blockquote><ol>";
          for (i = 1; i < match.length; i++) {
            html += "<li>" + match[i] + "</li>";
          }
          html += "</ol></blockquote>";
        }

        var range = marker.find();
        var fromCoords = resultField.charCoords(range.from);
        var toCoords = resultField.charCoords(range.to);

        focusedRange = resultField.markText(range.from, range.to, "focused");
        $matchTip.html(html);
        $matchTip.css("left", fromCoords.x);
        $matchTip.css("top", toCoords.yBot - 170);
        $matchTip.show();
      }

      displayedMarker = marker;
    }
  }

  $("#results-holder").mousemove(updateMatchTip);
  $("#match-tip").hide();
  highlightMatches();

});
