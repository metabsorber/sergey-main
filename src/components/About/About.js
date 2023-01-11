import React from 'react';

function About() {
  
  return (
<section className="about">
    <div className="about__block">
      <h3 className="about__title">Немного о нас</h3>
      <li className="about__point"><img className="about__text-mark" src="https://i.postimg.cc/L434HGF4/about-text-mark.png" alt="" /><p className="about__text">С 2017 года мы ведем подготовку школьников, студентов, молодых специалистов.</p></li>
      <li className="about__point"><img className="about__text-mark" src="https://i.postimg.cc/L434HGF4/about-text-mark.png" alt="" /><p className="about__text">Центр развития карьеры — современная оборудованная учебная площадка.</p></li>
      <li className="about__point"><img className="about__text-mark" src="https://i.postimg.cc/L434HGF4/about-text-mark.png" alt="" /><p className="about__text">Команда «Центр развития карьеры» всегда готова поделиться своим опытом подготовки к собеседованию и поиску работы</p></li>
      <li className="about__point"><img className="about__text-mark" src="https://i.postimg.cc/L434HGF4/about-text-mark.png" alt="" /><p className="about__text">Программы подготовки проводятся off-line и on-line.</p></li>
      <p className="about__text about__text_question">Все, кому близки знания и опыт, присоединяйтесь!</p>
    </div>
  </section>
 
  );
}

export default About;
