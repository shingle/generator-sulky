/**
 * SunEee
 * @date Created on 2015/4/10
 * @author YuHui(语晖)<yuhui@suneee.com>
 *
 */

'use strict';

var Ractive = require('ractive');

var tpl = require('rv!./index');

module.exports = Ractive.extend({

  template: tpl,
  data: {
    hello: 'example components'
  }

});


