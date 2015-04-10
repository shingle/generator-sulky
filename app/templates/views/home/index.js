/**
 * SunEee
 * @date Created on 2015/4/10
 * @author YuHui(语晖)<yuhui@suneee.com>
 *
 */

'use strict';
var base = require('views/base/index');
var example = require('components/example/index');

module.exports = base.ractive.extend({
  components: {
    iexample: example
  }
});


