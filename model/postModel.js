const mongoose = require('mongoose')
const moment = require('moment/moment')

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 15,
    
    },
    message: {
        type: String,
        required: true,
        maxLength:40
    },
    create_at:{
        type:Date,
        default: Date.now,
        get: function(createdAt){
            return moment(createdAt).format('MMMM Do YY, h:mm a')
        }
    }
})

const FEED = mongoose.model('feed', postSchema);
module.exports = FEED;