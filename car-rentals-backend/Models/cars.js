const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// List of columns for Employee schema
let Car = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    img: {
        type: String
    }
}, {
    collection: 'cars'
});

module.exports = mongoose.model('Car', Car);