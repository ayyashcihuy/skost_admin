import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

type LoginType = {
    email: string;
    password: string;
}

interface ProviderProps {
    user:  string | null,
    token:  string,
    login (data: LoginType ): void,
    logout() :void,
}

const AuthContext = createContext<ProviderProps>({
    user: null,
    token: '',
    login: () => {},
    logout: () => {}
})

export const randomAlphaNumeric = (length: number) => {
    let s = '';
    Array.from({ length }).some(() => {
      s += Math.random().toString(36).slice(2);
      return s.length >= length;
    });
    return s.slice(0, length);
};

export const AuthProvider = ( { children }: { children: React.ReactNode } ) => {
    const storedInfo = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : null;
    const [ user, setUser ] = useState<string | null>(null);
    const [ token, setToken ] = useState<string>(storedInfo.token);
    const navigate = useNavigate()

    const login = (data: LoginType) => {
        // TODO: Implement login logic
        const t = randomAlphaNumeric(50)
        setTimeout(() => {
            const obj = { ...data,token: t }
            setUser(data.email)
            setToken(t)
            localStorage.setItem('user',JSON.stringify(obj))
            navigate('/')
        }, 1000);
    }

    const logout = () => {
        setUser(null)
        setToken('')
        localStorage.removeItem('user')
    }

    return (
        <AuthContext.Provider value={{user, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
}