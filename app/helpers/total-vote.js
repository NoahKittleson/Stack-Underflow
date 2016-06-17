import Ember from 'ember';

export function totalVote(params) {
  var answer = params[0];
  return answer.get('upvotes') - answer.get('downvotes');
}

export default Ember.Helper.helper(totalVote);
