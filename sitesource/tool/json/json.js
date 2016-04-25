$(document).ready(function() {
  $('iframe', window.parent.document).height($('#tool').height());
  $(window).resize(function() {
    $('iframe', window.parent.document).height($('#tool').height());
  })

  var jsonString = null;
  var historyJsonArray = [];
  if (window.localStorage.getItem('historyJsonArray')) {
    historyJsonArray = window.localStorage.getItem('historyJsonArray').split(',');
    updateSelectHistory(historyJsonArray);
  }

  $('.tool-source').bind('keyup mouseup', function() {
    var txt = $(this).val();
    if (/^\s*$/.test(txt)) {
      $('#destJSON').html('数据为空,无法格式化! ');
    }
    try {
      var data = eval('(' + txt + ')');
      jsonString = JSON.stringify(data);
      $('#destJSON').JSONView(data);
      if ($('#rowJSON').is(':visible')) {
        $('#rowJSON').show().val(formatJSON(jsonString));
      }
    } catch (e) {
      $('#destJSON').html('数据源语法错误,格式化失败!');
      jsonString = '';
    };
  });
  $('#collapse-btn').on('click', function() {
    $('#destJSON').JSONView('collapse');
  });

  $('#expand-btn').on('click', function() {
    $('#destJSON').JSONView('expand');
  });

  $('#toggle-level1-btn').on('click', function() {
    $('#destJSON').JSONView('toggle', 1);
  });

  $('#toggle-level2-btn').on('click', function() {
    $('#destJSON').JSONView('toggle', 2);
  });

  $('#toggle-level3-btn').on('click', function() {
    $('#destJSON').JSONView('toggle', 3);
  });

  $('#toggle-download-btn').on('click', function() {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent($('#sourceJSON').val()));
    pom.setAttribute('download', 'formyll.json');
    pom.click();
  });

  $('#json-row-btn').on('click', function() {
    if ($('#destJSON').is(':visible')) {
      $('#destJSON').hide();
      $('#json-row-btn').text('切换格式化')
      $('#rowJSON').show().val(formatJSON(jsonString));
      $('.tool-button-ul .tool-button-list:lt(6)').undelegate('click')
        .css('background-color', '#f9f9d9').css('cursor', 'not-allowed');
    } else {
      $('#rowJSON').hide();
      $('#json-row-btn').text('切换原始值')
      $('#destJSON').show();
      $('.tool-button-ul .tool-button-list:lt(6)').delegate('click')
        .css('background-color', 'white').css('cursor', 'pointer');
    }
  })

  $("#json-compress-btn").on('click', function() {
    if ($('#rowJSON').is(':visible')) {
      $('#rowJSON').show().val(formatJSON(jsonString, true));
    } else {
      $('#json-row-btn').click();
      $('#rowJSON').show().val(formatJSON(jsonString, true));
    }
  });

  // 清空
  $('#json-clean-btn').on('click', function() {
    window.localStorage.removeItem('historyJsonArray');
    $('#destJSON').val('');
    $('#rowJSON').val('');
    $('#sourceJSON').val('');
    $('.json-history').html('<option selected="selected" class="display-none">没有保存的纪录，请点击保存纪录按钮</option>');
  });

  // 保存
  $('#json-save-btn').on('click', function() {
    historyJsonArray.push(encodeURI(jsonString));
    window.localStorage.setItem('historyJsonArray', historyJsonArray)
    updateSelectHistory(historyJsonArray);
  });

  // 选择历史
  $('.json-history').on('change', function() {
    $('#sourceJSON').val(decodeURI($(this).val()));
  })


});

function updateSelectHistory(hArray) {
  var tmpString = '<option selected="selected" class="display-none">请选择历史纪录</option>';
  for (var i = 0; i < hArray.length; i++) {
    tmpString += '<option value="' + hArray[i] + '">' + decodeURI(hArray[i]) + '</option>';
  }
  $('.json-history').html(tmpString);
}


function formatJSON(txt, compress /*是否为压缩模式*/ ) { /* 格式化JSON源码(对象转换为JSON文本) */
  var indentChar = '    ';
  if (/^\s*$/.test(txt)) {
    alert('数据为空,无法格式化! ');
    return;
  }
  try {
    var data = eval('(' + txt + ')');
  } catch (e) {
    alert('数据源语法错误,格式化失败! 错误信息: ' + e.description, 'err');
    return;
  };
  var draw = [],
    last = false,
    This = this,
    line = compress ? '' : '\n',
    nodeCount = 0,
    maxDepth = 0;

  var notify = function(name, value, isLast, indent /*缩进*/ , formObj) {
    nodeCount++; /*节点计数*/
    for (var i = 0, tab = ''; i < indent; i++) tab += indentChar; /* 缩进HTML */
    tab = compress ? '' : tab; /*压缩模式忽略缩进*/
    maxDepth = ++indent; /*缩进递增并记录*/
    if (value && value.constructor == Array) { /*处理数组*/
      draw.push(tab + (formObj ? ('"' + name + '":') : '') + '[' + line); /*缩进'[' 然后换行*/
      for (var i = 0; i < value.length; i++)
        notify(i, value[i], i == value.length - 1, indent, false);
      draw.push(tab + ']' + (isLast ? line : (',' + line))); /*缩进']'换行,若非尾元素则添加逗号*/
    } else if (value && typeof value == 'object') { /*处理对象*/
      draw.push(tab + (formObj ? ('"' + name + '":') : '') + '{' + line); /*缩进'{' 然后换行*/
      var len = 0,
        i = 0;
      for (var key in value) len++;
      for (var key in value) notify(key, value[key], ++i == len, indent, true);
      draw.push(tab + '}' + (isLast ? line : (',' + line))); /*缩进'}'换行,若非尾元素则添加逗号*/
    } else {
      if (typeof value == 'string') value = '"' + value + '"';
      draw.push(tab + (formObj ? ('"' + name + '":') : '') + value + (isLast ? '' : ',') + line);
    };
  };
  var isLast = true,
    indent = 0;
  notify('', data, isLast, indent, false);
  return draw.join('');
}
