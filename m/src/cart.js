

define(['jquery', './utils', 'template'], function($, utils, template) {

      // 检测登录
      utils.checkLogin();

      $.ajax({
            url: '/api/cart/queryCart',
            type: 'get',
            success: function(info) {
                  console.log(info);

                  var html = template('cartList', {list: info});

                  $('#cart').html(html);
            }
      })






})