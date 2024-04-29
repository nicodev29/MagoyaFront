import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../features/userSilice";

function UserComponent() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [inputName, setInputName] = useState(""); // Estado local para manejar la entrada del nombre

  const handleNameChange = (event) => {
    setInputName(event.target.value); // Actualiza el estado local con el valor del input
  };

  const updateName = () => {
    dispatch(setUser({ name: inputName, email: user.email })); // Usa el estado local para actualizar el Redux store
    setInputName(""); // Opcional: limpiar el campo después de actualizar
  };

  return (
    <div>
      <h1>Nombre: {user.name}</h1>
      <input
        type="text"
        value={inputName}
        onChange={handleNameChange}
        placeholder="Escribe un nuevo nombre"
      />
      <button onClick={updateName}>Cambiar Nombre</button>
    </div>
  );
}

export default UserComponent;
