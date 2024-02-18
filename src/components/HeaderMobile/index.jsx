import { useState, useContext, useEffect } from 'react'

import { NavLink } from "react-router-dom";
import { AuthContext } from '../../context/auth';
import Logo from "./../../assets/images/logo-header.svg"
import LoginIcon from "./../../assets/icons/icon-access.svg"
import CloseButton from '../../assets/icons/close.svg'

import { ContainerGeral, Container, BtnFechar, Lista, ConfirmPopUp } from './styles'

function HeaderMobile({ state }) {

    const { token, user, initialToken, userType, logout } = useContext(AuthContext)
    const [confirmPopUp, setConfirmPopUp] = useState(false);
    const [showMenu, setShowMenu] = useState(false)

    //admin[0], nutri[1], fornecedor[2], consumidor[3]

    useEffect(() => {
    }, [userType])

    const handleLogout = () => {
        logout();
    }

    function closeMenu() {
        state(false)
    }

    return (
        <ContainerGeral>
            <Container>
                <Lista>
                    <BtnFechar src={CloseButton} alt="fechar" onClick={() => closeMenu()} />

                    <div className='content'>
                        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "link")} >
                            <h2>Home</h2>
                        </NavLink>
                        <NavLink to="/sobre" className={({ isActive }) => (isActive ? "active-link" : "link")} >
                            <h2>Sobre</h2>
                        </NavLink>
                    
                        {userType != undefined && userType != 1 ?
                            <NavLink to="/favoritos" className={({ isActive }) => (isActive ? "active-link" : "link")} >
                                <h2>Favoritos</h2>
                            </NavLink>
                            : null
                        }
                        {userType == 0 || userType == 1 ?
                            <NavLink to="/produtos" className={({ isActive }) => (isActive ? "active-link" : "link")} >
                                <h2>Produtos</h2>
                            </NavLink>
                            : null
                        }
                        {userType == 0 || userType == 1 ?
                            <NavLink to="/perfilempresa" className={({ isActive }) => (isActive ? "active-link" : "link")} >
                                <h2>Perfil</h2>
                            </NavLink>
                            : null
                        }
                        {userType == 0 || userType == 2 ?
                            <NavLink to="/perfil" className={({ isActive }) => (isActive ? "active-link" : "link")} >
                                <h2>Perfil</h2>
                            </NavLink>
                            : null
                        }
                    </div>

                    {userType ?
                        <div onClick={() => setConfirmPopUp(true)}>
                            <div className='login-button'>
                                <img src={LoginIcon}></img>
                                <h3>Sair</h3>
                            </div>
                        </div>
                        :
                        <NavLink to="/login" className={({ isActive }) => (isActive ? "access" : "link")}>
                            <div className='login-button'>
                                <img src={LoginIcon}></img>
                                <h3>Login</h3>
                            </div>
                        </NavLink>
                    }

                </Lista>
            </Container>

            {confirmPopUp ?
                <ConfirmPopUp>
                    <div className="confirm-popup">
                        <div className="textarea-popup">
                            <p>Sair do sistema</p>
                            <span>Deseja realmente sair do Busca Saudável?</span>
                        </div>
                        <div className="buttons-popup">
                            <button className="cancel-button" onClick={() => setConfirmPopUp(false)}>
                                Cancelar
                            </button>
                            <button className="exit-button" onClick={handleLogout}>
                                Sair
                            </button>
                        </div>
                    </div>
                </ConfirmPopUp>
                : null}
        </ContainerGeral>
    )
}

export default HeaderMobile