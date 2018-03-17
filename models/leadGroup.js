const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leadGroupSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'user' },
  utcDateString: { type: String, required: true },
  contacts: {
    total: { type: Number, default: 0 },
    other: { type: Number, default: 0 },
    doorsKnocked: { type: Number, default: 0 },
    internet: { type: Number, default: 0 },
    sphere: {
      total: { type: Number, default: 0 },
      other: { type: Number, default: 0 },
      phone: { type: Number, default: 0 },
      text: { type: Number, default: 0 },
      email: { type: Number, default: 0 },
      social: { type: Number, default: 0 },
    },
    forSaleByOwner: {
      total: { type: Number, default: 0 },
      other: { type: Number, default: 0 },
      phone: { type: Number, default: 0 },
      text: { type: Number, default: 0 },
      email: { type: Number, default: 0 },
      social: { type: Number, default: 0 },
    },
    expiredListing: {
      total: { type: Number, default: 0 },
      other: { type: Number, default: 0 },
      phone: { type: Number, default: 0 },
      text: { type: Number, default: 0 },
      email: { type: Number, default: 0 },
      social: { type: Number, default: 0 },
    },
    areaProsp: {
      total: { type: Number, default: 0 },
      other: { type: Number, default: 0 },
      phone: { type: Number, default: 0 },
      text: { type: Number, default: 0 },
      email: { type: Number, default: 0 },
      social: { type: Number, default: 0 },
    }
  },
  followUps: {
    total: { type: Number, default: 0 },
    other: { type: Number, default: 0 },
    doorsKnocked: { type: Number, default: 0 },
    internet: { type: Number, default: 0 },
    sphere: {
      total: { type: Number, default: 0 },
      other: { type: Number, default: 0 },
      phone: { type: Number, default: 0 },
      text: { type: Number, default: 0 },
      email: { type: Number, default: 0 },
      social: { type: Number, default: 0 },
    },
    forSaleByOwner: {
      total: { type: Number, default: 0 },
      other: { type: Number, default: 0 },
      phone: { type: Number, default: 0 },
      text: { type: Number, default: 0 },
      email: { type: Number, default: 0 },
      social: { type: Number, default: 0 },
    },
    expiredListing: {
      total: { type: Number, default: 0 },
      other: { type: Number, default: 0 },
      phone: { type: Number, default: 0 },
      text: { type: Number, default: 0 },
      email: { type: Number, default: 0 },
      social: { type: Number, default: 0 },
    },
    areaProsp: {
      total: { type: Number, default: 0 },
      other: { type: Number, default: 0 },
      phone: { type: Number, default: 0 },
      text: { type: Number, default: 0 },
      email: { type: Number, default: 0 },
      social: { type: Number, default: 0 },
    }
  },
  setAppts: {
    total: { type: Number, default: 0 },
    buyer: { type: Number, default: 0 },
    seller: { type: Number, default: 0 }
  },
  heldAppts: {
    total: { type: Number, default: 0 },
    buyer: { type: Number, default: 0 },
    seller: { type: Number, default: 0 }
  },
  contractsSigned: {
    total: { type: Number, default: 0 },
    buyer: { type: Number, default: 0 },
    seller: { type: Number, default: 0 }
  },
  pendingClose: {
    total: { type: Number, default: 0 },
    buyer: [{ type: Schema.Types.ObjectId, ref: 'client' }],
    seller: [{ type: Schema.Types.ObjectId, ref: 'client' }]
  },
  closed: {
    total: { type: Number, default: 0 },
    buyer: [{ type: Schema.Types.ObjectId, ref: 'client' }],
    seller: [{ type: Schema.Types.ObjectId, ref: 'client' }]
  }
},
{
    timestamps: true
});

const ModelClass = mongoose.model('leadGroup', leadGroupSchema);

module.exports = ModelClass;
