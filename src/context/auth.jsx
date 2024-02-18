import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(localStorage.getItem("user"));
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [initialToken, setInitialToken] = useState(localStorage.getItem("token"))
    const [userType, setUserType] = useState(localStorage.getItem("userType"));
    const [config, setConfig] = useState({ headers: { Authorization: `Bearer ${token}` } })
    const [produtos, setProdutos] = useState([]);
    const [recoveryEmail, setRecoveryEmail] = useState(localStorage.getItem("recoveryEmail"));

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

        if (recoveredUser && token) {
            setUser(JSON.parse(recoveredUser));
            api.defaults.headers.Authorization = `Bearer ${token}`;
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        setConfig({ headers: { Authorization: `Bearer ${token}` } })
    }, [token])

    function HandleTimeout() {
        setLoading(false)
        clearTimeout();
    }

    async function HandleLogin(email, password) {
        if (email === '' && password === '') {
            toast.error("Preencha os dados para realizar login", { className: "error-toast" });
            setLoading(false);


        } else if (email === '' && !(password === '')) {
            toast.error("Insira o e-mail para realizar login", { className: "error-toast" });
            setLoading(false);

        } else if (password === '' && !(email === '')) {
            toast.error("Insira a senha para realizar login", { className: "error-toast" });
            setLoading(false);
        } else {
            setLoading(true);
            //verficiar se o timeout realmente esta funcionando
            setTimeout(HandleTimeout, 5000);

            await api.post("/auth/login", { email, password }).then(res => {
                console.log(res.data)
                localStorage.setItem("user", JSON.stringify(res.data.user));
                localStorage.setItem("id", res.data.user._id);
                localStorage.setItem("userType", res.data.user.user_type);
                setUser(res.data.user)
                localStorage.setItem("token", res.data.token);
                setInitialToken(localStorage.getItem("token"));
                setUserType(localStorage.getItem("userType"));
                setToken(res.data.token)
                api.defaults.headers.Authorization = `Bearer ${res.data.token}`;
            }).then(function (response) {
                setLoading(false);
                navigate("/");

            }).catch(function (error) {
                toast.error("Não foi possível efetuar login. Verifique se inseriu os dados corretos e tente novamente.");

                console.log(error)
                setLoading(false);
            })
    }
}

const logout = () => {
    try {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("userType");

        api.defaults.headers.Authorization = null;

        setUser();
        navigate("/");
        window.location.reload();
        console.log("ok ", user);
    } catch (err) {
        console.log(err)
    }
};

return (
    <AuthContext.Provider
        value={{ authenticated: !!user, user, loading, setLoading, logout, token, setToken, initialToken, userType, HandleLogin, config, setConfig, produtos, setProdutos, recoveryEmail, setRecoveryEmail }}
    >
        {children}
    </AuthContext.Provider>
)}