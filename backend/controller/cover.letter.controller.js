const coverLetterModel = require("../model/cover.letter.model");

const createLetter = async( req , res) => {
    const {name , userId} = req.body ;
    try {
        const result = await coverLetterModel.create({
            letterName : name,
            completePercentage : 0,
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

const addPersonalInfo = async (req , res) => {
    const {id} = req.params ; 
    const {name , profession , address , number , email , zipCode} = req.body;

    try {
        const result = await coverLetterModel.findById(id);

        result.name = name;
        result.profession = profession;
        result.address = address;
        result.number = number;
        result.email = email;
        result.zipCode = zipCode;
        result.state = state;
        result.city = city;
        result.completePercentage += 30
        
        result.save();
        
        return res.status(201).json({
            msg : 'Your personal information is added '
        })
    } catch (error) {
        return res.status(404).json(error)
    }
}

const addCompanyInfo = async (req , res) => {
    const {id} = req.params;
    const {position , companyName  ,streetAddress , companyCity  , companyState , companyZipCode} = req.body;

    try {
        const result = await coverLetterModel.findById(id);
        
        result.position = position ;
        result.companyName = companyName ;
        result.streetAddress = streetAddress ;
        result.companyCity = companyCity ;
        result.companyState = companyState ;
        result.companyZipCode = companyZipCode ;
        result.completePercentage += 30
        
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
        result.completePercentage += 40

        result.save();

        return res.status(201).json({
            msg : 'Letter description is added'
        })
    } catch (error) {
        return res.status(404).json(error)
    }
}

const getPercentage = async (req , res) => {
    const {id} = req.params;

    try {
        const result = await coverLetterModel.findById(id);
        return res.status(201).json(result.completePercentage)
    } catch (error) {
        return res.status(404).json(error)
    }
}

const getCoverLetterById = async (req , res) => {
    const {id} = req.params;
    
    try {
        const result = await coverLetterModel.findById(id)
        return res.status(200).json(result);
    } catch (error) {
        return res.status(404).json(error) 
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


module.exports = {
    createLetter,
    getLetter,
    deleteLetter,
    addPersonalInfo,
    addCompanyInfo,
    addLetterDes,
    getPercentage,
    getCoverLetterById
}