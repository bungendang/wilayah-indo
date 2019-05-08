// Province model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProvinceSchema = new Schema({
  id: String,
  name: String
});

ProvinceSchema.virtual('date')
  .get(() => this._id.getTimestamp());

mongoose.model('Province', ProvinceSchema);

