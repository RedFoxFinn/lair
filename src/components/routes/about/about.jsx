
import React from 'react';
import {connect} from 'react-redux';
import styles from '../../../tools/styles';

const defaultContent = ['Lair','about'];

const About = (props) => {
    if (props.ignoreContent || !props.content) {
        return <Default id={props.id} />;
    } else {
        return props.content.type === 'single'
            ? <SingleRow id={props.id} content={{first: props.content.first, second: props.content.second}} />
            : null;
    }
};

const SingleRow = ({id, content}) => <div id={id} data-testid={id} style={styles.row()} >
    <p>{content.first}</p>
    <p>{content.second}</p>
</div>;

const DoubleRow = ({id, content}) => <div id={`${id}`} data-testid={`${id}`} style={styles.column()} >
    <div id={`${id}-first`} data-testid={`${id}-first`} style={styles.row()} >
        <p>{content.first[0]}</p>
        <p>{content.first[1]}</p>
    </div>
    <div id={`${id}-second`} data-testid={`${id}-second`} style={styles.row()} >
        <p>{content.second[0]}</p>
        <p>{content.second[1]}</p>
    </div>
</div>;

const TripleRow = ({id, content}) => <div id={`${id}`} data-testid={`${id}`} style={styles.column()} >
    <div id={`${id}-first`} data-testid={`${id}-first`} style={styles.row()} >
        <p>{content.first[0]}</p>
        <p>{content.first[1]}</p>
    </div>
    <div id={`${id}-second`} data-testid={`${id}-second`} style={styles.row()} >
        <p>{content.second[0]}</p>
        <p>{content.second[1]}</p>
    </div>
    <div id={`${id}-third`} data-testid={`${id}-third`} style={styles.row()} >
        <p>{content.third[0]}</p>
        <p>{content.third[1]}</p>
    </div>
</div>;

const Default = ({id}) => <div id={`${id}`} data-testid={`${id}`} style={styles.row()} >
    <p>{defaultContent[0]}</p>
    <p>{defaultContent[1]}</p>
</div>;

export default connect()(About);