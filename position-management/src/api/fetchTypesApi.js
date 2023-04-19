import http from "../utils/http";

export const fetchTypesApi = (dimensionID)=>{
    return http('post', '/fetchTypes', dimensionID);
}