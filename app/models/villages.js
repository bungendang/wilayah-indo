// Province model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VillageSchema = new Schema({
  id: Number,
  name: String,
  district_id: Number
}, { collection: 'villages' });;

VillageSchema.virtual('date')
  .get(() => this._id.getTimestamp());

mongoose.model('Villages', VillageSchema);

