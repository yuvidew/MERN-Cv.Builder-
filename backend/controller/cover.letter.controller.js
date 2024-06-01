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

module.exports = {
    createLetter
}