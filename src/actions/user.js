import { STORE_USER } from "./actionTypes";

export const storeUser = (user) => {
    return {
        type: STORE_USER,
        user : user
    }
}