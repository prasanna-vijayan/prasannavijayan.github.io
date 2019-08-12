import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({

  router: service(),

  showFooter: computed( 'router.currentRoute.name', function() {
    if ( this.get( 'router' ).currentRoute.name === 'index' ) {
      return false;
    }
    return true;
  })

});