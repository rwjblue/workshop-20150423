import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  name        : attr('string'),
  lat         : attr('number'),
  lng         : attr('number'),
  price       : attr('number'),
  description : attr('string'),
  image       : attr('string'),
  state       : belongsTo('state', { async: true }),
  city        : attr('string')
});
