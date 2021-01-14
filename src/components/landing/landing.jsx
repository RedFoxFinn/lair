import React from 'react';
import {connect} from 'react-redux';

import Tester from '../tester/tester';

const Landing = (props) => <div id={props.id} data-testid={props.id}>
    {props.ignoreContent || !props.content ? <Tester id={`${props.id}-tester`} data-testid={`${props.id}-tester`} /> : props.content}
</div>;

export default connect()(Landing);