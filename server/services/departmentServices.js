const Department = require('../models/depratment');

//ADD DEPARTMENT SERVICE
async function addDepartmentService(departmentData){
    try {
        const newDepartment = new Department(departmentData);
        return await newDepartment.save();
    } catch (error) {
        throw new Error('Error while adding department');
    }
}

//GET DEPARTMENT SERVICE
async function getAllDepartmentService() {
    try {
        return await Department.find();
    } catch (error) {
        throw new Error('Error while fetching department');
    }
}

//DELETE DEPARTMENT SERVICE
async function deleteDepartmentService(departmentId){
    try {
       return await Department.findByIdAndDelete(departmentId);
    } catch (error) {
        throw new Error("Error while deleting department")
    }
}

//UPDATE DEPARTMENT SERIVCE
async function updateDepartmentService(departmentId, departmentData){
    try {
        const updateDepartment = await Department.findByIdAndUpdate(
            departmentId,
            departmentData,
            {new:true}
        )
        return updateDepartment;
    } catch (error) {
        throw new Error("Error while updating department")
    }
}

module.exports = {addDepartmentService,getAllDepartmentService, deleteDepartmentService, updateDepartmentService};