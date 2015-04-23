import Ember from 'ember';

const { computed } = Ember;
const get = Ember.get;

export default Ember.Component.extend({
  tagName           : 'section',
  classNames        : [ 'heroSection' ],
  attributeBindings : [ 'style' ],

  style: computed('backgroundImage', function() {
    const backgroundImage = get(this, 'backgroundImage');
    return new Ember.Handlebars.SafeString(`background-image: url('${backgroundImage}')`);
  })
});
