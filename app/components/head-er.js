import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	
  classNames  : [ 'd-flex header' ],

  didInsertElement() {
		// When Adding multiple icons it will grow automatically
		let iconWidth = this.get("userData.variables.socialIcons").length * 40;
		this.$('.social-icons').css('width', `${iconWidth}px`);

		this.$('[data-toggle="tooltip"]').tooltip('show');
  },

  socialIcons : computed('userData', function() {
		return this.get('userData.variables.socialIcons');
  }),

});