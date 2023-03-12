import React from 'react';
import { articles } from '../../articles';

export default function Author(props) {
  return (
    <div style={{float: 'right', color: props.currentColor}}>
      {`--- ${articles[props.index].author}`}
    </div>
  )
}
