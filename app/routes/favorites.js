import Ember from 'ember';

export default Ember.Route.extend({
  favorites: Ember.inject.service(),

  model: function() {
    return this.get('favorites').getFavs();
  }
});
