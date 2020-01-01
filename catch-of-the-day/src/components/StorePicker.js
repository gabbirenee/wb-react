import React from 'react';  // import them dependencies

// every component is it's own class in React 
class StorePicker extends React.Component {
    render(){
        return ( 
            <form className="store-selector">
                { /* we in javascript now homies */ }
                <h2>Please Enter A Store</h2>
                <input type = "text" placeholder="Store Name" required />
                <button type = "submit">Visit Store</button>
            </form>
        );
    }
}

export default StorePicker; 