import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  var params = useParams();
  const [product, setproduct] = useState({});
  useEffect(() => {
    var { id } = params;
    fetch(`http://localhost:4500/getAllProducts/${id}`)
      .then((res) => res.json())
      .then((data) => setproduct({ ...data.product }));
  }, [params]);
  return (
    <div className="d-flex flex-wrap">
      <div className="w-25 p-5">
        <img className="img-thumbnail img-fluid" src={product.image} alt="" />
      </div>
      <div className=" w-50 container-fluid">
        <h2 class="text-bg-info"> {product.title} </h2>
        <h2 class="text-bg-info"> Description:- {product.description} </h2>
        <h3 class="text-bg-info"> Category:- {product.category} </h3>
        <h2 class="text-bg-secondary">${product.price}</h2>
      </div>
    </div>
  );
}

export default ProductDetails;
