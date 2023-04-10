import React, { useState, useEffect } from 'react';

const ProgressBarTimer = () => {
  const [progress, setProgress] = useState(0); // State to track progress

  // Function to calculate progress based on current date
  const calculateProgress = () => {
    // Calculate the progress based on the number of days that have passed
    const currentDate = new Date();
    const startDate = new Date('2023-01-01'); // Set your desired start date here
    const endDate = new Date('2023-12-31'); // Set your desired end date here
    const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
    const daysPassed = (currentDate - startDate) / (1000 * 60 * 60 * 24);
    const progress = (daysPassed / totalDays) * 100;

    setProgress(progress);
  }

  // Run the progress calculation on component mount and every minute thereafter
  useEffect(() => {
    calculateProgress();
    const intervalId = setInterval(calculateProgress, 60000); // Update every minute
    return () => {
      clearInterval(intervalId); // Clean up interval on component unmount
    };
  }, []);

  return (
    <div>
      <div style={{ display: 'flex',  alignItems: 'center',flexDirection:'column'  ,position:'relative'}}>
        <div style={{ marginLeft: '10px'  ,color:'#fff', fontSize:'2em', fontWeight:'bold' ,position:'absolute', top:'-50px', right:'-70px'}}>{`${progress.toFixed(2)}%`}</div>
        <div style={{ width: '100%', height: '10px', backgroundColor: '#6c6b6b',  borderRadius: '10px' }}>
          <div style={{ height: '100%', width: `${progress}%`, backgroundColor: '#fff' , borderRadius: '10px' }}></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBarTimer;
