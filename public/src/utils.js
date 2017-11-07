
// utils工具类的意思


define(['jquery'], function($) { //指定依赖写数组,这个指的是jquery属性 //返回值

      // 检测登录功能
      $.ajax({ //依赖于jquery
            // 真实地址：/api http://localhost:3000
            url: '/api/employee/checkRootLogin',
            type: 'get',
            success: function(info) {
                // console.log(info);

                // 如果成功不做任何的反应，失败了跳转
                if(info.error) {
                    location.href = '/login.html';
                }
            }
      });

      // 退出登录
      $('.logout').on('click', function() {
            $.ajax({
                  url: '/api/employee/employeeLogout',
                  type: 'get',
                  success: function(info) {
                        if(info.success) {
                              location.href = '/login.html';
                        }
                  }
            })

      })

      // aside的商品一二级分类拉出或隐藏（+代表获得a后紧邻的元素ul，prev代表获取ul前面的a）
      $('.navs a + ul').prev().on('click', function() {
        $(this).next().slideToggle();//想让ul显示，所以用next
      })

})







