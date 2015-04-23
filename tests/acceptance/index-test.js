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

test('visiting /index', function(assert) {
  visit('/');

  andThen(function() {
    assert.ok(find('.state').length > 0, 'states were found');
    assert.equal(currentURL(), '/');
  });
});
