
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

const addPersonal = async (req , res) => {
    const {id} = req.params;
    const {name , email , number , linkedin , city , state , objective} = req.body;

    try {
        const result = await resumeModel.findById(id);
        result.name = name;
        result.email = email;
        result.number = number;
        result.linkedin = linkedin;
        result.city = city;
        result.state = state;
        result.objective = objective;

        result.save()

        return res.status(201).json({
            msg : 'personal info is added!'
        })

    } catch (error) {
        return res.status(200).json(error) 
    }
}

module.exports = {
    createResume,
    addPersonal
}