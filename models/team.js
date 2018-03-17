const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: { type: String, default: '' },
  allowedMembers: { type: Number, default: 1 },
  numberOfMembers: { type: Number, default: 1 },
},
{
    timestamps: true
});

const ModelClass = mongoose.model('team', teamSchema);

module.exports = ModelClass;
