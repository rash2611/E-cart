import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
        products: [
        {
            price: 1000,
            title: 'Phone',
            qty: 1,
            img:'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
            id: 1
        }, 
        {
            price: 100,
            title: 'Watch',
            qty: 1,
            img:'https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
            id: 2
        },
        {
            price: 10000,
            title: 'Laptop',
            qty: 2,
            img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
            id:3
        }
        ]
    }
}
handleIncreaseQuantity = ( product) => {
    console.log('Hey, Please increase the qty of product', product);
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty+=1;

    this.setState({
        products
    });
}
handleDecreaseQuantity = ( product) => {
    console.log('Hey, Please decrease the qty of product', product);
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0)
    {
        return;
    }
    products[index].qty-=1;

    this.setState({
        products
    });
}
handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id!==id);
    this.setState({
        products: items
    })
}

getCartCount = () => {
    const {products} = this.state;

    let count = 0;

    products.forEach((product) => {
            count+=product.qty;
    })
    return count;
}
getCartTotal = () => {
    const {products} = this.state;

    let cartTotal = 0;

    products.map((product) => {
        cartTotal+= product.qty * product.price;
    })
    return cartTotal;
}
  render(){
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count = { this.getCartCount()} />
        <Cart
             products = {products}
             onIncreaseQuantity= {this.handleIncreaseQuantity}
             onDecreaseQuantity= {this.handleDecreaseQuantity}
             onDeleteProduct= {this.handleDeleteProduct}
        />
        <div style = { {padding:10, fontSize: 20 } }>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
