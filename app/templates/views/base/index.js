/**
 * Created by bang on 15/4/9.
 */
module.exports = {
  ractive: Ractive.extend({

    el: '#container',
    template: '#content-view',
    data: {
      hello: 'Base View'
    }

  })
};
