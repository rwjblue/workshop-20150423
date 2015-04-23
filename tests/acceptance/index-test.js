import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'ember-listings/tests/helpers/start-app';

var application;

module('Acceptance: Index', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting / redirects to /states', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/states');
  });
});
