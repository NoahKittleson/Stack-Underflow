import Ember from 'ember';

export default Ember.Component.extend({
  netVote: Ember.computed('answer.upvotes', 'answer.downvotes', function() {
    return this.get('answer.upvotes') - this.get('answer.downvotes');
  }),

  actions: {
    upvote(answer) {
      var params = {
        upvotes: answer.get('upvotes') + 1,
      };
      console.log("upvotes: " + params.upvotes + " in components/answer-tile.js");
      this.sendAction('upvote', params, answer);
    },
    downvote(answer) {
      var params = {
        downvotes: answer.get('downvotes') + 1,
      };
      console.log("downvotes: " + params.downvotes + " in components/answer-tile.js");
      this.sendAction('downvote', params, answer);
    }
  }
});
