import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    return (
        <div class="shoppingCart">

            <div class="navWrapper">
                <label class="navOne">Home</label>
                <label class="navTwo">Menu</label>
            </div>
      
            <div class="menuItem">
                <div class="menuItemImage">
                    <img></img>
                </div>
                <div class="menuItemDetails">
                    <div class="menuItemTitle">Cheese Pizza</div>
                    <p class="MenuItemDescription">Amazing pizza deliveried to you freaky fast!</p>
                </div>
                <div class="menuItemPrice">9.99</div>
                <div class="menuItemQuantity">
                    <input type="number" value="1" min="1"></input>
                </div>
                <div class="menuItemRemoval">
                    <button class="removeItem">
                    Remove
                    </button>
                </div>
                <div class="menuItemTotalPrice">9.99</div>
            </div>
      
          <div class="menuItem2">
              <div class="menuItem2Image">
                  <img></img>
              </div>
              <div class="menuItem2Details">
                  <div class="menuItem2Title">Pepperoni Pizza</div>
                  <p class="menuItem2Description">All the kids favorite! The greasiest and cheesiest!</p>
              </div>
                  <div class="menuItem2price">11.99</div>
                  <div class="menuItem2Quantity">
                  <input type="number" value="1" min="1"></input>
              </div>
              <div class="menuItem2Removal">
                  <button class="removeMenuItem2">
                  Remove
                  </button>
                </div>
              <div class="menuItem2TotalPrice">11.99</div>
            </div>
      
        <div class="total">
          <div class="totalItem">
            <label>Subtotal</label>
            <div class="totalValue" id="cartSubtotal"></div>
          </div>
          <div class="totalItem">
            <label>Tax (5%)</label>
            <div class="totalValue" id="cartTax"></div>
          </div>
          <div class="totalItem">
            <label>Delivery Fee</label>
            <div class="totalValue" id="cartShipping">2.50</div>
          </div>
          <div class="totalItem">
                  <label>Tip</label>
                  <div class="totalValue" id="cartShipping"></div>
                </div>
          <div class="totalItem totalItemTotal">
            <label>Total Price</label>
            <div class="totalValue" id="cartTotal"></div>
          </div>
        </div>
            
            <button class="checkout">Checkout</button>
      
      </div>
    );
  }
}