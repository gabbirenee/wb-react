import React from "react"; 
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    addFish = fish => {
        // To Update the State:
            // 1. Take a Copy of the existing state -- never want to update state directly
        const fishes = {...this.state.fishes};  // takes a copy
            // 2. add new fish to the copy 
        fishes[`fish${Date.now()}`] = fish; 
            // 3. set new object to state
        this.setState({
            fishes: fishes  // overwrites the existing state -- will activate a change in react and update accordingly
            // fishes   // can put this for simplicity sake since they are the same name
        });
    }

    render() {
        return (
            <div className = "catch-of-the-day">
                <div className = "menu">
                    <Header tagline="Fresh Seafood Market" />
                </div>
                <Order />
                <Inventory addFish={this.addFish} />
            </div>
        );
    }
}

export default App; 