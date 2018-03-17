const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentDetailsSchema = new Schema({
  clientId: { type: Schema.Types.ObjectId, ref: 'client' },
  stripeCustomer: { type: String, default: '' },
  stripePlan: { type: String, default: '' },
  stripeSubscription: { type: String, default: '' },
},
{
    timestamps: true
});

const ModelClass = mongoose.model('paymentDetails', paymentDetailsSchema);

module.exports = ModelClass;
