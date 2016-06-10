import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    save() {
      var params = {
        author: this.get('author') ? this.get('author') : "Anonymous",
        text: this.get('text') ? this.get('text') : "How do I use Stack Underflow?",
        details: this.get('details') ? this.get('details') : "No details"
      };
      this.sendAction('save', params);
      this.set('details', '');
      this.set('author', '');
      this.set('text', '');
    }
  },

  showForm() {
    this.set(this.showForm, true);
  }
});
