const mongoose = require('mongoose')

const boatSchema = new mongoose.Schema({
    productName: {
        type: String,
        trim: true,
      
    },
    productImages:[String],
    originalPrice:{
        type:Number
    },
    price:{
        type:Number,
    },
    color:{
        type:String,
        trim:true
    },
    rating:{
        type:String
    },
    noOfReviews:{
        type:Number
    },
    description:{
        type:String
    }
},{
   
    timeStamps:true
})
module.exports.boat = new mongoose.model("boat",boatSchema)