/* eslint-disable linebreak-style */

import React from 'react';
import { Alert, Collapse } from 'react-bootstrap';

export default class Toast extends React.Component {
  componentDidUpdate() {
    const { showing, onDismiss } = this.props;
    if (showing) {
      clearTimeout(this.dismissTimer);
      this.dismissTimer = setTimeout(onDismiss, 5000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.dismissTimer);
  }

  render() {
    const {
      showing, bsStyle, onDismiss, children,
    } = this.props;
    return (
      <Collapse in={showing}>
        <div style={{ position: 'fixed', top: 60, right: 20 }}>
          <Alert bsStyle={bsStyle} onDismiss={onDismiss}>
            {children}
          </Alert>
        </div>
      </Collapse>
    );
  }
}
