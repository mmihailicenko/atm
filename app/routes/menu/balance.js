import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let record1 = this.store.createRecord('bank-account', {
      accountNumber: '123-456-789-000',
      balance: '1,350'
    });
    return [record1]
  }
});
