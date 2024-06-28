const courseService = require('../services/courseService');

// ADD COURSE
async function addCourseController(req, res, next){
    const {name} = req.body;
    const courseData = {name};
    try {
        const newCourseData = await courseService.addCourseService(courseData);
        res.status(200).json(newCourseData);
    } catch (error) {
        next(error);
    }
}

// GET COURSE
async function getAllCourseController( req, res, next){
     try {
        const getAllCourse = await courseService.getAllCourseService();
        res.status(200).json(getAllCourse);
     } catch (error) {
        next(error);
     }
}

// UPDATE COURSE
async function updateCourseController( req, res, next){
    try{
        const {name} = req.body;
        const courseId = req.params.id;
        const courseData = {name};
        const updateCourse = await courseService.updateCourseService(courseId, courseData);
        res.status(200).json(updateCourse);
    }catch(error){
        next(error);
    }
}

// DELETE COURSE
async function deleteCourseController(req, res, next){
    try{
        const courseId = req.params.id;
        const deleteCourse = await courseService.deleteCourseService(courseId);
        res.status(200).json({message: "Course Deleted SuccessFully", deleteCourse})
    }catch(error){
        next(error);
    }
}

module.exports = {addCourseController, getAllCourseController, updateCourseController, deleteCourseController};