import Ember from 'ember';

export default Ember.Route.extend({
  //showUpdateForm: false,  //fuck, I have put this into a component...
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    // update(question) {
    //   var params = {
    //     author: this.get("author") ? this.get("author") : "",
    //     text: this.get("text") ? this.get("text") : "",
    //     details: this.get("details") ? this.get("details") : ""
    //   };
    //   this.sendAction('update', question, params);
    //   this.set('author', '');
    //   this.set('text', '');
    //   this.set('details', '');
    //   this.set('showUpdateQuestion', false);
    // },

    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('full-question', question.id);
    },

    showUpdateForm() {
      this.set("showUpdateQuestion", true);
    }
  }
});
