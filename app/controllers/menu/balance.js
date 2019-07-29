import Controller from '@ember/controller';

export default Controller.extend({
  open: function () {
    return this.store.find('account', {bankAccountNumber: '123'});
  }.property()
});
