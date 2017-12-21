import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const series = [
  {name: 'Series 1', data: [
    {category: 'A', value: Math.random()},
    {category: 'B', value: Math.random()},
    {category: 'C', value: Math.random()}
  ]},
  {name: 'Series 2', data: [
    {category: 'B', value: Math.random()},
    {category: 'C', value: Math.random()},
    {category: 'D', value: Math.random()}
  ]},
  {name: 'Series 3', data: [
    {category: 'C', value: Math.random()},
    {category: 'D', value: Math.random()},
    {category: 'E', value: Math.random()}
  ]},
];

export default class SimpleLineChart extends Component {
  static jsfiddleUrl = '//jsfiddle.net/3eap22sn';

  render () {
    return (
      <LineChart width={600} height={300}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="category" type="category" allowDuplicatedCategory={false} />
        <YAxis dataKey="value"/>
        <Tooltip/>
        <Legend />
        {series.map(s => (
          <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
        ))}
      </LineChart>
    );
  }
};

