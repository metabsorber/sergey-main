import React from 'react';

function Promo() {
  
  return (
  <section className="promo promo__aboutus">
    <img className="promo__image" src="https://i.postimg.cc/5NDP3ZF6/promo-image-about.png" alt="" />
    <div className="promo__texts promo__texts_aboutus">
      <h2 className="promo__title promo__title_aboutus">Студентам: Центр развития карьеры</h2>
      <h3 className="promo__subtitle promo__subtitle_aboutus">Научим грамотно презентовать свои сильные стороны и опыт</h3>
    </div>
    <div className="promo__buttons">
      <a className="header__button header__button_aboutus" href="#course"><p className="header__button-text">Наши курсы</p></a>
    </div>
  </section>
 
  );
}

export default Promo;
