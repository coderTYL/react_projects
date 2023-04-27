import http from "../utils/http"

export const addEmployeeApi = (employee)=>{
    return http('post', '/addEmployee', employee);
}