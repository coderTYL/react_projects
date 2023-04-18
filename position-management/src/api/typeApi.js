import http from "../utils/http";

export const typeApi = (dimensionID)=>{
    return http('post', '/type', dimensionID);
}