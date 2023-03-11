import React from 'react'
import { articles } from '../../articles';

export default function Quote(props) {
  let {index} = props;
  return (
    <div style={{color: 'orangered', fontWeight: 'bolder', fontSize: '1.5rem'}}>
      {`"${articles[index].article}"`}
    </div>
  )
}
