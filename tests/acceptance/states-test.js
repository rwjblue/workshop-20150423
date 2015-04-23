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

  andThen(function() {
    assert.equal(currentURL(), '/states');
  });
});
