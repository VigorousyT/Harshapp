import React from "react";
import { useState } from "react";

export default function Addproduct() {
  const [newproduct, setnewproduct] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: {
      rate: "",
      count: "",
    },
  });

  function addProduct() {
    console.log("newproduct", newproduct);
    fetch("http://localhost:4500/addProducts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newproduct),
    }).then((res) => console.log(res));
  }

  return (
    <div>
      <h1 className="App">👇👇 Please Add your Product Here...👇👇</h1>
      <div class="container mt-3">
        <div class="mb-3 mt-3">
          <label for="id">id:</label>
          <input
            type="text"
            class="form-control border border-info rounded"
            id="id"
            placeholder="Enter id"
            name="id"
            onChange={(e) => {
              setnewproduct({ ...newproduct, id: e.target.value });
            }}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="title">title:</label>
          <input
            type="text"
            class="form-control border border-info rounded"
            id="title"
            placeholder="Enter title"
            name="title"
            onChange={(e) => {
              setnewproduct({ ...newproduct, title: e.target.value });
            }}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="price">price:</label>
          <input
            type="text"
            class="form-control border border-info rounded"
            id="price"
            placeholder="Enter price"
            name="price"
            onChange={(e) => {
              setnewproduct({ ...newproduct, price: e.target.value });
            }}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="description">description:</label>
          <input
            type="text"
            class="form-control border border-info rounded"
            id="description"
            placeholder="Enter description"
            name="description"
            onChange={(e) => {
              setnewproduct({ ...newproduct, description: e.target.value });
            }}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="category">category:</label>
          <input
            type="text"
            class="form-control border border-info rounded"
            id="category"
            placeholder="Enter category"
            name="category"
            onChange={(e) => {
              setnewproduct({ ...newproduct, category: e.target.value });
            }}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="image formFile" class="form-label">
            PRODUCT IMAGE
          </label>
          <input
            type="text file"
            class="form-control border border-info rounded"
            id="image"
            placeholder="Enter image"
            name="image"
            onChange={(e) => {
              setnewproduct({ ...newproduct, image: e.target.value });
            }}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="rate">RATE</label>
          <input
            type="text"
            class="form-control border border-info rounded"
            id="rate"
            placeholder="Enter rate"
            name="rate"
            onChange={(e) => {
              setnewproduct({
                ...newproduct,
                rating: { ...newproduct.rating, rate: e.target.value },
              });
            }}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="count">COUNT</label>
          <input
            type="text"
            class="form-control border border-info rounded"
            id="count"
            placeholder="Enter count"
            name="count"
            onChange={(e) => {
              setnewproduct({
                ...newproduct,
                rating: { ...newproduct.rating, count: e.target.value },
              });
            }}
          />
        </div>

        <button type="button" class="btn btn-primary" onClick={addProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
}
