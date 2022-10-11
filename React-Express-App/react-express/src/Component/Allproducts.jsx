import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Allproducts() {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4500/getAllProducts")
      .then((res) => res.json())
      .then((product) => setproduct(product));
  }, []);
  function deleteProduct(id) {
    fetch(`http://localhost:4500/deleteProduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  return (
    <div>
      <div>
        {product.map((product, i) => {
          return (
            <div className="d-flex w-5 border p-5">
              <img
                src={product.image}
                class="rounded"
                alt=""
                width="300"
                height="300"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <h5>
                <Link to={`/productDetails/${product["_id"]}`}>
                  {product.title}
                </Link>
                <button
                  class="btn btn-outline-danger align-center border border-danger border border-3"
                  onClick={() => {
                    deleteProduct(product["_id"]);
                  }}
                >
                  Delete
                </button>
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}
