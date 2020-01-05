import React from 'react';  // import them dependencies
import { getFunName } from "../helpers"; 

// every component is it's own class in React 
class StorePicker extends React.Component {
    // constructor() {
    //     super();        // runs the component that is being extended first
    //     this.goToStore = this.goToStore.bind(this);     // binds StorePicker to this
    // }

    myInput = React.createRef();
    goToStore = (event) => {
        event.preventDefault();     // stops the form from submitting
        // get the text from the input
            // can't use keyword "this" here because of how it binds; "this" is undefined here
            // can be fixed using the constructor function
            // can also be fixed by writing it as a property with an arrow function 
        console.log(this);
        const storeName = this.myInput.current.value;
        console.log(storeName);      // react be crazy am I right or am I right
        // change the page to /store/user-input (no refresh or anything like that)
            // done using react router - StorePicker component is a child of React Router 
        this.props.history.push(`/store/${storeName}`);
    };

    render(){
        return ( 
            <form className="store-selector" onSubmit={this.goToStore}>
                { /* we in javascript now homies */ }
                <h2>Please Enter A Store</h2>
                <input 
                    type = "text" 
                    placeholder="Store Name" 
                    ref = {this.myInput}
                    required 
                    defaultValue={getFunName()} /> 
                <button type = "submit">Visit Store</button>
            </form>
        );
    }
}

export default StorePicker; 