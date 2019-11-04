import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


export default class BarLineChart extends PureComponent {


  render() {
    return (
      <BarChart
        width={1000}
        height={200}
        data={this.props.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis   />
        <Tooltip />
        
        <Bar dataKey="FAILED_count" fill="#8884d8" />
        <Bar dataKey="FTP_DONE_count" fill="#82ca9d" />
      </BarChart>
    );
  }
}
