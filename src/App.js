import React from "react";
import "./App.css";
import AccountBalance from "./components/AccountBalance";
import AccountForm from "./components/AccountForm";
import TransactionForm from "./components/TransactionForm";
import EventVisor from "./components/EventVisor";

function App() {
  return (
    <div className="App">
      <AccountForm />
      <TransactionForm />
      <AccountBalance />
      <EventVisor />
    </div>
  );
}

export default App;
