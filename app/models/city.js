// City model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  id: Number,
  province_id: Number,
  name: String
},{ collection: 'city' });

CitySchema.virtual('date')
  .get(() => this._id.getTimestamp());

mongoose.model('City', CitySchema);

