import React, { Component } from 'react';
import CartItem from './CartItem';

export default class Cart extends Component {
    
    render() {

        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });

        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
          );
        
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
      
            return (
            <CartItem
                featureHash = {featureHash}
                feature = {feature}
                selectedOption = {selectedOption.name}
                cost = {selectedOption.cost}
                key = {selectedOption.name}
              />
            );
          });

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <div className="summary__total">
                <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                        {USCurrencyFormat.format(total)}
                    </div>
                </div>
            </section>
        );
    }  
}


