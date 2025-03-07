import React from 'react';

const RightSidebar = () => {
  const sidebarStyle = {
    width: '280px',
    minHeight: '100vh',
    padding: '16px',
    borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    backgroundColor: '#fff',
  };

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  };

  const headerStyle = {
    padding: '8px 4px',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    lineHeight: '20px',
    color: '#000',
  };

  const itemStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    padding: '8px',
    borderRadius: '12px',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
  };

  const iconContainerStyle = {
    width: '24px',
    height: '24px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px',
  };

  const textContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  };

  const titleStyle = {
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    lineHeight: '20px',
    color: '#000',
  };

  const subtitleStyle = {
    fontSize: '12px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    lineHeight: '16px',
    color: 'rgba(0, 0, 0, 0.4)',
  };

  const avatarStyle = {
    width: '24px',
    height: '24px',
    borderRadius: '80px',
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={sidebarStyle}>
      {/* Notifications Section */}
      <div style={sectionStyle}>
        <div style={headerStyle}>Notifications</div>
        
        <div style={itemStyle}>
          <div style={{...iconContainerStyle, backgroundColor: '#edeefcff'}}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/bug-beetl.png" alt="" width="16" height="16" />
          </div>
          <div style={textContainerStyle}>
            <div style={titleStyle}>You fixed a bug.</div>
            <div style={subtitleStyle}>Just now</div>
          </div>
        </div>

        <div style={itemStyle}>
          <div style={{...iconContainerStyle, backgroundColor: '#e6f1fdff'}}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/user.png" alt="" width="16" height="16" />
          </div>
          <div style={textContainerStyle}>
            <div style={titleStyle}>New user registered.</div>
            <div style={subtitleStyle}>59 minutes ago</div>
          </div>
        </div>

        <div style={itemStyle}>
          <div style={{...iconContainerStyle, backgroundColor: '#edeefcff'}}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/bug-beetl-2.png" alt="" width="16" height="16" />
          </div>
          <div style={textContainerStyle}>
            <div style={titleStyle}>You fixed a bug.</div>
            <div style={subtitleStyle}>12 hours ago</div>
          </div>
        </div>

        <div style={itemStyle}>
          <div style={{...iconContainerStyle, backgroundColor: '#e6f1fdff'}}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/broadcas.png" alt="" width="16" height="16" />
          </div>
          <div style={textContainerStyle}>
            <div style={titleStyle}>Andi Lane subscribed to you.</div>
            <div style={subtitleStyle}>Today, 11:59 AM</div>
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div style={sectionStyle}>
        <div style={headerStyle}>Activities</div>
        
        <div style={itemStyle}>
          <div style={avatarStyle}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/frame-2.png" alt="" width="16" height="16" />
          </div>
          <div style={textContainerStyle}>
            <div style={titleStyle}>Changed the style.</div>
            <div style={subtitleStyle}>Just now</div>
          </div>
        </div>

        <div style={itemStyle}>
          <div style={avatarStyle}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/frame-3.png" alt="" width="16" height="16" />
          </div>
          <div style={textContainerStyle}>
            <div style={titleStyle}>Released a new version.</div>
            <div style={subtitleStyle}>59 minutes ago</div>
          </div>
        </div>

        <div style={itemStyle}>
          <div style={avatarStyle}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/frame-4.png" alt="" width="16" height="16" />
          </div>
          <div style={textContainerStyle}>
            <div style={titleStyle}>Submitted a bug.</div>
            <div style={subtitleStyle}>12 hours ago</div>
          </div>
        </div>

        <div style={itemStyle}>
          <div style={avatarStyle}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/frame-5.png" alt="" width="16" height="16" />
          </div>
          <div style={textContainerStyle}>
            <div style={titleStyle}>Modified A data in Page X.</div>
            <div style={subtitleStyle}>Today, 11:59 AM</div>
          </div>
        </div>

        <div style={itemStyle}>
          <div style={avatarStyle}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/frame-6.png" alt="" width="16" height="16" />
          </div>
          <div style={textContainerStyle}>
            <div style={titleStyle}>Deleted a page in Project X.</div>
            <div style={subtitleStyle}>Feb 2, 2025</div>
          </div>
        </div>
      </div>

      {/* Contacts Section */}
      <div style={sectionStyle}>
        <div style={headerStyle}>Contacts</div>

        <div style={itemStyle}>
          <div style={avatarStyle}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/frame-7.png" alt="" width="16" height="16" />
          </div>
          <div style={textContainerStyle}>
            <div style={titleStyle}>Natali Craig</div>
          </div>
        </div>

        <div style={itemStyle}>
          <div style={avatarStyle}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/frame-8.png" alt="" width="16" height="16" />
          </div>
          <div style={textContainerStyle}>
            <div style={titleStyle}>Drew Cano</div>
          </div>
        </div>

        <div style={itemStyle}>
          <div style={avatarStyle}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/frame-9.png" alt="" width="16" height="16" />
          </div>
          <div style={textContainerStyle}>
            <div style={titleStyle}>Andi Lane</div>
          </div>
        </div>

        <div style={itemStyle}>
          <div style={avatarStyle}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/frame-10.png" alt="" width="16" height="16" />
          </div>
          <div style={textContainerStyle}>
            <div style={titleStyle}>Koray Okumus</div>
          </div>
        </div>

        <div style={itemStyle}>
          <div style={avatarStyle}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/frame-11.png" alt="" width="16" height="16" />
          </div>
          <div style={textContainerStyle}>
            <div style={titleStyle}>Kate Morrison</div>
          </div>
        </div>

        <div style={itemStyle}>
          <div style={avatarStyle}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/frame-12.png" alt="" width="16" height="16" />
          </div>
          <div style={textContainerStyle}>
            <div style={titleStyle}>Melody Macy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;

