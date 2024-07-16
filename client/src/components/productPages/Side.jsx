

import React from 'react';
import RightSide from './RightSide';
import CustomMarks from './CustomMarks.jsx';

const Side = ({ text }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ 
        backgroundColor: '#ffffff', 
        width: '33vh', 
        height: '100vh', 
        padding: '20px', 
        marginTop: '15px', 
        display: 'flex', 
        flexDirection: 'column' // Added flexDirection: 'column'
      }}>
      <p style={{fontSize:'18px'}}>Filters</p>
        <p style={{ marginBottom: '10px' }}>Price</p> {/* Added marginBottom to p */}
        <CustomMarks />
        
      </div>
      <RightSide text={text} />
    </div>
  );
};

export default Side;
