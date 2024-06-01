const { default: mongoose } = require("mongoose");

const resumeSchema = new mongoose.Schema({
    resumeName : {
        type : String
    },
    name : {
        type : String
    },
    email : {
        type : String
    },
    number : {
        type : Number
    },
    linkedin : {
        type : String
    },
    city : {
        type : String
    },
    state : {
        type : String
    },
    pincode : {
        type : Number
    },
    objective : {
        type : String
    },
    working : [
        {
            organization : String,
            jobDurationForm : String,
            jobDurationTo : String,
            jobExperience : [String],
        }
    ],
    education : [
        {
            degreeCourse : String,
            instituteCollage : String,
            year : String,
            city : String,
            state : String,
        }
    ],
    projects : [
        {
            projectName : String,
            projectDetails : [String],
            projectStart : String,
            projectEnd : String,
        }
    ],
    skills : [String],
    userId : {
        type : String
    }
})

module.exports = mongoose.model('resumes' , resumeSchema)