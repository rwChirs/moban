

define(['jquery'], function($) {

      // 验证用户是否是登陆状态
      // 由于服务商没有提供专门检测登录接口
      // 可以通过cookie来实现
      
      // console.log($)
      // if(!$.cookie('itcast-name')){
      //    location.href = '/m/user/login.html'
      // }

      function checkLogin(){
            // 检测登录
            $.ajax({
                  url: '/api/user/checkUserLogin',
                  type: 'get',
                  success: function(info) {
                        // console.log(location.href);
                        if(info.error) {
                              location.href = '/m/user/login.html?path=' + location.href;
                        }
                  }
            })
      }  


      // 获取地址参数
      function qs(prop) {
            // ?key=val&key1=val1&key2=val2
            var search = location.search.slice(1);

            // ['key=val', 'key1=val1', 'key2=val2']
            var params = search.split('&');

            var temp;
            for(var i=0; i<params.length; i++) {

                  // [key,val]
                  // [key1,val1]
                  // [key2,val2]
                  temp = params[i].split('=');

                  o[temp[0]] = temp[1];
            }

            return o[prop];

      }


      return {
            checkLogin: checkLogin,
            qs: qs
      }    
})