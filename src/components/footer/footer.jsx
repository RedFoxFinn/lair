import React from 'react';
import {connect} from 'react-redux';
import styles from '../../tools/styles';

const defaultContent = ['Lair', 'Footer pane'];

const Footer = (props) => {
  if (props.ignoreContent || !props.content) {
    return <Default id={`${props.id}-default`} content={{first: defaultContent[0], second: defaultContent[1]}} />;
  } else if (props.content) {
    switch (props.content.type) {
      case 'single': return <Single id={props.id} content={props.content.text} />;
      case 'double': return <Double id={props.id} content={{first: props.content.first, second: props.content.second}} />;
      case 'triple': return <Triple id={props.id} content={{first: props.content.first, second: props.content.second, third: props.content.third}} />;
      default: return null;
    }
  } else {
    return null;
  }
};

const Default = ({id, content}) => <div id={`${id}`} data-testid={`${id}`} style={styles.row()} >
  <p style={styles.footer_first()} >{content.first}</p>
  <p style={styles.footer_second()} >{content.second}</p>
</div>;

const Single = ({id, content}) => <div id={`${id}`} data-testid={`${id}`} style={styles.row()} >
  <p style={styles.footer_first()} >{content}</p>
</div>;

const Double = ({id, content}) => <div id={`${id}`} data-testid={`${id}`} style={styles.row()} >
  <p style={styles.footer_first()} >{content.first}</p>
  <p style={styles.footer_second()} >{content.second}</p>
</div>;

const Triple = ({id, content}) => <div id={`${id}`} data-testid={`${id}`} style={styles.row()} >
  <p style={styles.footer_first()} >{content.first}</p>
  <p style={styles.footer_second()} >{content.second}</p>
  <p style={styles.footer_third()} >{content.third}</p>
</div>;;

export default connect()(Footer);