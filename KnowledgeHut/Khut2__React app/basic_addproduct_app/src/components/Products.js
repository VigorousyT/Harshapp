import React from "react";
import Product from "./Product";

const Products = ({ data, update }) => {
  return (
    <div className="products-list">
      {data.map((p, index) => (
        <Product key={p.id} product={p} update={(id, qty) => update(id, qty)} />
      ))}
    </div>
  );
};

export default Products;
