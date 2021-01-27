import React from 'react';
import {connect} from 'react-redux';
import {bool} from 'prop-types';
import styles from '../../tools/styles';
import {contentType} from '../../tools/types';

const defaultContent = ['Lair', 'Header pane'];

const Header = (props) => {
  if (props.ignoreContent || !props.content) {
    return <Default id={`${props.id}-default`} content={{first: defaultContent[0], second: defaultContent[1]}} />;
  } else if (props.content) {
    switch (props.content.type) {
      case 'single': return <Single id={props.id} content={props.content.first} />;
      case 'double': return <Double id={props.id} content={{first: props.content.first, second: props.content.second}} />;
      default: return <Default id={`${props.id}-default`} content={{first: defaultContent[0], second: defaultContent[1]}} />;
    }
  } else {
    return null;
  }
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

Header.propTypes = {
  ignoreContent: bool,
  content: contentType
};

export default connect()(Header);