import Ember from 'ember';

export function answered(params) {
  var answers = params[0].get('answers.length');
  if (answers > 2) {
    return Ember.String.htmlSafe(
      '<span class="glyphicon glyphicon-ok-circle "><br>Answered</span>');
  } else if (answers > 0) {
    return Ember.String.htmlSafe(
      '<span class="glyphicon glyphicon-remove-circle "><br>Needs More<br>Answers</span>');
  }
  return Ember.String.htmlSafe(
    '<span class="glyphicon glyphicon-ban-circle "><br>Unanswered</span>');
}

export default Ember.Helper.helper(answered);
