import React from 'react';
import CountUp from 'react-countup';

import { IoIosTime } from 'react-icons/io';
import { AiTwotoneLike } from 'react-icons/ai';
import { AiFillProject } from 'react-icons/ai';

// import parallax from '../statistics/sven-mieke-fteR0e2BzKo-unsplash.jpg'

const Statistics = () => {
  return (
    <>
      <div className="parallax">
        <div className="parallax-inner container">
          <div className="row text-center">
            <div className="col-4">
              <AiFillProject size={60} color="white" />
              <h1 className="counter">
                <CountUp start={0} end={200} />
              </h1>
              <h4>Tamamlanmış Layihələrimiz</h4>
            </div>
            <div className="col-4">
              <AiTwotoneLike size={60} color="white" />
              <h1 className="counter">
                <CountUp start={0} end={6000} />
              </h1>
              <h4>Xoşbəxt Müştərimiz</h4>
            </div>
            <div className="col-4">
              <IoIosTime size={60} color="white" />
              <h1 className="counter">
                <CountUp start={0} end={15} suffix=" il" />
              </h1>
              <h4>Fəaliyyət Müddətimiz</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
