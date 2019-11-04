import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector,Tooltip, Cell,
} from 'recharts';

const data = [
  {
    "status": "FAILED",
    "count": "4084",
    "FAILED_count": "4084",
    "value": 4084,
    "name": "FAILED"
  },
  {
    "status": "FTP_DONE",
    "count": "95127",
    "FTP_DONE_count": "95127",
    "value": 95127,
    "name": "FTP_DONE"
  }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class DetailChart extends PureComponent {
  render() {
    return (
      <PieChart width={200} height={200}>
        <Pie
          data={this.props.data}
          cx={80}
          cy={90}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Tooltip />
      </PieChart>
    );
  }
}
