import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Perfil from "./Pages/Perfil";
import Estadisticas from "./Pages/Estadisticas";
import Dash from "./layout/Dash";
import ListarEstudiante from "./Pages/ListarEstudiante";
import CrearEstudiante from "./Pages/CrearEstudiante";
import ListarHistorial from "./Pages/ListarHistorial";
import CrearHistorial from "./Pages/CrearHistorial";
import ListarFamiliar from "./Pages/ListarFamiliar";
import CrearFamiliar from "./Pages/CrearFamiliar";
import ListarNota from "./Pages/ListarNota";
import CrearNota from "./Pages/CrearNota";
import ListarAsistencia from "./Pages/ListarAsistencia";
import CrearAsistencia from "./Pages/CrearAsistencia";
import ListarBienestar from "./Pages/ListarBienestar";
import CrearBienestar from "./Pages/CrearBienestar";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  return (
    <Routes>
      {/*  Rutas públicas */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/*  ADMIN */}
      <Route element={<PrivateRoute allowedRoles={["Admin"]} />}>
        <Route element={<Dash />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/perfil" element={<Perfil />} />
          <Route path="/admin/estadisticas" element={<Estadisticas />} />
          <Route path="/admin/ListarEstudiante" element={<ListarEstudiante />} />
          <Route path="/admin/CrearEstudiante" element={<CrearEstudiante />} />
          <Route path="/admin/ListarHistorial" element={<ListarHistorial />} />
          <Route path="/admin/CrearHistorial" element={<CrearHistorial />} />
          <Route path="/admin/ListarFamiliar" element={<ListarFamiliar />} />
          <Route path="/admin/CrearFamiliar" element={<CrearFamiliar />} />
          <Route path="/admin/ListarNota" element={<ListarNota />} />
          <Route path="/admin/CrearNota" element={<CrearNota />} />
          <Route path="/admin/ListarAsistencia" element={<ListarAsistencia />} />
          <Route path="/admin/CrearAsistencia" element={<CrearAsistencia />} />
          <Route path="/admin/ListarBienestar" element={<ListarBienestar />} />
          <Route path="/admin/CrearBienestar" element={<CrearBienestar />} />
        </Route>
      </Route>

      {/*  PROFESOR */}
      <Route element={<PrivateRoute allowedRoles={["Profesor"]} />}>
        <Route element={<Dash />}>
          <Route path="/profesor/dashboard" element={<Dashboard />} />
          <Route path="/profesor/perfil" element={<Perfil />} />
          <Route path="/profesor/ListarNota" element={<ListarNota />} />
          <Route path="/profesor/CrearNota" element={<CrearNota />} />
          <Route path="/profesor/ListarAsistencia" element={<ListarAsistencia />} />
          <Route path="/profesor/CrearAsistencia" element={<CrearAsistencia />} />
        </Route>
      </Route>

      {/*  ESTUDIANTE */}
      <Route element={<PrivateRoute allowedRoles={["Estudiante"]} />}>
        <Route element={<Dash />}>
          <Route path="/estudiante/dashboard" element={<Dashboard />} />
          <Route path="/estudiante/perfil" element={<Perfil />} />
          <Route path="/estudiante/ListarHistorial" element={<ListarHistorial />} />
          <Route path="/estudiante/ListarNota" element={<ListarNota />} />
          <Route path="/estudiante/ListarAsistencia" element={<ListarAsistencia />} />
          <Route path="/estudiante/ListarBienestar" element={<ListarBienestar />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
