import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
  const navigate = useNavigate();
  const { registerUser } = useAuth();

  // 🟢 Estado para controlar el botón de carga
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    rol: "Estudiante", // Valor por defecto
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // 🔵 activamos loading mientras se registra

    console.log("📦 Datos del formulario:", formData);

    if (formData.password !== formData.repeatPassword) {
      alert("Las contraseñas no coinciden");
      setLoading(false);
      return;
    }

    const success = await registerUser(formData);

    if (success) {
      console.log("✅ Registro exitoso. Redirigiendo al login...");
      alert("Registro exitoso. Ahora puedes iniciar sesión.");
      navigate("/login");
    } else {
      console.error("❌ Error al registrarse");
      alert("Hubo un problema al registrarte. Intenta de nuevo.");
    }

    setLoading(false); // 🔵 desactivamos loading al final
  };

  return (
    <div className="container">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Crear una cuenta</h1>
                </div>

                <form className="user" onSubmit={handleSubmit}>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        placeholder="Nombre"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        placeholder="Apellido"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-user"
                      placeholder="Correo electrónico"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <select
                      className="form-control"
                      name="rol"
                      value={formData.rol}
                      onChange={handleChange}
                    >
                      <option value="Estudiante">Estudiante</option>
                      <option value="Profesor">Profesor</option>
                      <option value="Admin">Administrador</option>
                    </select>
                  </div>

                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        placeholder="Contraseña"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        placeholder="Repetir contraseña"
                        name="repeatPassword"
                        value={formData.repeatPassword}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-user btn-block"
                    disabled={loading} // 🟢 se desactiva mientras carga
                  >
                    {loading ? "Registrando..." : "Crear cuenta"}
                  </button>

                  <hr />
                  <Link to="/login" className="btn btn-google btn-user btn-block">
                    <i className="fab fa-google fa-fw"></i> Registrarse con Google
                  </Link>

                  <Link to="/" className="btn btn-facebook btn-user btn-block">
                    <i className="fab fa-facebook-f fa-fw"></i> Registrarse con Facebook
                  </Link>
                </form>

                <hr />
                <div className="text-center">
                  <Link className="small" to="/login">
                    ¿Ya tienes una cuenta? Inicia sesión
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
