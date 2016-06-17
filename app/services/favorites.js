import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],

  getFavs() {
    return this.get('favorites');
  },

  add(question) {
    this.get('favorites').pushObject(question);
    console.log("added " +  question.id + " to favorites");
    console.log("there are now " + this.get('favorites').length + " items in favorites");
  }
});
