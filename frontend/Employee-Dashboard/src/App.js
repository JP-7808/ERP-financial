import React from 'react';
import DashboardHeader from './components/DashboardHeader';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import OverviewCards from './components/OverviewCards';
import TrafficByWebsite from './components/TrafficByWebsite';
import MainChart from './components/MainChart';
import TrafficCharts from './components/TrafficCharts';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', minHeight: '100vh', backgroundColor: '#f9f9fa' }}>
      {/* Sidebar */}
      <div style={{ flexGrow: 0, flexShrink: 0, flexBasis: '212px', backgroundColor: '#fff' }}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', padding: '24px', gap: '24px' }}>
        {/* Header */}
        <div style={{ flexGrow: 0, flexShrink: 0, flexBasis: '68px' }}>
          <DashboardHeader />
        </div>

        {/* Overview Cards */}
        <div style={{ flexGrow: 0, flexShrink: 0, flexBasis: '112px', display: 'flex', flexDirection: 'row', gap: '24px' }}>
          <OverviewCards />
        </div>

        {/* Main Chart and Traffic by Website */}
        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'row', gap: '24px' }}>
          <div style={{ flexGrow: 2 }}>
            <MainChart />
          </div>
          <div style={{ flexGrow: 1 }}>
            <TrafficByWebsite />
          </div>
        </div>

        {/* Traffic Charts */}
        <div style={{ flexGrow: 0, flexShrink: 0, flexBasis: '280px', display: 'flex', flexDirection: 'row', gap: '24px' }}>
          <TrafficCharts />
        </div>
      </div>

      {/* Right Sidebar */}
      <div style={{ flexGrow: 0, flexShrink: 0, flexBasis: '280px', backgroundColor: '#fff' }}>
        <RightSidebar />
      </div>
    </div>
  );
};

export default App;

