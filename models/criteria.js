//home of our product model

// bring in mongoose

// const mongoose = require("mongoose");

// const tradeSchema = new mongoose.Schema({
//     symbol: String, 
//     criteriaList: {
//         type: [{criteria: String, complete: Boolean}],
//         required: true,
//     },
//     enterTrade: {
//         type: Boolean,
//         default: false,
//     },
//     completeTrade: Boolean

// });
// const Trade = mongoose.model('Trade', tradeSchema)

// module.exports = Trade;

const mongoose = require("mongoose");

const criteriaSchema = new mongoose.Schema({

    criteria: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

// const criteria = mongoose.model('criteria', criteriaSchema)
const criteria = mongoose.model('criteria', criteriaSchema)

module.exports = criteria;

