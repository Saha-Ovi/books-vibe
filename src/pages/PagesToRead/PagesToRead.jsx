import React, { use, Suspense } from 'react';
// 1. Added Tooltip to imports
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const booksPromise = fetch("/booksData.json").then(res => res.json());

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#00E4FF'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  }, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const ChartContent = () => {
  const books = use(booksPromise);

  const chartData = books.map(book => ({
    name: book.bookName, 
    pages: book.totalPages
  }));

  return (
    <ResponsiveContainer width="100%" height={600}>
      <BarChart
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis 
          dataKey="name" 
          interval={0} 
          tick={{ fontSize: 12 }} 
          angle={-20} 
          textAnchor="end" 
        />
        <YAxis />
        
        {/* 2. Added Tooltip Component */}
        <Tooltip 
          cursor={{ fill: 'transparent' }} // Removes the gray background box on hover
          contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }}
          itemStyle={{ color: '#8884d8', fontWeight: 'bold' }}
        />

        <Bar 
          dataKey="pages" 
          fill="#8884d8" 
          shape={<TriangleBar />} 
          label={{ position: 'top' }}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

const PagesToRead = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-10 p-5 bg-gray-50 rounded-3xl">
        <h2 className="text-2xl font-bold text-center mb-8">Pages to Read</h2>
        <Suspense fallback={<p className="text-center">Loading Chart...</p>}>
            <ChartContent />
        </Suspense>
    </div>
  );
};

export default PagesToRead;