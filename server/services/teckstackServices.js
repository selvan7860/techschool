const TechStack = require('../models/techStack');

async function addTechStackService(techstackData){
    try{
        const newTechStack = new TechStack(techstackData);
        return newTechStack.save();
    }
    catch(error){
        throw new Error("Error While Adding The TechStack")
    }
}

async function getTechStackSerivce(){
    try{
        const getAllTeckStack = await TechStack.find();
        return getAllTeckStack
    }catch(error){
        throw new Error("Error While Fetching Stack")
    }
}

async function updateTechStack(techstackId, techStackData){
    try{
        const updateTechStack = await TechStack.findByIdAndUpdate(
            techstackId,
            techStackData,
            {new:true}
        )
        return updateTechStack
    }catch(error){
        throw new Error("Error While Updating Tech Stack")
    }
}

async function deleteTechStackService(techstackId){
    try {
        const deleteTechStack = await TechStack.findByIdAndDelete(techstackId)
        return deleteTechStack;
    } catch (error) {
        throw new Error("Error While Deleting Tech Stack")
    }
}

module.exports = {addTechStackService, getTechStackSerivce, updateTechStack, deleteTechStackService}