import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    console.log("Sorry about all my screwups.  I committed the wrong branch and then screwed up my code by testing around with it.  --Noah");
    return Ember.RSVP.hash({
      questions: this.store.findAll('question')
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
