import React from 'react';

const Sidebar = () => {
  const sidebarStyle = {
    width: '212px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    borderRight: '1px solid rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const logoStyle = {
    height: '36px',
    padding: '8px',
    marginBottom: '8px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
  };

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    paddingBottom: '12px',
    width: '100%',
  };

  const labelStyle = {
    padding: '4px 12px',
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    lineHeight: '20px',
  };

  const menuItemStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '8px',
    borderRadius: '12px',
    cursor: 'pointer',
    gap: '4px',
    width: '100%',
  };

  const menuItemActiveStyle = {
    ...menuItemStyle,
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  };

  const iconTextStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
    flex: 1,
  };

  const textStyle = {
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    lineHeight: '20px',
    color: '#000',
  };

  const buttonGroupStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    width: '100%',
  };

  const buttonStyle = {
    padding: '4px 8px',
    borderRadius: '8px',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    lineHeight: '20px',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
  };

  const activeButtonStyle = {
    ...buttonStyle,
    color: 'rgba(0, 0, 0, 0.4)',
  };

  const inactiveButtonStyle = {
    ...buttonStyle,
    color: 'rgba(0, 0, 0, 0.2)',
  };

  const dividerStyle = {
    width: '100%',
    height: '1px',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    margin: '8px 0',
  };

  return (
    <div style={sidebarStyle}>
      <div style={logoStyle}>
        <div style={iconTextStyle}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/frame.png" alt="Logo" width="24" height="24" />
          <span style={textStyle}>ByeWind</span>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={buttonGroupStyle}>
          <button style={activeButtonStyle}>Favorites</button>
          <button style={inactiveButtonStyle}>Recently</button>
        </div>
        <div style={dividerStyle} />
        
        <div style={menuItemActiveStyle}>
          <div style={iconTextStyle}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/chart-pie.png" alt="Overview" width="20" height="20" />
            <span style={textStyle}>Overview</span>
          </div>
          <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/arrow-lin.png" alt="Arrow" width="16" height="16" />
        </div>

        <div style={menuItemStyle}>
          <div style={iconTextStyle}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/shopping.png" alt="eCommerce" width="20" height="20" />
            <span style={textStyle}>eCommerce</span>
          </div>
          <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/arrow-lin-2.png" alt="Arrow" width="16" height="16" />
        </div>

        <div style={menuItemStyle}>
          <div style={iconTextStyle}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/folder-no.png" alt="Projects" width="20" height="20" />
            <span style={textStyle}>Projects</span>
          </div>
          <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/arrow-lin-3.png" alt="Arrow" width="16" height="16" />
        </div>
      </div>

      <div style={sectionStyle}>
        <span style={labelStyle}>Dashboards</span>
        <div style={menuItemStyle}>
          <div style={iconTextStyle}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/dot.png" alt="Overview" width="16" height="16" />
            <span style={textStyle}>Overview</span>
          </div>
        </div>
        <div style={menuItemStyle}>
          <div style={iconTextStyle}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/dot-2.png" alt="Projects" width="16" height="16" />
            <span style={textStyle}>Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

