
const mongoose = require('mongoose');
const UrlSchema = new mongoose.Schema({
    ShortId: {
        type: String,
        required: true,
        unique: true
    },
    OriginalUrl: {
        type: String,
        required: true
    },
    visitHistory:[{
        timestamps: {type: Number}
    }],
    
},{timestamps: true})
const URL = mongoose.model("URL", UrlSchema);
module.exports = URL;