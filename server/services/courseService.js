const Course = require('../models/course');

//ADD COURSE 
async function addCourseService(courseData) {
    try {
        const newCourse = new Course(courseData);
        return await newCourse.save();
    } catch (error) {
        throw new Error('Error while adding course');
    }
}

//GET ALL COURSE
async function getAllCourseService(){
    try{
        const getAllCouser = await Course.find();
        return getAllCouser;
    }catch(error){
        throw new Error("Error While Fetching Course")
    }
}

// UPDATE COURSE
async function updateCourseService(courseId, courseData){
    try{
        const updateCourse = await Course.findByIdAndUpdate(
            courseId,
            courseData,
            {new: true}
        )
        if(!updateCourse){
            throw new Error("Course Not Found");
        }
        return updateCourse;
    }
    catch(error){
        throw new Error(`Error While Updating Course ${error.message}`)
    }
}

// DELETE COURSE
async function deleteCourseService(courseId){
    try{
        const deleteCourse = await Course.findByIdAndDelete(courseId);
        return deleteCourse;
    }catch(error){
        throw new Error(`Error while deleting course`)
    }

}

module.exports = {addCourseService, getAllCourseService, updateCourseService, deleteCourseService};