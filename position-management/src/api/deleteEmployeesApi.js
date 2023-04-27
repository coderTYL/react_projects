import http from "../utils/http"

export const deleteEmployeesApi = (employeeIDArray)=>{
    return http('post', '/deleteEmployees', employeeIDArray);
}