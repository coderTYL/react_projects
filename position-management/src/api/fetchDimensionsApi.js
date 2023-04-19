import http from "../utils/http"

export const fetchDimensionsApi = ()=>{
    return http('get', '/fetchDimensions');
}