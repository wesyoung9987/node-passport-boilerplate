const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'user' },
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  email: { type: String, default: '' },
  phone: { type: String, default: '' },
  type: { type: String, default: 'buyer' }, // buyer or seller
  address: {
    street: { type: String, default: '' },
    city: { type: String, default: '' },
    state: { type: String, default: '' },
    country: { type: String, default: 'US' },
    latitude: { type: Number, default: 0 },
    longitude: { type: Number, default: 0 },
  },
  source: { type: String, default: '' },
  pendingClose: { type: Date, default: Date.now },
  pendingSalePrice: { type: Number, default: 0 },
  pendingCGI: { type: Number, default: 0 },
  actualClose: { type: Date, default: Date.now },
  actualSalePrice: { type: Number, default: 0 },
  actualCGI: { type: Number, default: 0 },
},
{
    timestamps: true
});

const ModelClass = mongoose.model('client', clientSchema);

module.exports = ModelClass;
