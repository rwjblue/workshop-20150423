import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'ember-listings/tests/helpers/start-app';
import * as seedHelpers  from '../helpers/seed-data';

var application;

module('Acceptance: States', {
  beforeEach: function() {
    application = startApp();
    seedHelpers.createState(application);
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /states', function(assert) {
  visit('/states');

  andThen(() => {
    const states = find('.state');
    assert.ok(states.length > 0, 'has states rendered');
  });
});

test('clicking on a state we are transitioned into the states/show route', function(assert) {
  visit('/states');
  click('.state:first-child a');

  andThen(() => {
    assert.equal(currentRouteName(), 'states.show');
  });
});
