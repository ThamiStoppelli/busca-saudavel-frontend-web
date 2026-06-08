import axios from "axios";
import mockApi, { createAuth as createMockAuth } from "./mockApi";

const shouldUseMockApi = process.env.REACT_APP_USE_MOCK_API !== "false";

const backendApi = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8080",
});

const api = shouldUseMockApi ? mockApi : backendApi;

export const createAuth = async (email, password) => {
  if (shouldUseMockApi) return createMockAuth(email, password);
  return backendApi.post("/login", { email, password });
};

export default api;

/*
  endpoints:
  api.get("/product/search?search=granola")
  api.get("/product/get/:id")
  api.post("/login", { email, password })
  api.post("/user/register", payload)
  api.post("/product/create/", formData)
  api.put("/product/update/:id", formData)
  api.delete("/product/delete/:id")
  
  --- API ---
  import axios from "axios";

  const api = axios.create({
      baseURL: "http://localhost:8080",
  });
      
  export const createAuth = async (email, password) => {
      return api.post("/login", { email, password });
  };
  
  export default api;
*/
