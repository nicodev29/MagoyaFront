import React, { useState } from "react";
import axios from "axios";

function AccountBalance() {
  const [accountNumber, setAccountNumber] = useState("");
  const [balance, setBalance] = useState("");
  const [error, setError] = useState("");

  const fetchBalance = async () => {
    if (!accountNumber) {
      setError("El número de cuenta es obligatorio");
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:8080/api/accounts/${accountNumber}`
      );
      setBalance(response.data);
      setError("");
    } catch (error) {
      setError("Error al cargar el balance");
      setBalance("");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h4>Consultar Balance</h4>
            </div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    placeholder="Número de cuenta"
                  />
                </div>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary" onClick={fetchBalance}>
                  Consultar Balance
                </button>
              </div>
              {balance !== "" && (
                <div className="row mt-3">
                  <div className="col">
                    <h5>Balance de la cuenta {accountNumber}:</h5>
                    <p className="lead">{balance}</p>
                  </div>
                </div>
              )}
              {error && (
                <div className="row mt-3">
                  <div className="col">
                    <p className="text-danger">{error}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountBalance;
