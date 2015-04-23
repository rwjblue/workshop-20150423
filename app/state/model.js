import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  name            : attr('string'),
  abbreviation    : attr('string'),
  backgroundImage : attr('string'),
  listings        : hasMany('listing', { async: true }),
  lat             : attr('number'),
  lng             : attr('number')
});
