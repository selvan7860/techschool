const Designation = require('../models/designation')

async function addDesignationSerivce(designationData){
    try{
        const newDesignation = new Designation(designationData);
        return await newDesignation.save();
    }catch(error){
        throw new Error(`Error while adding designation ${error.message}`);
    }
}

async function getDesignationService(){
    try{
        const getDesignation = await Designation.find();
        return getDesignation;
    }
    catch(error){
        throw new Error("Error While Fetching Designation");
    }
}

async function deleteDesignationService(designationId){
    try{
        const deleteDesigantion = await Designation.findByIdAndDelete(designationId)
        return deleteDesigantion;
    }catch(error){
        throw new Error("Error while deleting designation");
    }
}

async function updateDesignationService(designationId, designationData){
    try {
        const updateDesignation = await Designation.findByIdAndUpdate(
            designationId,
            designationData,
            {new:true}
        )
        if(!updateDesignation){
            throw new Error("Designation Not Found");
        }
        return updateDesignation;
    } catch (error) {
        throw new Error(`Error while updating designation ${error.message}`)
    }
}

module.exports = {addDesignationSerivce, getDesignationService, deleteDesignationService, updateDesignationService};