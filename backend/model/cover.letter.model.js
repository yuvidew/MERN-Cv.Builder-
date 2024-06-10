const { default: mongoose } = require("mongoose");

const letterSchema = new mongoose.Schema({
    // this is for identify the letter 
    letterName : {
        type : String,
    },

    // add user personal info 
    name : {
        type : String,
    },
    address : {
        type : String,
    },
    number : {
        type : Number
    },
    email : {
        type : String,
    },
    city : {
        type : String,
    },
    state : {
        type : String,
    },
    zipCode : {
        type : Number,
    },

    // which position for the letter
    position : {
        type : String,
    },
    companyName : {
        type : String,
    },
    streetAddress : {
        type : String,
    },
    companyCity : {
        type : String,
    },
    companyState : {
        type : String,
    },
    companyZipCode : {
        type : Number
    },

    // application text 

    letterText : {
        type : String,
    },
    
    userId : {
        type : String
    },
    completePercentage : {
        type : Number
    }
})

module.exports = mongoose.model('cover-letters' , letterSchema)