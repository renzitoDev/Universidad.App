// src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ Importamos el contexto

const Login = () => {
  const { users, loginUser } = useAuth(); // ✅ Obtenemos la lista de usuarios y función del contexto
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      alert("⚠️ Por favor completa todos los campos.");
      return;
    }

    console.log("🔍 Intentando iniciar sesión con:", formData);

    // Verificamos si el usuario existe en los registrados (localStorage)
    const userFound = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!userFound) {
      alert("❌ Usuario o contraseña incorrectos.");
      return;
    }

    // Si existe, llamamos a loginUser (que ya guarda el usuario activo y redirige)
    loginUser(email, password);

    console.log("✅ Usuario autenticado:", userFound);
  };

  return (
    <div>
      <div className="container">
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          ¡Bienvenido de nuevo!
                        </h1>
                      </div>
                      <form className="user" onSubmit={handleLogin}>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-control form-control-user"
                            placeholder="Correo electrónico..."
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            className="form-control form-control-user"
                            placeholder="Contraseña"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="btnLogin btn btn-primary btn-user btn-block"
                        >
                          Iniciar sesión
                        </button>
                        <hr />
                        <a
                          href="#"
                          className="btn btn-google btn-user btn-block"
                        >
                          <i className="fab fa-google fa-fw"></i> Iniciar con Google
                        </a>
                        <a
                          href="#"
                          className="btn btn-facebook btn-user btn-block"
                        >
                          <i className="fab fa-facebook-f fa-fw"></i> Iniciar con Facebook
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">
                          ¿Olvidaste tu contraseña?
                        </a>
                      </div>
                      <div className="text-center">
                        <Link className="small" to="/register">
                          ¡Crea una cuenta!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Login;
