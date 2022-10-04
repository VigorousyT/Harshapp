import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  var params = useParams;
  useEffect(() => {
    var id = params;
    fetch(`http://localhost:4500/ProductDetails/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [params]);

  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}

export default ProductDetails;
