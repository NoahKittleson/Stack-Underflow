import Ember from 'ember';

export default Ember.Component.extend({
  show: false,
  actions: {
    update(question) {
      var params = {
        author: this.get("author") ? this.get("author") : undefined,
        text: this.get("text") ? this.get("text") : undefined,
        details: this.get("details") ? this.get("details") : undefined
      };
      this.sendAction('update', question, params);
      this.set('author', '');
      this.set('text', '');
      this.set('details', '');
      this.set('showUpdateQuestion', false);
    },
    showUpdateForm() {
      this.set("show", true);
    }
  }

});
