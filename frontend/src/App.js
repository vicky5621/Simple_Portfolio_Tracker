
import React from 'react';
import Dashboard from './components/Dashboard';
import StockForm from './components/StockForm';
import StockList from './components/StockList';

function App() {
  return (
    <div className="App">
      <h1>Simple Portfolio Tracker</h1>
      <Dashboard />
      <StockForm />
      <StockList />
    </div>
  );
}

export default App;
