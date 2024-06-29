const techStackService = require('../services/teckstackServices')

async function addTechStackController(req, res, next){
    const {name} = req.body;
    const teckstackData = {name};
    try{
        const newTechStack = await techStackService.addTechStackService(teckstackData);
        res.status(200).json({message: "Tech Stack Added Successfully", newTechStack})
    }catch(error){
        next(error)
    }
}

async function getTechStackController(req, res, next){
    try {
        const getAllTechStack = await techStackService.getTechStackSerivce();
        res.status(201).json({message: "Tech Stack Fetched Successfully", getAllTechStack})
    } catch (error) {
        next(error)
    }
}

async function updateTechStackController(req, res, next){
    const {name} = req.body;
    const techstackData = {name};
    const techstackId = req.params.id; 
    try {
        const updateTechStack = await techStackService.updateTechStack(techstackId, techstackData);
        res.status(200).json({message: "Tech Stack Update Successfully", updateTechStack})
    } catch (error) {
        next(error)
    }
}

async function deleteTechStackController(req, res, next){
    const techstackId = req.params.id;
    try {
        const deleteTechStack = await techStackService.deleteTechStackService(techstackId)
        res.status(200).json({message: "Tech Stack Deleted Successfully", deleteTechStack})
    } catch (error) {
        next(error);
    }
}

module.exports = {addTechStackController, getTechStackController, updateTechStackController, deleteTechStackController};