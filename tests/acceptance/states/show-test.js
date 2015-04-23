import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'ember-listings/tests/helpers/start-app';
import * as seedHelpers  from '../../helpers/seed-data';

var application, record;

const listings = [
  { name: '1234 washington street', lat: 37.77155447259242, lng: -122.40476095687674},
  { name: '1234 jefferson street', lat: 37.77155447159242, lng: -122.40476095687674}
];

module('Acceptance: StatesShow', {
  beforeEach: function(assert) {
    application = startApp();
    record = seedHelpers.createState(application);

    const done = assert.async();

    seedHelpers.createListings(
      record, ...listings
    )
      .then(done);
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /states/:id', function(assert) {
  visit(`/states/${record.get('id')}`);

  andThen(function() {
    let listingElements = find('.listingTile-details');

    assert.equal(listingElements.length, 2, 'has the correct number of listings');
  });
});
