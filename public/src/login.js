// 登陆的请求封装

define(['jquery'], function($) {
      // 提交表单
      $('form').on('submit', function() {
          // 缓存外部this
          var _this = $(this);
          // 真实地址：http://localhost:3000/employee/employeeLogin
          $.ajax({
              url: '/api/employee/employeeLogin',
              type: 'post',
              data: _this.serialize(),
              success: function(info) {
                  // 失败
                  if(info.error) {
                      return alert(info.message);
                  }
                  // 成功后跳转
                  location.href = '/';
              }
          });


          return false;
      })      
})