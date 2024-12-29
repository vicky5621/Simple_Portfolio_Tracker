
import React from 'react';

function StockList() {
  return (
    <div>
      <h2>Current Holdings</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Quantity</th>
            <th>Buy Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple</td>
            <td>AAPL</td>
            <td>10</td>
            <td>$150</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StockList;
