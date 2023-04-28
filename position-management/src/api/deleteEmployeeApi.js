import http from "../utils/http"

export const deleteEmployeeApi = (employeeIDArray)=>{
    return http('post', '/deleteEmployee', employeeIDArray);
}