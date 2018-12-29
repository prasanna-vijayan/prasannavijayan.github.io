import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
	
  userData    : service(),

  sectionDetails : computed('userData', function() {
  	return this.get( 'userData.variables.sectionDetails' );
  })

});