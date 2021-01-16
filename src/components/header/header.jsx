import React from 'react';
import {connect} from 'react-redux';
import styles from '../../tools/styles';

const defaultContent = ['Lair', 'Header pane'];

const Header = (props) => {
  return props.ignoreContent || !props.content 
    ? <Default id={`${props.id}-default`} content={{first: defaultContent[0], second: defaultContent[1]}} />
    : props.content.type === 'single'
      ? <Single id={props.id} content={props.content.text} />
      : props.content.type === 'double'
        ? <Double id={props.id} content={{first: props.content.first, second: props.content.second}} />
        : null;
};

const Default = ({id, content}) => <div id={`${id}`} data-testid={`${id}`} style={styles.row()} >
  <p style={styles.header_first()} >{content.first}</p>
  <p style={styles.header_second()} >{content.second}</p>
</div>;

const Single = ({id, content}) => <div id={`${id}`} data-testid={`${id}`} style={styles.row()} >
  <p style={styles.header_first()} >{content}</p>
</div>;

const Double = ({id, content}) => <div id={`${id}`} data-testid={`${id}`} style={styles.row()} >
  <p style={styles.header_first()} >{content.first}</p>
  <p style={styles.header_second()} >{content.second}</p>
</div>;

export default connect()(Header);