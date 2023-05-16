import React from 'react'
import CitySlider from './Utils/CitySlider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Styles/top-cities.css'; 
import Slider from 'react-slick';


const TopCities = () => {
  return (
    <div>
    <div className="top-cities-wrapper">
      <h1>Top Cities in India </h1>
      <hr
        style={{
          backgroundColor: '#ffbb58',
          width: '75px',
          height: '2px',
          border: 'none',
          marginTop: '0px',
          marginLeft: '0px',
          marginBottom: '20px'
        }}
      />
      <div className="top-cities-carousel-wrap">
        <CitySlider />
      </div>
      <hr
        style={{
          height: '1px',
          color: '#e7e7e7',
          borderTop: 'none',
          borderLeft: 'none'
        }}
      />
    </div>
    <hr className="section-divide-hr" />
  </div>
  )
}

export default TopCities