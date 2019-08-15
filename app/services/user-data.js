import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({

	i18n       : service(),
	variables  : undefined,
	currentCom : undefined,

	init() {
		this._super( ...arguments );
		this.setupVariables();
	},

	setupVariables() {
		let variables = {
			currentYear: ( new Date() ).getFullYear(),
			images: {
				logoURL   : '../assets/pvy.svg',
				dpURL     : '../assets/prasanna.jpeg',
			},

			socialIcons : [
			{
				title : 'twitter',
				alt : 'Twitter',
				link  : 'https://twitter.com/prasannavijayan',
				class  : 'icon-twitter'
			},
			{
				title : 'linkedin',
				alt : 'Linkedin',
				link  : 'https://www.linkedin.com/in/prasannavijayan',
				class  : 'icon-linkedin'
			},
			{
				title : 'envelope',
				alt : 'Mail',
				link  : 'mailto:prasannavijayan446@gmail.com',
				class  : 'icon-envelope'
			},
			{
				title : 'github',
				alt : 'Github',
				link  : 'mailto:prasannavijayan446@gmail.com',
				class  : 'icon-github'
			}],

			socialIconWidth : 40,

			sectionDetails: [{
				title: 'aboutme',
				description: 'aboutme_description',
				icon: 'terminal',
				bkg: 'bg-grey',
				tags : this.get( 'i18n' ).t('aboutme_tag').string.split(',')
			},{
				title: 'contribution',
				description: 'contribution_description',
				icon: 'github',
				bkg: 'bg-grey',
				tags: this.get( 'i18n' ).t('contribution_tag').string.split(',')
			},{
				title: 'download',
				description: 'download_description',
				icon: 'download',
				link: 'https://tinyurl.com/ybwf2brv',
				quote: this.get( 'i18n' ).t('quote').string
			}]
		}

		this.set( 'variables', variables );
	}

});