import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {increment} from '../AC/index';
import {connect} from 'react-redux';

class TestComponent extends Component {

    static propTypes = {
        count: PropTypes.number

    };
    render() {
        return (
            <div>
                <span>{this.props.count}</span><a href='#' onClick={this.handleClick}>Increment value</a>
            </div>
        );
    }

    handleClick = (e)  => {
        e.preventDefault();
        console.log('test test');
        this.props.increment();
    }
}

function mapStateToProps (state) {
    return {
        count: state.counter
    }
}

export default connect(mapStateToProps, {increment})(TestComponent);
