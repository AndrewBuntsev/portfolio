import React from 'react';

import Sidebar from './Sidebar';
import CentralPanel from './CentralPanel';


class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='mainPanel'>
                <Sidebar />
                <CentralPanel />
            </div>);
    }
}

export default Main;
