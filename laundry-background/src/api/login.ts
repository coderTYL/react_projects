import https from "../utils/https";
import User from "../POJO/User";

export const loginApi = (userInfo: User): Promise<unknown>=>{
    return https('post', 'login', userInfo);
}