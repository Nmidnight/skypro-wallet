import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { checkUserInfo } from "../../utils/checkUserInfo";

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => checkUserInfo());
    const token = user?.token;


    const updateUserInfo = (userData) => {
        const nextUser = userData?.user ?? null
        setUser(nextUser);
        if (nextUser) {
            localStorage.setItem("userInfo", JSON.stringify(userData.user));
            localStorage.setItem("token", nextUser.token);
        } else {
            localStorage.removeItem("userInfo");
            localStorage.removeItem("token");
        }
    };

    const authLogin = (loginData) => {
        updateUserInfo(loginData);
        return true;
    };

    const authLogout = () => {
        updateUserInfo();
        return true;
    };
    return (
        <AuthContext.Provider value={{ user, token, authLogin, authLogout, updateUserInfo }}>
            {children}
        </AuthContext.Provider>
    );


}