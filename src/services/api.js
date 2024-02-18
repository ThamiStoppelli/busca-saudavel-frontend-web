import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
});
    
export const createAuth = async (email, password) => {
    return api.post("/login", { email, password });
};

export default api;