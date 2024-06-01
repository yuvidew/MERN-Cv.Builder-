
const resumeModel = require("../model/resume.model");

const createResume = async( req , res) => {
    const {name , userId} = req.body ;
    try {
        const result = await resumeModel.create({
            resumeName : name,
            userId
        })

        if(result._id){
            return res.status(201).json({
                resumeId : result._id,
                resume : 'isResume'
            })
        }
    } catch (error) {
        return res.status(404).json({
            msg : 'Failed to create resume'
        })
    }
}

module.exports = {
    createResume
}