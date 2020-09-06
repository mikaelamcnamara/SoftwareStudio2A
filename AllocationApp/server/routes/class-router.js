const express = require('express')

const ClassCtrl = require('../controllers/class-ctrl')

const router = express.Router();

router.post('/createClass', ClassCtrl.createCourse);
router.get('/getClass/:name', ClassCtrl.returnCourseByName);
router.get('/getAllClasses', ClassCtrl.returnAllCourses)

module.exports = router
