import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | menu/deposit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:menu/deposit');
    assert.ok(route);
  });
});
