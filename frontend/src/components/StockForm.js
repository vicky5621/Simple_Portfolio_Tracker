
import React from 'react';

function StockForm() {
  return (
    <div>
      <h2>Add/Edit Stock</h2>
      <form>
        <input type="text" placeholder="Stock Name" />
        <input type="text" placeholder="Ticker Symbol" />
        <input type="number" placeholder="Quantity" />
        <input type="number" placeholder="Buy Price" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StockForm;
