import https from "../utils/https";
import User from "../types/User";

export const loginApi = (userInfo: User): Promise<unknown>=>{
    return https('post', 'login', userInfo);
}