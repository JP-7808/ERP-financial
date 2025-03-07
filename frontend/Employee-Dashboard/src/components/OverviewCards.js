import React from 'react';

const OverviewCards = ({ data = defaultData }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '28px',
      padding: '0 24px',
      width: '100%',
      minHeight: '112px',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    }}>
      {data.map((card, index) => (
        <div key={index} style={{
          flex: '1 1 202px',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
          gap: '8px',
          background: '#bd9dcd',
          borderRadius: '16px',
          minWidth: '202px',
          boxSizing: 'border-box'
        }}>
          <div style={{
            fontFamily: 'Inter',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
            color: '#000000'
          }}>
            {card.title}
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '8px'
          }}>
            <div style={{
              fontFamily: 'Inter',
              fontSize: '24px',
              fontWeight: 600,
              lineHeight: '36px',
              color: '#1c1c1c'
            }}>
              {card.value}
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{
                fontFamily: 'Inter',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '16px',
                color: '#000000'
              }}>
                {card.change}
              </span>
              <img 
                src={card.icon}
                alt={card.trend === 'up' ? "Increasing" : "Decreasing"}
                style={{
                  width: '16px',
                  height: '16px'
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const defaultData = [
  {
    title: 'Views',
    value: '7,265',
    change: '+11.01%',
    trend: 'up',
    icon: 'https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/arrow-ris.png'
  },
  {
    title: 'Visits', 
    value: '3,671',
    change: '-0.03%',
    trend: 'down',
    icon: 'https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/arrow-fal.png'
  },
  {
    title: 'New Users',
    value: '156',
    change: '+15.03%', 
    trend: 'up',
    icon: 'https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/arrow-ris-2.png'
  },
  {
    title: 'Active Users',
    value: '2,318',
    change: '+6.08%',
    trend: 'up',
    icon: 'https://dashboard.codeparrot.ai/api/image/Z8mFdqwi-41-yX8i/arrow-ris-3.png'
  }
];

export default OverviewCards;

