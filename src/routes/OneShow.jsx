import React from 'react';
import { useParams } from 'react-router-dom';

const OneShow = () => {
    let params = useParams();
    console.log(params);
  return ( 
      <div className='oneshowcont'>
          <div className="topbanner">
      <img src="" alt="" className="imagebanner" />
      <div className="bottombox">
          <div className="recommendation">

      <h4>
                   {/* <span> <AiFillStar className="star"/> </span>  9.7 */}
                  </h4>
      </div>
          </div>

          </div>
      <div className="maininfo"></div>
      <img src="" alt="" className="poster" />
      <div className="data">
          <h3 className="title">jkj</h3>
          <h3>genre</h3>
          <h3>genre</h3>
          <h3>genre</h3>

          <h1>Stortline</h1>
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima odit dolorem facere sit voluptatum animi iusto ipsa dolor possimus eligendi, obcaecati quas harum, suscipit dolorum cumque odio! Quia, voluptatem praesentium!</h3>
      </div>
      </div>
  )
};

export default OneShow;
