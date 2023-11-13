import https from "../utils/https";
import User from "../types/User";

export const getNumberOfUsersApi = (): Promise<unknown>=>{
    return https('get', 'numberOfUsers', {});
}