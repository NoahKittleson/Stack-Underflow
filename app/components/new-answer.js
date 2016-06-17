import Ember from 'ember';

export default Ember.Component.extend({
  show: false,
  actions: {
    save() {
      var params = {
        author: this.get('author') ? this.get('author') : "Anonymous",
        text: this.get('text') ? this.get('text') : "How do I use Stack Underflow?",
        question: this.get('question'),
        upvotes: 0,
        downvotes: 0
      };
      this.sendAction('save', params);
      this.set("show", false);
      this.set('author', '');
      this.set('text', '');
    },

    showForm() {
      this.set("show", true);
    }
  }
});
