const express = require('express')
const {signUp, signIn } = require('../controller/authentication.controller')
const { createResume, addPersonal, addWorkExperience, addProject, getProjectList, deleteProject, addEducation, addSkills, getCompletePercentage, getAllResume, getResumeById } = require('../controller/resume.controler')
const { createLetter, getLetter, deleteLetter , addPersonalInfo, addLetterDes, getPercentage, getCoverLetterById, addCompanyInfo } = require('../controller/cover.letter.controller')
const { getAll } = require('../controller/all.controler')
const router = express.Router()

/** auth routers */

router.post('/post/signup' , signUp)
router.post('/post/signin' , signIn)

/** resume routers */

router.post('/post/create/resume' , createResume)
router.post('/post/create/resume/add-personal-info/:id' , addPersonal)
router.post('/post/create/resume/add-work-experience/:id' , addWorkExperience)
router.post('/post/create/resume/add-projects/:id' , addProject)
router.get('/get/create/resume/get-projects/:id' , getProjectList)
router.delete('/delete/resume/delete-project/:id/:projectName' , deleteProject)
router.post('/post/create/resume/add-eduction-detail/:id' , addEducation)
router.post('/post/create/resume/add-skills/:id' , addSkills)
router.get('/get/resume/percentage/:id' , getCompletePercentage)
router.get('/get/resumes/:userId' , getAllResume)
router.get('/get/resume/:id' , getResumeById)


/** letter routers */

router.post('/post/create/cover-letter' , createLetter)
router.get('/get/all/cover-letter/:userId' , getLetter)
router.delete('/delete/cover-letter/:id' , deleteLetter)
router.post('/post/cover-letter/personal-info/:id' , addPersonalInfo)
router.post('/post/cover-letter/employ-info/:id' , addCompanyInfo)
router.post('/post/cover-letter/letter-description/:id' , addLetterDes)
router.get('/get/cover-letter/percentage/:id' , getPercentage)
router.get('/get/cover-letter/:id' , getCoverLetterById)


/** all data */

router.get('/get/all/:userId' ,getAll)


module.exports = router