import Service from '@ember/service';

export default Service.extend({
	variables : {},

	init() {
		this._super( ...arguments );
		this.setupVariables();
	},

	setupVariables() {
		let variables = {
			images: {
				logoURL   : '../assets/pvy.svg',
			},

			socialIcons : [{
				title : 'instagram',
				link  : 'https://www.instagram.com/prasannavijayan'
			},
			{
				title : 'twitter',
				link  : 'https://twitter.com/prasannavijayan'
			},
			{
				title : 'linkedin',
				link  : 'https://www.linkedin.com/in/prasannavijayan'
			},
			{
				title : 'envelope',
				link  : 'mailto:prasannavijayan446@gmail.com'
			}],

			socialIconWidth : 40
		}

		this.set( 'variables', variables );
	}

});