
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SquirrelIcon extends Component {
  render() {
    var defaults = {
      'aria-hidden': true,
      height: 16,
      width: 16,
      viewBox: '0 0 16 16',
      style: {
        display: 'inline-block',
        verticalAlign: 'text-top',
        fill: 'currentColor',
      },
    };
    return (
      <svg {...defaults} {...this.props}>
        <path fillRule="evenodd" d="M11.75 1c-2.21 0-4 1.31-4 2.92 0 1.94.5 3.03 0 6.08 0-4.5-2.77-6.34-4-6.34.05-.5-.48-.66-.48-.66s-.22.11-.3.34c-.27-.31-.56-.27-.56-.27l-.13.58S.45 4.29.43 6.87c.2.33 1.53.6 2.47.43.89.05.67.79.47.99C2.53 9.13 1.75 8 .75 8s-1 1 0 1 1 1 3 1c-3.09 1.2 0 4 0 4h-1c-1 0-1 1-1 1h6c3 0 5-1 5-3.47 0-.85-.43-1.79-1-2.53-1.11-1.46.23-2.68 1-2 .77.68 3 1 3-2 0-2.21-1.79-4-4-4zm-9.5 5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5z"/>
      </svg>
    );
  }
}
export default SquirrelIcon;