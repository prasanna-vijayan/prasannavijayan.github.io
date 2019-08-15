import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({

  router: service(),

  showFooter: computed( 'router.currentRoute.name', function() {
    let route = this.get( 'router' ).currentRoute.name;
    if ( ['index', 'examples'].includes( route ) ) {
      return false;
    }
    return true;
  })

});