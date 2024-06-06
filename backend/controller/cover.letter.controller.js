const coverLetterModel = require("../model/cover.letter.model");

const createLetter = async( req , res) => {
    const {name , userId} = req.body ;
    try {
        const result = await coverLetterModel.create({
            letterName : name,
            userId
        })

        if(result._id){
            return res.status(201).json({
                letterId : result._id,
                letter : 'isLetter'
            })
        }
    } catch (error) {
        return res.status(404).json({
            msg : 'Failed to create resume'
        })
    }
}

const getLetter = async (req , res) => {
    const {userId} = req.params;
    try {
        const result = await coverLetterModel.find({userId});

        return res.status(200).json(result)
    } catch (error) {
        return res.status(404).json({
            msg : 'Failed to fetch cover letter'
        })
    }
}

const deleteLetter = async (req , res) => {
    const {id} = req.params;

    try {
        const result = await coverLetterModel.findOneAndDelete(id);

        if(result){
            return res.status(201).json({
                msg : `Cover Letter successfully delete`
            })
        }
    } catch (error) {
        return res.status(404).json({
            msg : 'Failed to delete cover letter'
        })
    }
}

const addPersonalInfo = async (req , res) => {
    const {id} = req.params ; 
    const {name , profession , address , number , email} = req.body;

    try {
        const result = await coverLetterModel.findById(id);

        result.name = name;
        result.profession = profession;
        result.address = address;
        result.number = number;
        result.email = email;
        result.completePercentage = 30
        
        result.save();
        
        return res.status(201).json({
            msg : 'Your personal information is added '
        })
    } catch (error) {
        return res.status(404).json(error)
    }
}

const addEmployInfo = async (req , res) => {
    const {id} = req.params;
    const {recipient , companyName  ,streetAddress , city  , state} = req.body;

    try {
        const result = await coverLetterModel.findById(id);
        
        result.recipient = recipient ;
        result.companyName = companyName ;
        result.streetAddress = streetAddress ;
        result.city = city ;
        result.state = state ;
        result.completePercentage = 30
        
        result.save();

        return res.status(201).json({
            msg : 'Employ information is added'
        })
    } catch (error) {
        return res.status(404).json(error)
    }
}

const addLetterDes = async (req , res) => {
    const {id} = req.params;
    const {letterText} = req.body;

    try {
        const result = await coverLetterModel.findById(id);
        result.letterText = letterText;
        result.completePercentage = 40

        result.save();

        return res.status(201).json({
            msg : 'Letter description is added'
        })
    } catch (error) {
        return res.status(404).json(error)
    }
}

const getPercentage = async (req , res) => {
    const {id} = req.body;

    try {
        const result = await resumeModel.findById(id);
        return res.status(201).json(result.completePercentage)
    } catch (error) {
        return res.status(404).json(error)
    }
}

module.exports = {
    createLetter,
    getLetter,
    deleteLetter,
    addPersonalInfo,
    addEmployInfo,
    addLetterDes,
    getPercentage
}