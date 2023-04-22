import http from "../utils/http";

export const fetchEventsApi = ()=>{
    return http('get', '/fetchEvents');
}