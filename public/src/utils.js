
// utils工具类的意思

// 检测登录功能
define(['jquery'], function($) { //指定依赖写数组,这个指的是jquery属性 //返回值

      $.ajax({ //依赖于jquery
            // 真实地址：/api http://localhost:3000
            url: '/api/employee/checkRootLogin',
            type: 'get',
            success: function(info) {
                console.log(info);

                // 如果成功不做任何的反应，失败了跳转
                if(info.error) {
                    // location.href = '/login.html';
                }
            }
      })      

})







