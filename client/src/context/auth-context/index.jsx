import { initialSignInFormData,initialSignUpFormData } from "@/config";
import { createContext, useState } from "react";


export const AuthContext = createContext(null);


export default function AuthProvider({children}){

    const [signInFromData, setSignInFromData] = useState(initialSignInFormData)

    const [signUpFromData, setSignUpFromData] = useState(initialSignUpFormData)


    return <AuthContext.Provider value={{
        signInFromData,
        setSignInFromData,
        signUpFromData,
        setSignUpFromData,
    }}>
        {children}</AuthContext.Provider>
}