const coverLetterModel = require("../model/cover.letter.model");
const resumeModel = require("../model/resume.model");

const mixArrays = (array1, array2) => {
    const maxLength = Math.max(array1.length, array2.length);
    return Array.from({ length: maxLength }).flatMap((_, i) => {
        const arr = [];
        if (i < array1.length) arr.push(array1[i]);
        if (i < array2.length) arr.push(array2[i]);
        return arr;
    });
}

const getAll = async (req , res) => {
    const {userId} = req.params;
    try {
        const resumes = await resumeModel.find({userId})
        const letters = await coverLetterModel.find({userId})
        const allData = await mixArrays(resumes , letters)

        return res.status(200).json(allData)
    } catch (error) {
        return res.status(404).json({
            msg : 'Failed to fetch all data'
        })
    }

}

module.exports = {
    getAll
}
