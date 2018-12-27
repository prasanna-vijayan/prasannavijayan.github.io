import Controller from '@ember/controller';


export default Controller.extend({

	variables : {},

	init() {
		this._super( ...arguments );
		this.setupVariables();
	},

	setupVariables() {
		let variables = {
			images: {
				logoURL   : "../assets/pvy.svg"
			}
		}


		this.set( 'variables', variables );
	}


});