
import { api } from "./Api";



export async function signupUser({ login, name, password }) {
    const res = await api.post("/user", { login, name, password }, {
        headers: { "Content-Type": "" },
    });
    return res.data;
}


export async function signinUser(user) {
    const response = await api.post("/user/login", user, {
        headers: {
            "Content-Type": "",
        }
    })
    return response.data;
}