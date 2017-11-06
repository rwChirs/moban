
define(['jquery', 'template'], function ($, template) {

      var size = 2;
      // var page = 1;

      // console.log(location.search);
      
      // 利用正则匹配代码
      var reg = /\?[a-z]+=(\d+)/;
      // 处理请求参数
      var search = location.search || '';

      // console.log( reg.exec(search) );
      
      // 进行匹配查找
      var page = reg.exec(search) && reg.exec(search)[1];
      // console.log(page);
      
      // 设定默认页码
      page = page || 1;


    $.ajax({
        url: '/api/product/queryProductDetailList',
        type: 'get',
        data: {page: page, pageSize: size},
        success: function(info) {
            console.log(info);

            // 总的数据条数
            var total = info.total;
            // 总页数
            var pageLen = Math.ceil(total / size);

            // 调用模板引擎处理商品列表
            var html = template('tpl', info);

            // 调用模板引擎处理商品分页
            var pagehtml = template('page', {
                  pageLen: pageLen,
                  page: page
            })

            $('.goods').html(html);

            $('.pagination').html(pagehtml);

        }
    });

})