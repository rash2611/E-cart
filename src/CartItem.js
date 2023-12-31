import React from 'react';

const CartItem = (props) => {
    
    // increaseQuantity = () => {
    //    // console.log('this',this.state);
    //    //set state form 1
    // //    this.setState({
    // //         qty: this.state.qty + 1
    // //    });

    // // set state form 2
    // this.setState((prevState) => {
    //     return{
    //         qty: prevState.qty + 1
    //     }
    // });
    // }

    // decreaseQuantity = () => {
    //     const { qty } = this.state;
    //     if( qty === 0)
    //     {
    //         return;
    //     }
    //     this.setState((prevState) => {
    //         return{
    //             qty: prevState.qty - 1
    //         }
    //     });
    // }

   // console.log('this.props',this.props);
    const{ price, title, qty} = props.product;
    const{ product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} = props;
    return (
        <div className="cart-item">
            <div className ="left-block">
                <img style = {styles.image} src = { product.img} />
            </div>
            <div className ="right-block">
                <div style = { { fontSize : 25 } }> {title}</div>
                <div style = { { color : 'grey' }}> Rs {price}</div>
                <div style = { { color : 'grey' }}> Qty: {qty} </div>
                <div className ="cart-item-actions">
                    <img alt ="increase" className = "action-icons" src ="https://cdn-icons-png.flaticon.com/128/992/992651.png" onClick={ () => onIncreaseQuantity(product)}/>
                    <img alt ="decrease" className = "action-icons" src ="https://cdn-icons-png.flaticon.com/128/992/992683.png" onClick={() => onDecreaseQuantity(product)}/>
                    <img alt ="delete" className = "action-icons" src ="https://cdn-icons-png.flaticon.com/128/3756/3756615.png" onClick={() => onDeleteProduct(product.id)}/>
                </div>
            </div>
        </div>
    );
    
}

const styles = {
    image: {
        height: 100,
        width: 100,
        borderRadius: 4,
        backgroundColor: '#999'
    }
}
export default CartItem;