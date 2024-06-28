const designationSerivce = require('../services/designationSerivecs');

async function addDesignationController(req, res, next){
    const {name} = req.body;
    const designationData = {name};
    try {
        const newDesignation = await designationSerivce.addDesignationSerivce(designationData);
        res.status(200).json({message: "Designation Added Successfully",newDesignation});
    } catch (error) {
        next(error);
    }
}

async function getDesignationController(req, res, next){
    try {
        const getDesignation = await designationSerivce.getDesignationService();
        res.status(200).json({message: "Designation Fetched Successfully",getDesignation});
    } catch (error) {
        next(error)
    }
    
}

async function deleteDesignationController(req, res, next) {
    try{
        const designationId = req.params.id;
        const deleteDesignation = await designationSerivce.deleteDesignationService(designationId);
        res.status(201).json({message:"Designation Deleted Successfully",deleteDesignation})
    }catch(error){
        next(error);
    }
}

async function updateDesignationController(req, res, next){
    try{
        const {name} = req.body;
        const designationData = {name};
        const designationId = req.params.id;
        const updateDesignation = await designationSerivce.updateDesignationService(designationId, designationData);
        res.status(201).json({message: "Designation Updated Successfully", updateDesignation})
    }catch(error){
        next(error);
    }
}

module.exports = {addDesignationController, getDesignationController, deleteDesignationController, updateDesignationController};

