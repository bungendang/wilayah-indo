// District model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DistrictSchema = new Schema({
  id: String,
  regency_id: String,
  name: String
}, { collection: 'district' });

DistrictSchema.virtual('date')
  .get(() => this._id.getTimestamp());

mongoose.model('District', DistrictSchema);

