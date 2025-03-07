// import React from 'react';
// // import { Line } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

// // Register required components
// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

// const MainChart = ({ thisYearData = [15000, 12000, 18000, 22000, 25000, 20000, 22000], lastYearData = [12000, 10000, 15000, 18000, 20000, 18000, 19000], months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] }) => {
//   const yAxisLabels = ['30K', '20K', '10K', '0'];

//   const chartContainerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     padding: '24px',
//     background: '#f9f9fa',
//     borderRadius: '16px',
//     minWidth: '300px',
//     height: '330px',
//     boxSizing: 'border-box',
//   };

//   const headerStyle = {
//     display: 'flex',
//     flexDirection: 'row',
//     gap: '16px',
//     marginBottom: '24px',
//     flexWrap: 'wrap',
//   };

//   const tabStyle = {
//     fontSize: '14px',
//     lineHeight: '20px',
//     color: '#000000',
//     cursor: 'pointer',
//     padding: '2px 8px',
//   };

//   const activeTabStyle = {
//     ...tabStyle,
//     fontWeight: 600,
//   };

//   const dividerStyle = {
//     color: '#00000033',
//     margin: '0 8px',
//   };

//   const legendItemStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '2px 8px',
//     borderRadius: '8px',
//     fontSize: '12px',
//     lineHeight: '16px',
//   };

//   const dotStyle = {
//     width: '16px',
//     height: '16px',
//     marginRight: '4px',
//   };

//   const chartStyle = {
//     display: 'flex',
//     flexGrow: 1,
//     position: 'relative',
//     gap: '16px',
//   };

//   const yAxisStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     width: '23px',
//     fontSize: '12px',
//     lineHeight: '16px',
//     color: '#00000066',
//     textAlign: 'right',
//   };

//   const graphAreaStyle = {
//     flexGrow: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     position: 'relative',
//   };

//   const xAxisStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginTop: '16px',
//     fontSize: '12px',
//     lineHeight: '16px',
//     color: '#00000066',
//   };

//   const data = {
//     labels: months,
//     datasets: [
//       {
//         label: 'This year',
//         data: thisYearData,
//         borderColor: '#af52de',
//         backgroundColor: 'rgba(175, 82, 222, 0.2)',
//         fill: true,
//       },
//       {
//         label: 'Last year',
//         data: lastYearData,
//         borderColor: '#af52de',
//         borderDash: [5, 5],
//         fill: false,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: {
//           callback: function (value) {
//             return value / 1000 + 'K';
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div style={chartContainerStyle}>
//       <div style={headerStyle}>
//         <div style={activeTabStyle}>Total Users</div>
//         <div style={tabStyle}>Total Projects</div>
//         <div style={tabStyle}>Operating Status</div>
//         <div style={dividerStyle}>|</div>
//         <div style={legendItemStyle}>
//           <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/dot-3.png" alt="This year" style={dotStyle} />
//           <span>This year</span>
//         </div>
//         <div style={legendItemStyle}>
//           <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/dot-4.png" alt="Last year" style={dotStyle} />
//           <span>Last year</span>
//         </div>
//       </div>

//       <div style={chartStyle}>
//         <div style={yAxisStyle}>
//           {yAxisLabels.map((label, index) => (
//             <div key={index}>{label}</div>
//           ))}
//         </div>
//         <div style={graphAreaStyle}>
//           <Line data={data} options={options} />
//           <div style={xAxisStyle}>
//             {months.map((month, index) => (
//               <div key={index}>{month}</div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainChart;


import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

// Register required components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const MainChart = ({ thisYearData = [15000, 12000, 18000, 22000, 25000, 20000, 22000], lastYearData = [12000, 10000, 15000, 18000, 20000, 18000, 19000], months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] }) => {
  const yAxisLabels = ['30K', '20K', '10K', '0'];

  const chartContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '24px',
    background: '#f9f9fa',
    borderRadius: '16px',
    minWidth: '300px',
    height: '330px',
    boxSizing: 'border-box',
  };

  const headerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
    marginBottom: '24px',
    flexWrap: 'wrap',
  };

  const tabStyle = {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#000000',
    cursor: 'pointer',
    padding: '2px 8px',
  };

  const activeTabStyle = {
    ...tabStyle,
    fontWeight: 600,
  };

  const dividerStyle = {
    color: '#00000033',
    margin: '0 8px',
  };

  const legendItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '2px 8px',
    borderRadius: '8px',
    fontSize: '12px',
    lineHeight: '16px',
  };

  const dotStyle = {
    width: '16px',
    height: '16px',
    marginRight: '4px',
  };

  const chartStyle = {
    display: 'flex',
    flexGrow: 1,
    position: 'relative',
    gap: '16px',
  };

  const yAxisStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '23px',
    fontSize: '12px',
    lineHeight: '16px',
    color: '#00000066',
    textAlign: 'right',
  };

  const graphAreaStyle = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  };

  const xAxisStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '16px',
    fontSize: '12px',
    lineHeight: '16px',
    color: '#00000066',
  };

  const data = {
    labels: months,
    datasets: [
      {
        label: 'This year',
        data: thisYearData,
        borderColor: '#af52de',
        backgroundColor: 'rgba(175, 82, 222, 0.2)',
        fill: true,
      },
      {
        label: 'Last year',
        data: lastYearData,
        borderColor: '#af52de',
        borderDash: [5, 5],
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true, // Set this to true
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value / 1000 + 'K';
          },
        },
      },
    },
  };

  return (
    <div style={chartContainerStyle}>
      <div style={headerStyle}>
        <div style={activeTabStyle}>Total Users</div>
        <div style={tabStyle}>Total Projects</div>
        <div style={tabStyle}>Operating Status</div>
        <div style={dividerStyle}>|</div>
        <div style={legendItemStyle}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/dot-3.png" alt="This year" style={dotStyle} />
          <span>This year</span>
        </div>
        <div style={legendItemStyle}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/dot-4.png" alt="Last year" style={dotStyle} />
          <span>Last year</span>
        </div>
      </div>

      <div style={chartStyle}>
        <div style={yAxisStyle}>
          {yAxisLabels.map((label, index) => (
            <div key={index}>{label}</div>
          ))}
        </div>
        <div style={graphAreaStyle}>
          <Line data={data} options={options} />
          <div style={xAxisStyle}>
            {months.map((month, index) => (
              <div key={index}>{month}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainChart;
