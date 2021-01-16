import React from 'react';
import {connect} from 'react-redux';

import Footer from './components/footer/footer';
import Header from './components/header/header';
import Landing from './components/routes/landing/landing';
import {useViewport} from './controllers/hooks/viewportHook';
import styles from './tools/styles';

const mapState = (state) => {
    return state;
};

const Lair = (props) => {
    const {width, heigth} = useViewport();
    const breakpoints = [1024, 720];
    // return width > breakpoint[0] ? <div>desktop</div> : width > breakpoints[1] ? <div>tabloid</div> : <div>mobile</div>;

    return <div id={props.id} style={styles.column()} >
        <Header id={`${props.id}-lair-header`} data-testid={`${props.id}-lair-header`} ignoreContent={true} content='Header'/>
        <Landing id={`${props.id}-lair-landing`} data-testid={`${props.id}-lair-landing`} ignoreContent={true} content='Landing'/>
        <Footer id={`${props.id}-lair-footer`} data-testid={`${props.id}-lair-footer`} ignoreContent={false} content={{first:'Lair', second:'Footer pane', third:'testing', type:'triple'}}/>
    </div>;
};

export default connect(mapState)(Lair);