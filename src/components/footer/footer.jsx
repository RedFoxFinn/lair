import React from 'react';
import {connect} from 'react-redux';
import styles from '../../tools/styles';

const defaultContent = ['Lair', 'Footer pane'];
const content = ['not', 'default'];
const Footer = (props) => {
  return props.ignoreContent || !props.content
    ? <div id={`${props.id}-default`} data-testid={`${props.id}-default`} style={styles.row()} >
      <p style={styles.footer_first()} >{defaultContent[0]}</p>
      <p style={styles.footer_second()} >{defaultContent[1]}</p>
    </div>
    : <div id={props.id} data-testid={props.id} style={styles.row()} >
      <p style={styles.footer_first()} >{props.content ? props.content[0] : content[0]}</p>
      <p style={styles.footer_second()} >{props.content ? props.content[1] : content[1]}</p>
    </div>;
};

export default connect()(Footer);