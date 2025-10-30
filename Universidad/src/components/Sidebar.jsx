import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const { user } = useAuth();
  if (!user) return null; // Si no hay usuario logueado, no renderiza el sidebar

  // Prefijo según rol
  const prefix = user.rol.toLowerCase(); // admin, profesor, estudiante

  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <Link className="sidebar-brand d-flex align-items-center justify-content-center" to={`/${prefix}/dashboard`}>
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Sistema Educativo</div>
      </Link>

      <hr className="sidebar-divider my-0" />

      {/* Dashboard */}
      <li className="nav-item">
        <Link className="nav-link" to={`/${prefix}/dashboard`}>
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Módulos Educativos</div>

      {/* Módulo Ingreso y Registro */}
      {user.rol === "Admin" && (
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseIngreso"
            aria-expanded="true"
            aria-controls="collapseIngreso"
          >
            <i className="fas fa-fw fa-user-plus"></i>
            <span>Ingreso y Registro</span>
          </a>
          <div
            id="collapseIngreso"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Acciones:</h6>
              <Link className="collapse-item" to={`/${prefix}/ListarEstudiante`}>Ver Estudiantes</Link>
              <Link className="collapse-item" to={`/${prefix}/CrearEstudiante`}>Crear Estudiante</Link>
            </div>
          </div>
        </li>
      )}

      {/* Historial */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseHistorial"
          aria-expanded="true"
          aria-controls="collapseHistorial"
        >
          <i className="fas fa-fw fa-history"></i>
          <span>Historial Estudiantil</span>
        </a>
        <div
          id="collapseHistorial"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Acciones:</h6>
            <Link className="collapse-item" to={`/${prefix}/ListarHistorial`}>Ver Historial</Link>
            {user.rol === "Admin" && <Link className="collapse-item" to={`/${prefix}/CrearHistorial`}>Crear Registro</Link>}
          </div>
        </div>
      </li>

      {/* Módulo Familiar */}
      {user.rol === "Admin" && (
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseFamiliar"
            aria-expanded="true"
            aria-controls="collapseFamiliar"
          >
            <i className="fas fa-fw fa-users"></i>
            <span>Módulo Familiar</span>
          </a>
          <div
            id="collapseFamiliar"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Acciones:</h6>
              <Link className="collapse-item" to={`/${prefix}/ListarFamiliar`}>Ver Familiares</Link>
              <Link className="collapse-item" to={`/${prefix}/CrearFamiliar`}>Crear Familiar</Link>
            </div>
          </div>
        </li>
      )}

      {/* Seguimiento de Notas */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseNotas"
          aria-expanded="true"
          aria-controls="collapseNotas"
        >
          <i className="fas fa-fw fa-clipboard-list"></i>
          <span>Notas</span>
        </a>
        <div
          id="collapseNotas"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Acciones:</h6>
            <Link className="collapse-item" to={`/${prefix}/ListarNota`}>Ver Notas</Link>
            {(user.rol === "Admin" || user.rol === "Profesor") && (
              <Link className="collapse-item" to={`/${prefix}/CrearNota`}>Registrar Nota</Link>
            )}
          </div>
        </div>
      </li>

      {/* Asistencias */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseAsistencias"
          aria-expanded="true"
          aria-controls="collapseAsistencias"
        >
          <i className="fas fa-fw fa-calendar-check"></i>
          <span>Asistencias</span>
        </a>
        <div
          id="collapseAsistencias"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Acciones:</h6>
            <Link className="collapse-item" to={`/${prefix}/ListarAsistencia`}>Ver Asistencias</Link>
            {(user.rol === "Admin" || user.rol === "Profesor") && (
              <Link className="collapse-item" to={`/${prefix}/CrearAsistencia`}>Registrar Asistencia</Link>
            )}
          </div>
        </div>
      </li>

      {/* Bienestar Estudiantil */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseBienestar"
          aria-expanded="true"
          aria-controls="collapseBienestar"
        >
          <i className="fas fa-fw fa-heart"></i>
          <span>Bienestar</span>
        </a>
        <div
          id="collapseBienestar"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Acciones:</h6>
            <Link className="collapse-item" to={`/${prefix}/ListarBienestar`}>Ver Registros</Link>
            {user.rol === "Admin" && (
              <Link className="collapse-item" to={`/${prefix}/CrearBienestar`}>Crear Registro</Link>
            )}
          </div>
        </div>
      </li>

      {/* Estadísticas */}
      {user.rol === "Admin" && (
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseEstadisticas"
            aria-expanded="true"
            aria-controls="collapseEstadisticas"
          >
            <i className="fas fa-fw fa-chart-bar"></i>
            <span>Estadísticas</span>
          </a>
          <div
            id="collapseEstadisticas"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Acciones:</h6>
              <Link className="collapse-item" to={`/${prefix}/Estadisticas`}>Ver Reportes</Link>
            </div>
          </div>
        </li>
      )}

      <hr className="sidebar-divider" />
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
}

export default Sidebar;
