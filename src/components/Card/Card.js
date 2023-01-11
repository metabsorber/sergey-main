import React from 'react';

function Card(props) {
  
  return (
    <div className="course__card">
    <p className="course__card-step">{props.title}</p>
   
    <div className="course__card-info">
      <div className="course__card-texts">
        <p className="course__card-info-title">{props.name}</p>
        <div>
          <p className="course__card-info-text">{props.text}</p>
          <p className="course__card-info-text">Группы 20-25 чел</p>
        </div>
      </div>
      <div className="course__card-info-add">
        <p className="course__card-info-add-price">{props.price} ₽/курс</p>
        <div className="course__card-info-add-links">
          <a className="course__card-info-add-more" href="#popup:star"><p className="course__card-info-add-more-text">Подробнее</p></a>
          <a className="header__button header__button_course" href="#"><p className="header__button-text">Бронировать место</p></a>
        </div>
      </div>
    </div>
    <div className="course__card-flag">
      <p className="course__card-flag-text">18+</p>
      <img className="course__card-flag-image" src="https://i.postimg.cc/L649hvmt/course-card-flag-image.png" alt="" />
      <img className="course__card-flag-image course__card-flag-image_blue" src="https://i.postimg.cc/HsSpM5Lf/course-card-flag-image-blue.png" alt="" />
    </div>
  </div>
  );
}

export default Card;
