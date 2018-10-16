import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import HomeLayout from './Containers/Home/Home.container';
import store from './store/configureStore';

const Index = () => {
    return (
        <Provider store={store}>
            <HomeLayout />
        </Provider>
    )

};

ReactDOM.render(<Index />, document.getElementById("index"));