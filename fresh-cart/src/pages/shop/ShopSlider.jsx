import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useEffect } from 'react';
import { useMain } from '../../context/MainContext';
function valuetext(value) {
    return `${value}°C`;
  }
  
  export default function ShopRangeSlider() {
    const {sliderValue,setSliderValue}=useMain()
  
    const handleChange = (event, newValue) => {
      setSliderValue(newValue);
    };
    useEffect(()=>{
      console.log(sliderValue)
    },[sliderValue])
    
    return (
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={sliderValue}
          min={10}
          max={200}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          style={{ color: '#FF6F61' }}
        />
      </Box>
    );
  }