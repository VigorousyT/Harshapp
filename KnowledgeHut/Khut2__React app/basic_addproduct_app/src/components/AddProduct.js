import React, { useState } from "react";

const AddProduct = ({ data, add }) => {
  const [chosen, setChosen] = useState();
  return (
    <div className="add-product">
      <select
        onChange={e =>
          e.target.value
            ? setChosen(e.target.value)
            : alert("Please select a product")
        }
      >
        <option value={null}>Please select a product</option>
        {data &&
          data.map(d => (
            <option key={d.id} value={d.id}>
              {d.name} - ${d.cost}
            </option>
          ))}
      </select>
      <button
        onClick={() =>
          chosen
            ? add(data.find(i => i.id === chosen))
            : alert("Please select a product!")
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddProduct;
