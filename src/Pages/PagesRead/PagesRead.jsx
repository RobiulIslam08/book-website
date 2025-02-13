// import React, { useEffect, useState } from 'react';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
// import { getReadBookDataLS } from '../../Utils/LocalStorage';

// const PagesRead = () => {

//   const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


//   const [readBook,setReadBook] = useState([])
//   useEffect(()=>{
//     setReadBook(getReadBookDataLS());
//   },[])
//   console.log(readBook)

//   const data = readBook.map((book,index) => {
//   {
//     name: book.bookName,
//     pages: book.totalPages
//   }


//   });

//   const getPath = (x, y, width, height) => {
//     return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
//       ${x + width / 2}, ${y}
//       C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
//       Z`;
//   };

//   const TriangleBar = (props) => {
//     const { fill, x, y, width, height } = props;

//     return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
//   };

//   return (
//     <BarChart
//       width={500}
//       height={300}
//       data={data}
//       margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
//         ))}
//       </Bar>
//     </BarChart>
//   );
// };

// export default PagesRead;

// -------------------------------------------------------------------------------------------------


import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { getReadBookDataLS } from '../../Utils/LocalStorage';

const PagesRead = () => {
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  const [readBook, setReadBook] = useState([]);
  useEffect(() => {
    setReadBook(getReadBookDataLS());
  }, []);

  const data = readBook.map((book, index) => ({
    name: book.bookName,
    pages: book.totalPages,
    uv: index + 1, // Just to ensure unique uv values for each bar
  }));

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <ResponsiveContainer width="76%" aspect={2}>
    <BarChart
      width={900}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Bar>
    </BarChart>
     </ResponsiveContainer>
  );
};

export default PagesRead;


// --------------------------------------------------------
// import React, { useEffect, useState } from 'react';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
// import { getReadBookDataLS } from '../../Utils/LocalStorage';

// const PagesRead = () => {

//   const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

//   const [readBook, setReadBook] = useState([]);
  
//   useEffect(() => {
//     setReadBook(getReadBookDataLS());
//   }, []);

//   const data = readBook.map((book, index) => ({
//     name: book.bookName,
//     pages: book.totalPages
//   }));

//   const getPath = (x, y, width, height) => {
//     return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
//       ${x + width / 2}, ${y}
//       C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
//       Z`;
//   };

//   const TriangleBar = (props) => {
//     const { fill, x, y, width, height } = props;

//     return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
//   };

//   return (
//     <ResponsiveContainer width="75%" aspect={2}>
//       <BarChart
//         data={data}
//         margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
//           ))}
//         </Bar>
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default PagesRead;








