import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route( 'blog' );
  this.route( '404', { path: '/*path' } );

  /* Example Route */
  this.route( 'promise' );
  this.route( 'examples' );
});

export default Router;
