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
				link  : 'https://www.instagram.com/prasannavijayan',
				class  : 'icon-instagram'
			},
			{
				title : 'twitter',
				link  : 'https://twitter.com/prasannavijayan',
				class  : 'icon-twitter'
			},
			{
				title : 'linkedin',
				link  : 'https://www.linkedin.com/in/prasannavijayan',
				class  : 'icon-linkedin'
			},
			{
				title : 'envelope',
				link  : 'mailto:prasannavijayan446@gmail.com',
				class  : 'icon-envelope'
			},
			{
				title : 'github',
				link  : 'mailto:prasannavijayan446@gmail.com',
				class  : 'icon-github'
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
				link: 'https://tinyurl.com/ybwf2brv',
				bkg: 'bg-grey'
			}]
		}

		this.set( 'variables', variables );
	}

});