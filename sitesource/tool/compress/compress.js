$(document).ready(function() {
  $('iframe', window.parent.document).height($('#tool').height());
  $(window).resize(function() {
    $('iframe', window.parent.document).height($('#tool').height());
  })

  function do_js_beautify(text, tabchar) {
    js_source = text.replace(/^\s+/, '');
    tabsize = 1;
    if (js_source && js_source.charAt(0) === '<') {
      return style_html(js_source, tabsize, tabchar, 80);
    } else {
      return js_beautify(js_source, tabsize, tabchar);
    }
    return false;
  }

  function pack_js(text, base64) {
    var input = text;
    var packer = new Packer;
    if (base64) {
      var output = packer.pack(input, 1, 0);
    } else {
      var output = packer.pack(input, 0, 0);
    }
    return output;
  }


  var jsonString = null;
  var historyCompressArray = [];
  if (window.localStorage.getItem('historyCompressArray')) {
    historyCompressArray = window.localStorage.getItem('historyCompressArray').split(',');
    updateSelectHistory(historyCompressArray);
  }



  $('#compress-minijs-btn').on('click', function() {
    $('#destJSON').val(pack_js($('#sourceJSON').val(), 0))
  });
  $('#compress-seminijs-btn').on('click', function() {
    $('#destJSON').val(pack_js($('#sourceJSON').val(), 1))
  });
  $('#compress-4formatejs-btn').on('click', function() {
    $('#destJSON').val(do_js_beautify($('#sourceJSON').val(), '    '))
  });
  $('#compress-2formatejs-btn').on('click', function() {
    $('#destJSON').val(do_js_beautify($('#sourceJSON').val(), '  '))
  });
  $('#compress-tformatejs-btn').on('click', function() {
    $('#destJSON').val(do_js_beautify($('#sourceJSON').val(), '\t'))
  });
  $('#compress-cssencode-btn').on('click', function() {
    $('#destJSON').val(CSSencode($('#sourceJSON').val()))
  });
  $('#compress-cssdecode-btn').on('click', function() {
    $('#destJSON').val(CSSdecode($('#sourceJSON').val()))
  });

  $('#compress-json-btn').on('click', function() {
    $('#destJSON').val(formatJSON($('#sourceJSON').val(), true))
  });


  // 清空
  $('#json-clean-btn').on('click', function() {
    window.localStorage.removeItem('historyCompressArray');
    $('#destJSON').val('');
    $('#rowJSON').val('');
    $('#sourceJSON').val('');
    $('.json-history').html('<option selected="selected" class="display-none">没有保存的纪录，请点击保存纪录按钮</option>');
  });

  // 保存
  $('#json-save-btn').on('click', function() {
    historyCompressArray.push(encodeURI($('#sourceJSON').val()));
    window.localStorage.setItem('historyCompressArray', historyCompressArray)
    updateSelectHistory(historyCompressArray);
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
    return '数据为空,无法格式化! ';
  }
  try {
    var data = eval('(' + txt + ')');
  } catch (e) {
    return '数据源语法错误,格式化失败! 错误信息: ';
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
