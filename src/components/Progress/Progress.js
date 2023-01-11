import React from 'react';

function Progress() {
  
  return (
    <section className="progress">
    <img className="progress__background progress__background_1" src="https://i.postimg.cc/MTtLL7gw/progress-background-1.png" alt="" />
    <img className="progress__background progress__background_2" src="https://i.postimg.cc/9McS1881/progress-background-2.png" alt="" />
    <div className="progress__column">
      <div className="progress__item">
        <h3 className="progress__title progress__title_1">1400</h3>
        <h4 className="progress__subtitle">участников</h4>
      </div>
      <div className="progress__item">
        <h3 className="progress__title progress__title_2">45</h3>
        <h4 className="progress__subtitle">работодателей</h4>
      </div>
      <div className="progress__item">
        <h3 className="progress__title progress__title_3">100+</h3>
        <h4 className="progress__subtitle">участников IT конкурсов</h4>
      </div>
      <div className="progress__item">
        <h3 className="progress__title progress__title_4">14</h3>
        <h4 className="progress__subtitle">программ</h4>
      </div>
      <div className="progress__item">
        <h3 className="progress__title progress__title_5">3</h3>
        <h4 className="progress__subtitle">программы по новым профессиям</h4>
      </div>
    </div>
  </section>
  );
}

export default Progress;
