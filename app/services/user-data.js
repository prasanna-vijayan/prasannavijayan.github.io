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
				dpURL     : '../assets/prasanna.jpeg',
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

			socialIconWidth : 40,

			sectionDetails: [{
				title: 'aboutme',
				description: 'aboutme_description',
				icon: 'terminal',
				bkg: 'bg-grey'
			}, {
				title: 'bragging',
				description: 'bragging_description',
				icon: 'rocket',
				bkg: 'bg-blue'
			},{
				title: 'download',
				description: 'download_description',
				icon: 'download',
				bkg: 'bg-grey'
			}]
		}

		this.set( 'variables', variables );
	}

});