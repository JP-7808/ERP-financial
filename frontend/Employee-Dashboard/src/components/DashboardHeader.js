import React from 'react';

const DashboardHeader = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '68px',
      padding: '20px 28px',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxSizing: 'border-box'
    }}>
      {/* Left Section - Icon Breadcrumb */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          {/* Sidebar Button */}
          <button style={{
            padding: '4px',
            borderRadius: '8px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px'
          }}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/sidebar.png" alt="sidebar" style={{ width: '20px', height: '20px' }} />
          </button>

          {/* Star Button */}
          <button style={{
            padding: '4px',
            borderRadius: '8px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px'
          }}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/star.png" alt="star" style={{ width: '20px', height: '20px' }} />
          </button>
        </div>

        {/* Breadcrumb */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'center' }}>
          <button style={{
            padding: '4px 8px',
            borderRadius: '8px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            color: 'rgba(0, 0, 0, 0.4)',
            fontFamily: 'Inter',
            fontSize: '14px',
            lineHeight: '20px'
          }}>
            Dashboards
          </button>
          <span style={{ color: 'rgba(0, 0, 0, 0.2)', fontSize: '14px' }}>/</span>
          <button style={{
            padding: '4px 8px',
            borderRadius: '8px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            color: 'rgba(0, 0, 0, 1)',
            fontFamily: 'Inter',
            fontSize: '14px',
            lineHeight: '20px'
          }}>
            Default
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center' }}>
        {/* Search */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '8px',
          padding: '4px 8px',
          background: 'rgba(0, 0, 0, 0.04)',
          borderRadius: '8px',
          alignItems: 'center',
          width: '160px',
          height: '28px'
        }}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/search.png" alt="search" style={{ width: '16px', height: '16px' }} />
          <span style={{
            color: 'rgba(0, 0, 0, 0.2)',
            fontFamily: 'Inter',
            fontSize: '14px',
            lineHeight: '20px',
            flexGrow: 1
          }}>Search</span>
          <div style={{
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '2px 4px',
            borderRadius: '4px',
            color: 'rgba(0, 0, 0, 0.2)',
            fontSize: '12px',
            border: '0.5px solid rgba(0, 0, 0, 0.04)'
          }}>/</div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
          {/* Theme Toggle */}
          <button style={{
            padding: '4px',
            borderRadius: '8px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/sun.png" alt="theme" style={{ width: '20px', height: '20px' }} />
          </button>

          {/* Activities */}
          <button style={{
            padding: '4px',
            borderRadius: '8px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/clock-cou.png" alt="activities" style={{ width: '20px', height: '20px' }} />
          </button>

          {/* Notifications */}
          <button style={{
            padding: '4px',
            borderRadius: '8px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/bell.png" alt="notifications" style={{ width: '20px', height: '20px' }} />
          </button>

          {/* Rightbar */}
          <button style={{
            padding: '4px',
            borderRadius: '8px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/sidebar-2.png" alt="rightbar" style={{ width: '20px', height: '20px' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;

