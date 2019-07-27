import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('menu', function() {
    this.route('withdraw');
    this.route('deposit');
    this.route('balance');
  });
});

export default Router;
