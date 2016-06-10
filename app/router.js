import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('full-question', {path: 'full-question/:question_id'});
});

export default Router;
