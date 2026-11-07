
import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    axios
      .get("https://stock-trading-backend-l2up.onrender.com/allposition", {
        withCredentials: true,
      })
      .then((res) => {
        setPositions(res.data);
      })
      .catch((err) => {
        console.error("Error fetching positions:", err);
      });
  }, []);

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {positions.map((stock, index) => {
              const qty = Number(stock.qty ?? 0);
              const avg = Number(stock.avg ?? 0);
              const price = Number(stock.price ?? 0);

              const curValue = price * qty;
              const profitLoss = curValue - avg * qty;

              const profClass = profitLoss >= 0 ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={stock._id || index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td className={profClass}>
                    {profitLoss.toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
