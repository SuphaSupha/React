import "./Table.css";
import { useState, useEffect } from "react";
import Button from "../../Components/Button/Button";

const Table = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://believed-shore-vanadium.glitch.me/")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`https://believed-shore-vanadium.glitch.me/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
      });
    });

    setItems((prevItems) => prevItems.filter((prevItem) => prevItem !== id));
  };

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Number of Costumers</th>
            <th>Price</th>
            <th>Aprove/decline</th>
          </tr>
        </thead>
        <tbody className="table-content">
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td key={index.id}>{item.id}</td>
                <td key={index.id}>{item.people}</td>
                <td key={index.id}>{item.price}</td>
                <td className="buttons">
                  <Button
                    variant="contained"
                    onClick={() =>
                      alert(`Orderis ${item.id} sekmingai pridėtas `)
                    }
                  >
                    V
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => handleDelete(item.id)}
                  >
                    X
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
