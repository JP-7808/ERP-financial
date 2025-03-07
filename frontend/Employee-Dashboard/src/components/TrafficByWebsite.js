
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register required components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const TrafficByWebsite = ({ data = [
  { name: 'Google', value: 100 },
  { name: 'YouTube', value: 85 },
  { name: 'Instagram', value: 70 },
  { name: 'Pinterest', value: 55 },
  { name: 'Facebook', value: 40 },
  { name: 'Twitter', value: 25 }
] }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '24px',
    background: '#f6e3ff',
    borderRadius: '16px',
    gap: '16px',
    minWidth: '300px',
    height: '282px',
    boxSizing: 'border-box'
  };

  const titleStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '20px',
    color: '#000000'
  };

  const chartContainerStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Traffic',
        data: data.map(item => item.value),
        backgroundColor: '#E0B0FF',
        borderRadius: 4
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true
        },
        ticks: {
          stepSize: 20 // Adjust step size as needed
        },
        min: 0, // Set minimum value for y-axis
        max: 120 // Set maximum value for y-axis
      }
    }
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>Traffic by Website</div>
      <div style={chartContainerStyle}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default TrafficByWebsite;
