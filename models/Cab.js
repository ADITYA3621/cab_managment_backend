const mongoose = require('mongoose');

const schema= new mongoose.Schema(
    {
        
        model: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now
        }

    }
)
module.exports = mongoose.model('Cab',schema)