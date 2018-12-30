import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
	this.route('index', { path: "/index"});
	this.route('404', { path: '/*path' });
});

export default Router;
