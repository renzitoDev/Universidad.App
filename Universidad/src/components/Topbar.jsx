import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Topbar() {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  if (!user) return null; // No mostrar topbar si no hay usuario logueado

  // Prefijo según rol para rutas
  const prefix = user.rol.toLowerCase(); // admin, profesor, estudiante

  const handleLogout = () => {
    logoutUser(); // limpia el usuario activo
    navigate("/login"); // redirige al login
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* Sidebar Toggle (Topbar) */}
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>

      {/* Topbar Search */}
      <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-light border-0 small"
            placeholder="Buscar..."
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <i className="fas fa-search fa-sm"></i>
            </button>
          </div>
        </div>
      </form>

      {/* Topbar Navbar */}
      <ul className="navbar-nav ml-auto">
        {/* Nav Item - User Information */}
        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span
              id="nombre-usuario"
              className="mr-2 d-none d-lg-inline text-gray-600 small"
            >
              {user.firstName} {user.lastName}
            </span>
            <img
              className="img-profile rounded-circle"
              src="img/undraw_profile.svg"
              alt="Perfil"
            />
          </a>

          {/* Dropdown - User Information */}
          <div
            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown"
          >
            {/* Perfil según rol */}
            <Link className="dropdown-item" to={`/${prefix}/perfil`}>
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Perfil
            </Link>

            <div className="dropdown-divider"></div>

            {/* Cerrar sesión */}
            <button
              className="dropdown-item"
              onClick={handleLogout}
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Cerrar Sesión
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
}
