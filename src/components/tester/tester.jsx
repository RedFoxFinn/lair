import React from 'react';
import { connect } from 'react-redux';

import { incrementTester, decrementTester, zeroTester } from '../../controllers/redux/actions/testModuleActions';

const mapStateToProps = (state) => {
    return {
       tester: state.tester
    };
};

const mapActionsToProps = {
    incrementTester, decrementTester, zeroTester
};

const Tester = (props) => {
    const onIncrement = () => {
        props.incrementTester();
    };
    const onDecrement = () => {
        props.decrementTester();
    };
    const onZeroing = () => {
        props.zeroTester();
    };

    return <div id={props.id} data-testid={props.id} style={{ outline: '1px solid red', }}>
        <p id={`${props.id}-testerValue`} data-testid={`${props.id}-testerValue`} >Value: {props.tester.value}</p>
        <button id={`${props.id}-increment`} data-testid={`${props.id}-increment`} onClick={() => onIncrement()} >INCREMENT</button>
        <button id={`${props.id}-decrement`} data-testid={`${props.id}-decrement`} onClick={() => onDecrement()} >DECREMENT</button>
        <button id={`${props.id}-zero`} data-testid={`${props.id}-zero`} onClick={() => onZeroing()} >ZERO</button>
    </div>;
};

export default connect(mapStateToProps, mapActionsToProps)(Tester);