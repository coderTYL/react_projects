import React from 'react'
import { articles } from '../../articles';

export default function Quote(props) {
  let {index, currentColor} = props;
  console.log(index, currentColor);
  return (
    <div style={{color: currentColor, fontWeight: 'bolder', fontSize: '1.5rem'}}>
      {`"${articles[index].article}"`}
    </div>
  )
}
