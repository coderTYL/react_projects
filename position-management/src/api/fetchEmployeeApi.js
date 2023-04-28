import http from "../utils/http"

export const fetchEmployeeApi = (employeeStr)=>{
    return http('post', '/fetchEmployee', employeeStr);
}