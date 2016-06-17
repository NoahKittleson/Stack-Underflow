import Ember from 'ember';

export default Ember.Component.extend({
  sortedList: Ember.computed.sort('answers', 'sortBy'),
  sortBy: ['total:desc'],

  actions: {
    upvote(params, answer) {
      this.sendAction('upvote', params, answer);
    },
    downvote(params, answer) {
      this.sendAction('downvote', params, answer);
    }
  }
});
