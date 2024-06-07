
const resumeModel = require("../model/resume.model");

const createResume = async( req , res) => {
    const {name , userId} = req.body ;
    try {
        const result = await resumeModel.create({
            resumeName : name,
            completePercentage : 0,
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
        result.completePercentage = 20
        result.save()

        return res.status(201).json({
            msg : 'personal info is added!'
        })

    } catch (error) {
        return res.status(200).json(error) 
    }
}

const addWorkExperience = async (req , res) => {
    const {id} = req.params;

    try {
        const result = await resumeModel.findById(id)
        result.working.push(req.body);
        result.completePercentage = 40
        result.save()

        if(req.body) {
            return res.status(201).json({
                msg : 'personal info is added!'
            })
        }

    } catch (error) {
        return res.status(404).json(error)
    }
}

const addProject = async (req , res) => {
    const {id} = req.params ; 
    try {
        const result = await resumeModel.findById(id)
        result.projects.push(req.body);
        result.completePercentage = 60,
        result.save()

        if(req.body) {
            return res.status(201).json({
                msg : 'personal info is added!'
            })
        }
    } catch (error) {
        return res.status(404).json(error)
    }
}

const getProjectList = async (req , res) => {
    const {id} = req.params;

    try {
        const result = await resumeModel.findById(id)
        result.save()

        return res.status(201).json(result.projects)
    } catch (error) {
        return res.status(404).json(error)
    }
}

const deleteProject = async (req , res) => {
    const {id , projectName} = req.params;

    try {
        const result = await resumeModel.findByIdAndUpdate(
            id, 
            { $pull: { projects: { projectName: projectName } } },
            { new: true }
        )

        if(!result) return res.status(401).json({
            msg : 'Failed to delete'
        })

        return res.status(201).json({
            msg : 'project is deleted'
        })
    } catch (error) {
        return res.status(404).json(error)
    }
}

const addEducation = async (req , res) => {
    const {id} = req.params;
    try {
        const result = await resumeModel.findById(id);

        if(req.body){
            result.education.push(req.body);
            result.completePercentage = 80
            result.save()
            return res.status(201).json({
                msg : 'Eduction detail is added!'
            })
        }

        return res.status(401).json({
            msg : 'Failed to detail is added!'
        })

    } catch (error) {
        return res.status(404).json(error)
    }
}

const addSkills = async (req , res) => {
    const {id} = req.params;

    try {
        const result = await resumeModel.findById(id);

        if(req.body){
            result.skills = req.body;
            result.completePercentage = 100
            result.save()

            return res.status(201).json({
                msg : 'skills is added!'
            })
        }

        return res.status(401).json({
            msg : 'Failed to add skills!'
        })

    } catch (error) {
        return res.status(404).json(error)
    }
}

const getCompletePercentage = async (req , res) => {
    const {id} = req.params;

    try {
        const result = await resumeModel.findById(id);
        return res.status(201).json(result.completePercentage)
    } catch (error) {
        return res.status(404).json(error)
    }
}

const getAllResume = async (req , res) => {
    let {userId} = req.params;
    try {
        const result = await resumeModel.find({userId});
        return res.status(200).json(result)
    } catch (error) {
        return res.status(404).json(error)
    }
}

const getResumeById = async (req , res) => {
    const {id} = req.params;

    try {
        const result = await resumeModel.findById(id)

        return res.status(200).json(result)
    } catch (error) {
        return res.status(404).json(error)
    }
}


module.exports = {
    createResume,
    addPersonal,
    addWorkExperience,
    addProject,
    getProjectList,
    deleteProject,
    addEducation,
    addSkills,
    getCompletePercentage,
    getAllResume,
    getResumeById
}