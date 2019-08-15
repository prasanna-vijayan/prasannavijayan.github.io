import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

  userData    : service( 'user-data' ),

  queryParams: {
    'component': {
      refreshModel: true
    }
  },

  beforeModel( transition ) {
    let component = transition.to.queryParams.component
    if ( component ) {
      this.set( 'userData.currentCom', component );
    } else {
      this.transtionTo( '404' );
    }
  },

  setupController( controller, model ) {
    this.controller.set( 'userData', this.userData );
  }
});
