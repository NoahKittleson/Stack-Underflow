import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],

  add(question) {
    this.get('favorites').pushObject(question);
    console.log("added " +  question.id + " to favorites");
  }
});
