var historyRestArray = [];
$(document).ready(function() {
  $('iframe', window.parent.document).height(900);
  if (window.localStorage.getItem('historyRestArray')) {
    historyRestArray = window.localStorage.getItem('historyRestArray').split(',');
    updateSelectHistory(historyRestArray);
  }
});

function show_msg(type, msg, duration) {
  $('#status').removeClass('error').removeClass('success').removeClass('notice');
  $('#status').addClass(type).html(msg).fadeIn(function() {
    if (duration > 0) {
      setTimeout(function() {
        $("#status").fadeOut("fast");
      }, duration);
    }
  });
}

$('body').on('change', '.param-input', function() {
  $(this).attr('data-value', $(this).val());
})

// 清空
$('#clean').on('click', function() {
  window.localStorage.removeItem('historyRestArray');
  $('#request_uri').val('');
  $('#jsonparam').val('');
  $('#param_template').nextAll().remove();
  $('#request_header_template').nextAll().remove();
  $('.rest-history').html('<option selected="selected" class="display-none">没有保存的纪录，请点击保存纪录按钮</option>');
});
// 保存
$('#save').on('click', function() {
  var oneRecord = {
    url: $('#request_uri').val(),
    jsonparam: $('#jsonparam').val(),
    headerhtml: $('#request_header_template').parent().html(),
    paramhtml: $('#param_template').parent().html()
  };
  historyRestArray.push(encodeURIComponent(JSON.stringify(oneRecord)));
  window.localStorage.setItem('historyRestArray', historyRestArray);
  updateSelectHistory(historyRestArray);
});

// 选择历史
$('.rest-history').on('change', function() {
  var oneRecord = JSON.parse(decodeURIComponent($(this).val()));
  $('#request_uri').val(oneRecord.url);
  $('#jsonparam').val(oneRecord.jsonparam);
  $('#request_header_template').parent().html(oneRecord.headerhtml);
  $('#param_template').parent().html(oneRecord.paramhtml);
  $('.param-input').each(function() {
    $(this).val($(this).attr('data-value'));
  })
})

function updateSelectHistory(hArray) {
  var tmpString = '<option selected="selected" class="display-none">请选择历史纪录</option>';
  for (var i = 0; i < hArray.length; i++) {
    tmpString += '<option value="' + hArray[i] + '">' + JSON.parse(decodeURIComponent(hArray[i])).url + '</option>';
  }
  $('.rest-history').html(tmpString);
}

$('#add_more_param').click(function(e) {
  $('#jsonparam').val('').attr('disabled', 'true');
  $(this).parent().append($('#param_template .param-pair').clone());
});
$('#add_more_request_header').click(function(e) {
  $(this).parent().append($('#request_header_template .request-header-pair').clone());
});

$('fieldset').on('click', 'a.delete_this', function(e) {
  console.log('delete');
  $(this).parent().remove();
  if ($('#params .delete_this').length == 1) {
    $('#jsonparam').val('').removeAttr('disabled');
  }
  return false;
});

$('#send').click(function(e) {
  show_msg('info', '正在请求...');
  $('#response_wrapper').hide();
  var method = $('#method').val();
  var url = $('#request_uri').val();
  var data = [];
  $('input[name="param_key"]').each(function(e) {
    var key = $(this).val();
    if (key != '') {
      var val = $(this).next('input[name="param_value"]').val();
      if (val != '') {
        data.push(encodeURIComponent(key) + '=' + encodeURIComponent(val))
      }
    }
  });

  data = data.join('&');
  if ((data.length) == 0) {
    data = $('#jsonparam').val();
  }

  var headers = {};
  $('input[name="request_header_key"]').each(function(e) {
    var key = $(this).val();
    if (key != '') {
      var val = $(this).next('input[name="request_header_value"]').val();
      if (val != '') {
        headers[key] = val;
      }
    }
  });

  var requestSent = new Date().getTime();

  $.ajax({
    'url': url,
    'type': method,
    'data': data,
    'dataType': 'text',
    'headers': headers,
    'complete': function(jqXHR, textStatus) {
      $('#response_wrapper').show();
      if (jqXHR.status != 0) {
        $('#response_status').html('状态码: ' + jqXHR.status);
      } else {
        $('#response_status').html('');
      }
      $('#response_headers').html(jqXHR.getAllResponseHeaders());
      $('#response_body').html(jqXHR.responseText);
      $('iframe', window.parent.document).height($('#rest').height() + 100);
    },
    'error': function(jqXHR, textStatus, errorThrown) {
      show_msg('error', textStatus, errorThrown);
    },
    'success': function(data, textStatus, jqXHR) {
      var latency = new Date().getTime() - requestSent;
      $('#response pre').css('border', '1px solid #222')
      show_msg('success', '请求时间： ' + latency + 'ms')
    }
  });
});
