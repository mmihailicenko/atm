import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

  bankAccountNumber: function() {
    return 'testBankAccountNumber'
  },

  clientId: function() {
    return 'testClientId'
  },

  balance: function() {
    return 'testBalance'
  }

});
