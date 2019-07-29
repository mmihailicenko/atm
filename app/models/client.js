import DS from 'ember-data';
import computed from '@ember/object';
const { Model } = DS;

export default Model.extend({
  fName: DS.attr('string'),
  lName: DS.attr('string'),
  address: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  registeredAt: DS.attr('date'),
  clientId: DS.attr('string'),
  bankAccounts: DS.hasMany('account'),
  fullName: computed('fName', 'lName', function () {
    return this.get('fName') + ' ' + this.get('lName');
  })
});
