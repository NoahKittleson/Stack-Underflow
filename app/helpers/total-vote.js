import Ember from 'ember';

export function totalVote(up, down) {
  console.log(down);
  return up - down;
  // console.log(answer.get('upvotes'));
  // return answer.get('upvotes') - answer.get('downvotes');
}

export default Ember.Helper.helper(totalVote);
