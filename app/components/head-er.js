import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
	
  classNames  : [ 'd-flex flex-column' ],
  router      : service(),

  didInsertElement() {
		// When Adding multiple icons it will grow automatically
		let iconWidth = this.get("userData.variables.socialIcons").length * 40;
		this.$('.social-icons').css('width', `${iconWidth}px`);

		this.$('[data-toggle="tooltip"]').tooltip();
  },

  blog: computed( 'router.currentRoute.name', function() {
    let route = this.get( 'router' ).currentRoute.name;
    if ( ['index', 'examples'].includes( route ) ) {
      return false;
    }
    return true;
  }),

  socialIcons : computed('userData', function() {
		return this.get('userData.variables.socialIcons');
  }),

});