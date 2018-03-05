import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import './style.less';
import TestComponent from '../TestComponent';

function App(props) {
    return (
        <div>
            <h1>Hello world!</h1>
            <TestComponent />
        </div>
    );
}

App.propTypes = {
    store: PropTypes.object
};

export default App;

