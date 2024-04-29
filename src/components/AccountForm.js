import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function AccountForm() {
  const [accountData, setAccountData] = useState({
    name: "",
    accountNumber: "",
    balance: "",
  });

  const handleChange = (e) => {
    setAccountData({ ...accountData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !accountData.name ||
      !accountData.accountNumber ||
      !accountData.balance
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios!",
      });
      return;
    }
    try {
      await axios.post("http://localhost:8080/api/accounts", accountData);
      Swal.fire(
        "¡Creado!",
        "La cuenta ha sido creada exitosamente.",
        "success"
      );
      setAccountData({ name: "", accountNumber: "", balance: "" });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "No se pudo crear la cuenta.",
      });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h4>Crear Nueva Cuenta</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={accountData.name}
                      onChange={handleChange}
                      placeholder="Nombre del titular"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      name="accountNumber"
                      value={accountData.accountNumber}
                      onChange={handleChange}
                      placeholder="Número de cuenta"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      name="balance"
                      value={accountData.balance}
                      onChange={handleChange}
                      placeholder="Saldo inicial"
                    />
                  </div>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Crear Cuenta
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountForm;
