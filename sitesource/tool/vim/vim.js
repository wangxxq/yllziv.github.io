$(document).ready(function() {
  $('iframe', window.parent.document).height($('#vim').height());
  $(window).resize(function() {
    $('iframe', window.parent.document).height($('#vim').height());
  })
  editor.doc.setValue(vimTaskArray[0]);
})

$("#newtab").click(function() {
  addTab();
});
$("#new").click(function() {
  editNew();
});

$("#save").click(function() {
  download('formyll.txt', editor.doc.getValue());
});
$("#file").buttonset();

$('#chooseTask').change(function() {
    switch ($('#chooseTask').val()) {
      case "1":
        editor.doc.setValue(vimTaskArray[0]);
        break;
      case "2":
        editor.doc.setValue(vimTaskArray[1]);
        break;
      case "3":
        editor.doc.setValue(vimTaskArray[2]);
        break;
      case "4":
        editor.doc.setValue(vimTaskArray[3]);
        break;
      case "5":
        editor.doc.setValue(vimTaskArray[4]);
        break;
      case "6":
        editor.doc.setValue(vimTaskArray[5]);
        break;
      case "7":
        editor.doc.setValue(vimTaskArray[6]);
        break;
      case "8":
        editor.doc.setValue(vimTaskArray[7]);
        break;
      case "9":
        editor.doc.setValue(vimTaskArray[8]);
        break;
      case "10":
        editor.doc.setValue(vimTaskArray[9]);
        break;
    }
  })
  //tab section start
var tabTitle = $("#tab_title"),
  tabContent = $("#tab_content"),
  tabTemplate = "<li><a id='#{labelid}' href='#{href}' onclick='selectLabel(this)'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>",
  tabCounter = 1;

var tabs = $("#tabs").tabs();

// modal dialog init: custom buttons and a "close" callback reseting the form inside
var dialog = $("#dialog").dialog({
  autoOpen: false,
  modal: true,
  buttons: {
    Add: function() {
      addTab();
      $(this).dialog("close");
    },
    Cancel: function() {
      $(this).dialog("close");
    }
  },
  close: function() {
    form[0].reset();
  }
});

// addTab form: calls addTab function on submit and closes the dialog
var form = dialog.find("form").submit(function(event) {
  addTab();
  dialog.dialog("close");
  event.preventDefault();
});

var currentLabel = $("#labels-1");

function selectLabel(obj) {
  editor = editors["code-" + String.fromCharCode(parseInt(obj.id.substring(obj.id.indexOf('-') + 1)) + 96)]
  currentLabel = $("#" + obj.id);
  //remove label focus
  currentLabel.blur();
  $(currentLabel.attr("href") + " textarea").focus();
}

function editNew() {
  editor.doc.setValue('');
}

// actual addTab function: adds new tab using the input from the form above
function addTab() {
  var label = "[No Name]", //tabTitle.val() || "Tab " + tabCounter,
    id = "tabs-" + tabCounter,
    li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label).replace(/#\{labelid\}/g, "labels-" + tabCounter)),
    tabContentHtml = ""; //tabContent.val() || "Tab " + tabCounter + " content.";

  tabs.find(".ui-tabs-nav").append(li);
  tabs.append("<div style='padding:0' id='" + id + "'><textarea  id='code-" + String.fromCharCode(96 + tabCounter) + "' name='code'>" + tabContentHtml + "</textarea></div>");
  tabs.tabs("refresh");
  editor = CodeMirror.fromTextArea(document.getElementById("code-" + String.fromCharCode(96 + tabCounter)), {
    lineNumbers: true,
    mode: "text/x-csrc",
    vimMode: true,
    theme: 'lesser-dark',
    tabSize: 2,
    showCursorWhenSelecting: true,
    lineWrapping: true,
    extraKeys: {
      "Ctrl-Q": function(cm) {
        cm.foldCode(cm.getCursor());
      },
      "Ctrl-Insert": function() {
        addTab();
      },
      "Ctrl-Delete": function() {
        removeTab();
      },
      "F11": function(cm) {
        cm.setOption("fullScreen", !cm.getOption("fullScreen"));
      }
    },
    foldGutter: {
      rangeFinder: new CodeMirror.fold.combine(CodeMirror.fold.brace, CodeMirror.fold.comment)
    },
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    styleActiveLine: true,
    matchBrackets: true,
    autofocus: true
  });

  editors["code-" + String.fromCharCode(96 + tabCounter)] = editor;
  $("#labels-" + tabCounter).click();
  editor.doc.setValue('');
  $("#tabs-" + tabCounter + " textarea").focus();
  tabCounter++;
}

function removeTab() {
  var panelId = currentLabel.attr("href");
  $(panelId).remove();
  tabs.tabs("refresh");
}
// close icon: removing the tab on click
tabs.delegate("span.ui-icon-close", "click", function() {
  var panelId = $(this).closest("li").remove().attr("aria-controls");
  $("#" + panelId).remove();
  tabs.tabs("refresh");
});

tabs.bind("keyup", function(event) {
  if (event.altKey && event.keyCode === $.ui.keyCode.BACKSPACE) {
    var panelId = tabs.find(".ui-tabs-active").remove().attr("aria-controls");
    $("#" + panelId).remove();
    tabs.tabs("refresh");
  }
});
//tab section end    
var editors = new Array();
var editor;

//read file
function readBlob(opt_startByte, opt_stopByte) {

  var files = document.getElementById('files').files;
  if (!files.length) {
    alert('Please select a file!');
    return;
  }

  var file = files[0];
  var start = parseInt(opt_startByte) || 0;
  var stop = parseInt(opt_stopByte) || file.size - 1;

  var reader = new FileReader();

  // If we use onloadend, we need to check the readyState.
  reader.onloadend = function(evt) {
    if (evt.target.readyState == FileReader.DONE) { // DONE == 2
      //document.getElementById('byte_content').textContent = evt.target.result;
      var ext = "";
      currentLabel.text(file.name);
      ext = file.name.substring(file.name.lastIndexOf('.') + 1);
      switch (ext) {
        case "html":
        case "htm":
          var mixedMode = {
            name: "htmlmixed",
            scriptTypes: [{
              matches: /\/x-handlebars-template|\/x-mustache/i,
              mode: null
            }, {
              matches: /(text|application)\/(x-)?vb(a|script)/i,
              mode: "vbscript"
            }]
          };
          editor.setOption("mode", mixedMode);
          //console.log(editor.doc.getMode().name);
          break;
        case "js":
          editor.setOption("mode", "text/javascript");
          break;
        case "json":
          editor.setOption("mode", "application/json");
          break;
        case "go":
          editor.setOption("mode", "text/x-go");
          break;
        case "markdown":
        case "mdown":
        case "mkdn":
        case "md":
        case "mkd":
        case "mdwn":
        case "mdtxt":
        case "mdtext":
        case "text":
          editor.setOption("mode", "text/x-markdown");
          break;
        case "py":
          editor.setOption("mode", "text/x-python");
          break;
        case "xml":
          editor.setOption("mode", "application/xml");
          break;
        case "pl":
          editor.setOption("mode", "text/x-perl");
          break;
        case "php":
          editor.setOption("mode", "text/x-php");
          break;
        case "rb":
          editor.setOption("mode", "text/x-ruby");
          break;
        case "tcl":
          editor.setOption("mode", "text/x-tcl");
          break;
        case "vb":
          editor.setOption("mode", "text/x-vb");
          break;
        case "vbs":
          editor.setOption("mode", "text/vbscript");
          break;
        case "cs":
          editor.setOption("mode", "text/x-csharp");
          break;
        case "c":
          editor.setOption("mode", "text/x-csrc");
          break;
        case "cpp":
          editor.setOption("mode", "text/x-c++src");
          break;
        case "java":
          editor.setOption("mode", "text/x-java");
          break;
        case "css":
          editor.setOption("mode", "text/css");
          break;
      }
      editor.doc.setValue(evt.target.result);
    }
  };

  var blob = file.slice(start, stop + 1);
  reader.readAsBinaryString(blob);
}

function download(filename, text) {
  var pom = document.createElement('a');
  pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  pom.setAttribute('download', filename);
  pom.click();
}

$("#open").click(function() {
  $("#files").click();
});
addTab();
