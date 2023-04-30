import { Card } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function EventDetail() {
  let location = useLocation();
  let event = location.state;
  console.log(event);
  return (
    <Card 
      title='事件详情'
      style={{
        minWidth: '80%',
        minHeight: '80%',
      }}  
    >
      <article>
        <h1>日期： {event.date}</h1>
      <p style={{textIndent: '2em'}}>
      {event.description}
      </p>
      </article>
    </Card>
  )
}
