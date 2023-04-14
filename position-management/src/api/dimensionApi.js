import http from "../utils/http"

export const dimensionApi = ()=>{
    return http('get', '/dimension');
}