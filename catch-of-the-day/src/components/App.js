import React from "react"; 
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

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
    };

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes,
        });
    };

    render() {
        return (
            <div className = "catch-of-the-day">
                <div className = "menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)}
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        );
    }
}

export default App; 