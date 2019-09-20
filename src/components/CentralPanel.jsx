import React from 'react';
import { Route } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";


class CentralPanel extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className='centralPanel'>
            <Route exact path="/" component={About} />
                <Route exact path="/contacts" component={Contact} />
        </div>;
    }
}

export default CentralPanel;