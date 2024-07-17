const Mentor = require('../models/mentor');

async function addMentorDetailSerivce(mentorData){
    try{
        if(mentorData.bandwidth && !/^\d{2}:\d{2}:\d{2}$/.test(mentorData.bandwidth)){
            throw new Error('Bandwidth must be in HH:MM:SS format');
        }
        const newMentorDetails = new Mentor(mentorData)
        return await newMentorDetails.save()
    }catch(error){
        throw new Error(`Error while adding details: ${error.message}`)
    }
}

// Update Mentor Data
async function updateMentorDetailService(userId, mentorData){
    try{
        if(mentorData.bandwidth && !/^\d{2}:\d{2}:\d{2}$/.test(mentorData.bandwidth)){
            throw new Error('Bandwidth must be in HH:MM:SS format');
        }
        const updateMentorDetails = await Mentor.findOneAndUpdate(
            {userId: userId},
            {$set: mentorData},
            {new:true}
        )
        console.log(updateMentorDetails)
        if(!updateMentorDetails){
            throw new Error('Mentor details not found');
        }
        return updateMentorDetails
    }
    catch(error){
        throw new Error(`Error while adding details: ${error.message}`);
    }
}

module.exports = {addMentorDetailSerivce, updateMentorDetailService};