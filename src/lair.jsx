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

    return props.default ? <DefaultComponents id={props.id} /> : <CustomComponents id={props.id} />;
};

const DefaultComponents = ({id}) => <div id={id} style={styles.column()} >
    <Header id={`${id}-lair-header`} data-testid={`${id}-lair-header`} ignoreContent={true} />
    <Landing id={`${id}-lair-landing`} data-testid={`${id}-lair-landing`} ignoreContent={true} />
    <Footer id={`${id}-lair-footer`} data-testid={`${id}-lair-footer`} ignoreContent={true} />
</div>;

const CustomComponents = ({id}) => <div id={id} style={styles.column()} >
    <Header id={`${id}-lair-header`} data-testid={`${id}-lair-header`} ignoreContent={false} content={{first:'Lair', second:'Header pane [dev]', type:'double'}}/>
    <Landing id={`${id}-lair-landing`} data-testid={`${id}-lair-landing`} ignoreContent={true} content='Landing'/>
    <Footer id={`${id}-lair-footer`} data-testid={`${id}-lair-footer`} ignoreContent={false} content={{first:'Lair', second:'Footer pane', third:'testing', type:'triple'}}/>
</div>;

export default connect(mapState)(Lair);