import Ember from 'ember';

export default Ember.Route.extend({
  //showUpdateForm: false,  //fuck, I have put this into a component...
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('full-question', question.id);
    },
    updateQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('full-question', question.id);
    },
    updateAnswer(params, answer) {
      //console.log("answer: " + answer + " in routes/full-question.js");
      Object.keys(params).forEach(function(key) {
        if (params[key]!==undefined) {
          answer.set(key,params[key]);
        }
      });
      answer.save();
      this.transitionTo('full-question', answer.get('question.id'));
    }
  }
});
