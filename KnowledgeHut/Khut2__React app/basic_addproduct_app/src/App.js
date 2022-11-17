import React, { Component } from "react";
import AddProduct from "./components/AddProduct";
import Products from "./components/Products";
import getProducts from "./services/getProducts";

class App extends Component {
  state = {
    products: [],
    cart: []
  };
  componentDidMount = async () => {
    const fetchProducts = await getProducts();
    this.setState({
      products: fetchProducts
    });
  };
  addProduct = product => {
    // Find the product in the cart array
    this.state.cart.find(p => p.id === product.id)
      ? alert("Product is already in the cart! Please adjust its quantity!")
      : this.setState({
          cart: [{ ...product, qty: 1 }, ...this.state.cart]
        }); // If the product is not in the cart, add it to the top of the array
  };
  updateQuantity = (id, qty) => {
    // Set the quantity of the product
    qty === 0
      ? this.setState({
          cart: this.state.cart.filter(p => p.id !== id)
        })
      : this.setState({
          cart: this.state.cart.map(p => {
            if (p.id === id) {
              return { ...p, qty: qty };
            }
            return p;
          })
        });
  };
  getTotals = () => {
    return this.state.cart.reduce(
      (prev, curr) => prev + curr.qty * curr.cost,
      0
    );
  };
  render() {
    return (
      <div className="main">
        <AddProduct data={this.state.products} add={this.addProduct} />
        <Products
          data={this.state.cart}
          update={(id, qty) => this.updateQuantity(id, qty)}
        />
        <div className="totals">
          <div className="totals-v">Total Cost: ${this.getTotals()}</div>
        </div>
      </div>
    );
  }
}

export default App;
