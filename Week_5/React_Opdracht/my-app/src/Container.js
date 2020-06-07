import React from 'react';
import GroceryList from './components/GroceryList';
import ShoppingCart from './components/ShoppingCart';

class Mycontainer extends React.Component {
    constructor() {
        super()
        this.state = {
            GroceryItems: [
                { id: 1, product: "Appels" },
                { id: 2, product: "Pak melk" },
                { id: 3, product: "Peren" },
                { id: 4, product: "Brood" }
            ],
            ShoppingListItems: [
                { id: 5, product: "cola" },
                { id: 6, product: "snoep" },
                { id: 7, product: "muffins" }
            ]
        }
        this.moveItemToCart = this.moveItemToCart.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }
    moveItemToCart(id) {
        this.setState(prevState => ({
            GroceryItems: prevState.GroceryItems.filter(item => item.id !== id),
            ShoppingListItems: prevState.ShoppingListItems.concat(prevState.GroceryItems.filter(item => item.id === id))
        }));
    }
    deleteItem(id) {
        this.setState(prevState => ({
            ShoppingListItems: prevState.ShoppingListItems.filter(item => item.id !== id)
        }));
    }
    // let prevState = this.state.ShoppingListItems
    // let newState = prevState.filter(item => item.id != id)
    // this.setState(prevState.concat(newState))
    // console.log(prevState, newState)


    render() {
        return (
            <div className="Container">
                <GroceryList className="GroceryList" groceries={this.state.GroceryItems} moveItemToCart={this.moveItemToCart} />
                <ShoppingCart className="ShoppingCart" cartItems={this.state.ShoppingListItems} deleteItem={this.deleteItem} />
            </div>
        )
    }
}
export default Mycontainer