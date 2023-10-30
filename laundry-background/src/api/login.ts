import https from "../utils/https";
import { AxiosPromise } from "axios";


export const loginApi = (userInfo: object)=>{
    return https('post', 'login', userInfo);
}