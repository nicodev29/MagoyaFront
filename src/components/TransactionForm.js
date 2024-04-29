import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function TransactionForm() {
  const [transactionData, setTransactionData] = useState({
    accountNumber: "",
    amount: "",
    type: "",
  });

  const handleChange = (e) => {
    setTransactionData({ ...transactionData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!transactionData.accountNumber || !transactionData.amount) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Número de cuenta y monto son obligatorios!",
      });
      return;
    }
    try {
      await axios.post(
        "http://localhost:8080/api/transactions/by-number",
        transactionData,
        {
          params: { accountNumber: transactionData.accountNumber },
        }
      );
      Swal.fire(
        "¡Realizado!",
        "La transacción se ha completado exitosamente.",
        "success"
      );
      setTransactionData({ accountNumber: "", amount: "", type: "DEPOSIT" });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "No se pudo realizar la transacción.",
      });
    }
  };

 return (
   <div className="container">
     <div className="row justify-content-center">
       <div className="col-md-8">
         <div className="card">
           <div className="card-header">
             <h4>Realizar Transacción</h4>
           </div>
           <div className="card-body">
             <form onSubmit={handleSubmit}>
               <div className="row mb-3">
                 <div className="col">
                   <input
                     type="text"
                     className="form-control"
                     name="accountNumber"
                     value={transactionData.accountNumber}
                     onChange={handleChange}
                     placeholder="Número de cuenta"
                   />
                 </div>
                 <div className="col">
                   <input
                     type="number"
                     className="form-control"
                     name="amount"
                     value={transactionData.amount}
                     onChange={handleChange}
                     placeholder="Monto"
                   />
                 </div>
               </div>
               <div className="row mb-3">
                 <div className="col">
                   <select
                     className="form-select"
                     name="type"
                     value={transactionData.type}
                     onChange={handleChange}
                   >
                     <option value="">Seleccionar tipo de transacción</option>
                     <option value="DEPOSIT">Depósito</option>
                     <option value="WITHDRAWAL">Retiro</option>
                   </select>
                 </div>
               </div>
               <div className="d-grid">
                 <button type="submit" className="btn btn-primary">
                   Realizar Transacción
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

export default TransactionForm;
