

define(['jquery', 'template'], function($, template) {

      var search = location.search;

      var reg = /key=(.+)/;

      var key = reg.exec(search) && reg.exec(search)[1];



      $.ajax({
            url: '/api/product/queryProduct',
            type: 'get',
            data: {page: 1, pageSize: 2, proName: key},
            success: function(info) {
                  // console.log(info);
                  
                  var html = template('searchList', info);

                  $('#searchContainer').html(html);
                  

            }
      })      

})