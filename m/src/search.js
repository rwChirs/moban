

define(['jquery', 'template'], function($, template) {

      
      $('search_btn').on('click',function() {

            // 获得搜索关键字
            var key = $('.search_input').val().trim();
            // console.log(key);
            if(key == '') return;

            // 否则将 key 记录在 localStorage 中
            // localStorage.setItem('key', JSON.stringify(['a', 'b']) );
            
            var keys = localStorage.getItem('keys') || [];
            if(typeof keys == 'string') {
                  keys = JSON.parse(keys);
            }
            // console.log(keys);
            
            keys.push(key);

            localStorage.setItem('keys', JSON.stringify(keys));


            // 向服务器发起请求
            location.href = '/m/searchList.html?key=' + key;

      })


      // 列出查询历史
      var res = localStorage.getItem('key') && JSON.parse(localStorage.getItem('keys'));

      // res && template();      
      if(res) {
            var html = template('storage', {storage: res});
            // console.log(html);
            $('#history').html(html);
      }


      $('#history').on('click', '.fa-close, .fa-trash', function(){

            if($(this).is('.icon_clear')){ //清空
                  res = [];
                  localStorage.setItem('keys', JSON.stringify(res));

                  $(this).parents('#history').empty();

                  return;
            }



            var index = $(this).attr('data-id');

            res.splice(index, 1);

            localStorage.setItem('keys', JSON.stringify(res));


            $(this).parent().fadeOut(function() {

                  if($(this).siblings().size() == 0 ){
                        return $(this).parents('#history').empty();
                  }

                  $(this).remove();
            })

      })

})