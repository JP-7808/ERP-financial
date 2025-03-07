import React from 'react';
// import { Bar } from 'chartjs/Bar';
// import { Doughnut } from 'chartjs/Doughnut';

import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement } from 'chart.js';

// Register required components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);


const TrafficCharts = ({ deviceData = [], locationData = [] }) => {
  const defaultDeviceData = [
    { label: 'Linux', value: 2000 },
    { label: 'Mac', value: 5000 },
    { label: 'iOS', value: 3000 },
    { label: 'Windows', value: 6000 },
    { label: 'Android', value: 1000 },
    { label: 'Other', value: 4000 }
  ];

  const defaultLocationData = [
    { label: 'US', value: 52.1 },
    { label: 'UK', value: 22.8 },
    { label: 'Germany', value: 13.9 },
    { label: 'Others', value: 11.2 }
  ];

  const barData = {
    labels: (deviceData.length ? deviceData : defaultDeviceData).map(item => item.label),
    datasets: [
      {
        label: 'Traffic by Device',
        data: (deviceData.length ? deviceData : defaultDeviceData).map(item => item.value),
        backgroundColor: ['#00000033', '#00000033', '#00000033', '#af52deff', '#00000033', '#00000033'],
        borderRadius: 8
      }
    ]
  };

  const doughnutData = {
    labels: (locationData.length ? locationData : defaultLocationData).map(item => item.label),
    datasets: [
      {
        data: (locationData.length ? locationData : defaultLocationData).map(item => item.value),
        backgroundColor: ['#af52deff', '#00000033', '#00000033', '#00000033'],
        borderWidth: 0
      }
    ]
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '280px',
      gap: '16px',
      padding: '24px',
      background: '#f9f9faff',
      borderRadius: '16px',
      boxSizing: 'border-box'
    }}>
      {/* Bar Chart Section */}
      <div style={{
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <div style={{
          fontSize: '14px',
          fontWeight: 600,
          color: '#000000ff',
          marginBottom: '20px'
        }}>
          Traffic by Device
        </div>
        <Bar data={barData} options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 10000,
                callback: function(value) {
                  return value / 1000 + 'K';
                }
              }
            }
          }
        }} />
      </div>

      {/* Doughnut Chart Section */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '14px',
          fontWeight: 600,
          color: '#000000ff',
          marginBottom: '20px',
          alignSelf: 'flex-start'
        }}>
          Traffic by Location
        </div>
        <Doughnut data={doughnutData} options={{
          responsive: true,
          maintainAspectRatio: false
        }} />
      </div>
    </div>
  );
};

export default TrafficCharts;

