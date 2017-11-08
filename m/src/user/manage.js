

define(['jquery'], function($) {

      // 添加收货地址
      $('form').on('submit', function(){
            // 缓存DOM元素
            var _this = $(this);
            // 添加地址
            $.ajax({
                  url: '/api/address/addAddress',
                  type: 'post',
                  data: _this.serialize(),
                  success: function(info) {
                        // console.log(info);
                        if(info.success) {
                              location.href = '/m/user/address.html';
                        }
                        
                  }
            })

            return false;

      })





      

})