import Ember from 'ember';

const { run } = Ember;
const defaultState = {
  name: 'massachusetts',
  abbreviation: 'ma'
};

function getStore(app) {
  return app.__container__.lookup('store:main');
}

export function createState(app, details = defaultState) {
  const store = getStore(app);

  let record;

  run(() => {
    record = store.createRecord('state', details);
  });

  return record;
}

export function createListings(state, ...listingsData) {
  return state.get('listings')
    .then((relation) => {
      return listingsData.map((listingData) => {
        return relation.createRecord(listingData);
      });
    });
}
