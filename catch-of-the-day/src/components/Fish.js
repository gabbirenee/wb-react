import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
    render() {
        const image = this.props.details.image;
        const name = this.props.details.name;
        const price = this.props.details.price;
        const description = this.props.details.description;
        const availability = this.props.details.availability;
        // can also be written: const {image, name, price, description, availability } = this.props.details; 
        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">{name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{description}</p>
                <button>Add to Cart</button>
            </li>

        );
    }
}

export default Fish; 