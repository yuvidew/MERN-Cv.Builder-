const express = require('express')
const {signUp, signIn } = require('../controller/authentication.controller')
const { createResume, addPersonal } = require('../controller/resume.controler')
const { createLetter } = require('../controller/cover.letter.controller')
const router = express.Router()

/** auth routers */

router.post('/post/signup' , signUp)
router.post('/post/signin' , signIn)

/** resume routers */

router.post('/post/create/resume' , createResume)
router.post('/post/create/resume/add-personal-info/:id' , addPersonal)

/** letter routers */

router.post('/post/create/cover-letter' , createLetter)


module.exports = router