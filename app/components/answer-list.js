import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upvote(answer) {
      var params = {
        upvotes: answer.get('upvotes') + 1,
      };
      console.log("upvotes: " + params.upvotes + " in components/answer-list.js");
      console.log("answer: " + answer + " in components/answer-list.js");
      this.sendAction('upvote', params, answer);
    },
    downvote(answer) {
      var params = {
        downvotes: answer.get('downvotes') + 1,
      };
      console.log("downvotes: " + params.downvotes + " in components/answer-list.js");
      this.sendAction('downvote', params, answer);
    }
  }
});