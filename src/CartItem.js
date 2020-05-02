import React, { Component } from 'react';

export default class CartItem extends Component {
    render() {
        
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
      
        return (
            <div className="summary__option" key={this.propsfeatureHash}>
                <div className="summary__option__label">{this.props.feature} </div>
                <div className="summary__option__value">{this.props.selectedOption}</div>
                <div className="summary__option__cost">{USCurrencyFormat.format(this.props.cost)}</div>
            </div>
        );
    }
}
