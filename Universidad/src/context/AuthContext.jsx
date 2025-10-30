import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  //  Cargar usuarios registrados desde localStorage
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  //  Cargar usuario activo
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("activeUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  //  Registrar usuario
  const registerUser = (newUser) => {
    const exists = users.some((u) => u.email === newUser.email);
    if (exists) {
      alert("⚠️ El correo ya está registrado.");
      return false;
    }

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));


    return true;
  };

  //  Iniciar sesión
  const loginUser = (email, password) => {
    const userFound = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!userFound) {
      alert("❌ Usuario o contraseña incorrectos");
      return false;
    }

    setUser(userFound);
    localStorage.setItem("activeUser", JSON.stringify(userFound));

    // Redirección según rol
    switch (userFound.rol) {
      case "Admin":
        navigate("/admin/dashboard");
        break;
      case "Profesor":
        navigate("/profesor/dashboard");
        break;
      case "Estudiante":
        navigate("/estudiante/dashboard");
        break;
      default:
        navigate("/");
    }

    return true;
  };

  //  Actualizar datos del perfil
  const updateUser = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    localStorage.setItem("activeUser", JSON.stringify(updatedUser));

    // Actualiza también la lista general de usuarios
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = storedUsers.map((u) =>
      u.email === updatedUser.email ? updatedUser : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("✅ Información actualizada correctamente");
  };

  //  Cerrar sesión
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("activeUser");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        user,
        registerUser,
        loginUser,
        logoutUser,
        updateUser, //  se exporta correctamente aquí
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//  Hook personalizado
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};
