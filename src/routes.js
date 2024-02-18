import { useState, useContext } from 'react';
import { Routes, Route, NavLink, useNavigate, Navigate } from 'react-router-dom'
import { AuthProvider, AuthContext } from "./context/auth";

import Login from "./pages/Login";
import About from './pages/About';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Dicas from './pages/Dicas';
import UserProfile from './pages/UserProfile';
import UserProfileEdit from './pages/UserProfileEdit';
import CompanyProfile from './pages/CompanyProfile';
import CompanyProfileEdit from './pages/CompanyProfileEdit';
import Product from './pages/Product';
import ProductEdit from './pages/ProductEdit';
import Products from './pages/Products';
import Favorites from './pages/Favorites';
import PasswordRecovery from './pages/PasswordRecovery';
import PasswordReset from './pages/PasswordReset';

const Paths = () => {

  const token = localStorage.getItem("token");
  const userType = localStorage.getItem("userType");
  const navigate = useNavigate()

  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
    if(!authenticated) {
      return <NavLink to="/" />;
    }
    return children;
  }

  // 0: admin
  // 1: fornecedor
  // 2: user normal

  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={!!token ? <NavLink to="/"/> : <Login />} />
        <Route path="/cadastrar" element={!!token ? <NavLink to="/"/> : <SignUp />} />
        <Route path="/senha/recuperar" element={!!token ? <NavLink to="/"/> : <PasswordRecovery />} />
        <Route path="/senha/resetar" element={!!token ? <NavLink to="/"/> : <PasswordReset />} />

        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/dicas" element={<Dicas />} />


        <Route path="/produtos" element={(userType == 0 || userType == 1) ? <Products /> : <Navigate to="/" />} />
        <Route path="/produto/:id" element={<Product />} />
        <Route path="/produto/editar/:id" element={(userType == 0 || userType == 1) ? <ProductEdit /> : <Navigate to="/" />} />
        <Route path="/perfilempresa" element={(userType == 0 || userType == 1) ?<CompanyProfile /> : <Navigate to="/" />} />
        <Route path="/perfilempresa/editar" element={(userType == 0 || userType == 1) ? <CompanyProfileEdit /> : <Navigate to="/" />} />

        <Route path="/favoritos" element={(userType == 0 || userType == 2) ? <Favorites /> : <Navigate to="/" />} />
        <Route path="/perfil" element={(userType == 0 || userType == 2) ? <UserProfile /> : <Navigate to="/" />} />
        <Route path="/perfil/editar" element={(userType == 0 || userType == 2) ? <UserProfileEdit /> : <Navigate to="/" />} />

        <Route path="*" element={ !!token ? <Navigate to="/" /> : <Navigate to="/login" /> } />

      </Routes>
    </AuthProvider>
  );
}

export default Paths;