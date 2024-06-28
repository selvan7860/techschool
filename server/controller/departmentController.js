const departmentService = require('../services/departmentServices')


//ADD DEPARTMENT CONTROLLER
async function addDepartmentController(req, res, next) {
    try {
        const {name} = req.body;
        const departmentData = {name};
        const addDepartment = await departmentService.addDepartmentService(departmentData);
        res.status(200).json(addDepartment)
    } catch (error) {
        next(error)
    }
}
//GET DEPARTMENT CONTROLLER
async function getAllDepartmentController(req, res, next){
    try {
        const department = await departmentService.getAllDepartmentService()
        res.json(department)
    } catch (error) {
        next(error)
    }
}

//DELETE DEPARTMENT CONTROLLER
async function deleteDepartmentController(req, res, next){
    try {
        const departmentId = req.params.id;
        const deleteDepartment  = await departmentService.deleteDepartmentService(departmentId);
        res.json({message: "Department Delete Successfully", deleteDepartment}) 
    } catch (error) {
        next(error)
    }
}

//UPDATE DEPARTMENT CONTROLLER
async function updateDepartmentController(req, res, next){
    try {
        const departmentId = req.params.id;
        const {name} = req.body;
        const departmentData = {name};
        const updateDepartment = await departmentService.updateDepartmentService(departmentId, departmentData);
        res.json(updateDepartment)
    } catch (error) {
        next(error)
    }
}

module.exports = {addDepartmentController,getAllDepartmentController, deleteDepartmentController, updateDepartmentController};