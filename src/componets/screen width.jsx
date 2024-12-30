import React, { useState, useEffect } from 'react';

const ScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenType,setScreenType]=useState("")
  useEffect(()=>{
    if (screenWidth>300 && screenWidth<400){console.log("mobile")}
    else if (screenWidth>400 && screenWidth<800){console.log("tablet")}
    else if  (screenWidth>800){console.log("desktop")}
    console.log(screenWidth);
  },[screenWidth])
  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);  
    };

    window.addEventListener('resize', updateWidth);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <div>
      <h1>Screen Width: {screenWidth}px</h1>
    </div>
  );
};

export default ScreenWidth;
