import http from '../utils/http';

export const updateTypeApi = (type)=>{
    return http('post', '/updateType', type);
}