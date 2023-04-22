import http from "../utils/http"

export const warnApi = ()=>{
    return http('get', '/warning');
}