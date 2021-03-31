const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Pincode = new Schema(
    {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        phone: {type: Number, required: true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('pincodes', Pincode)
