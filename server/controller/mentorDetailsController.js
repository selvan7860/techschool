const mentorDetailService = require('../services/mentorDetailsService')

async function addMentorDetailController(req, res, next){
    const {project, project_manager, bandwidth} = req.body;
    const userId = req.user.id;
    const mentorData = {project, project_manager, bandwidth, userId};
    try{
        const mentorDetails = await mentorDetailService.addMentorDetailSerivce(mentorData);
        res.status(201).json(mentorDetails)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

async function updateMentorDetailController(req, res, next){
    const {project, project_manager, bandwidth} = req.body;
    const userId = req.user.id;
    const mentorData = {project, project_manager, bandwidth, userId}
    try{
        const updatedMentorDetails = await mentorDetailService.updateMentorDetailService(userId, mentorData);
        if(!updatedMentorDetails){
            res.status(500).json({message: error.message})
        }
        res.status(200).json(updatedMentorDetails)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {addMentorDetailController, updateMentorDetailController};