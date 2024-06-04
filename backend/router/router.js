const express = require('express')
const {signUp, signIn } = require('../controller/authentication.controller')
const { createResume, addPersonal, addWorkExperience, addProject, getProjectList, deleteProject, addEducation, addSkills, getCompletePercentage } = require('../controller/resume.controler')
const { createLetter } = require('../controller/cover.letter.controller')
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


/** letter routers */

router.post('/post/create/cover-letter' , createLetter)


module.exports = router