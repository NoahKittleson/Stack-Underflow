import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://localhost:4000/steam/fuckthepolice';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log("Whole model in index.js: "+responseJSON);
      console.log(responseJSON.response.players[0]);
      return responseJSON;
    });
  },

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }

});
