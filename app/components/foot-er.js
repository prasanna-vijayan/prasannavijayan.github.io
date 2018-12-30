import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
	
  classNames  : [ 'd-flex footer bg-black' ],

  userData    : service()

});