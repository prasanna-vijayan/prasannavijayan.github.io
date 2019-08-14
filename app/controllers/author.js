import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({

  userData  : service(),

  getLength : computed( 'model.posts', function() {
    return this.get('model.posts').filter( f => f.status ).length;
  } )

});