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

  run(() => {
    store.createRecord('state', details);
  });
}
