import http from "../utils/http"

export const fetchEmployeesApi = ()=>{
    return http('get', '/fetchEmployees');
}