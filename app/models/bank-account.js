import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  accountNumber: DS.attr('string'),
  accountOwner: DS.belongsTo('client'),
  balance: DS.attr('string')
});
