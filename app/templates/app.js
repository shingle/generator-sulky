/**
 * SunEee
 * @date Created on 2015/4/10
 * @author YuHui(语晖)<yuhui@suneee.com>
 *
 */

'use strict';
require(['lib/page.js/page', 'views/home/index'], function (page, Home) {


  //page.base('/#!');
  page('/', index);


  page('*', function () {
    console.log('Not Found');
  });


  page({
    hashbang: true
  });

  function index(ctx) {
    var Home = require('views/home/index');

    Home();


  }


});
