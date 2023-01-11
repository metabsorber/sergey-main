import React from 'react';

import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import img6 from "../../images/6.jpg";
import img7 from "../../images/7.jpg";
import img8 from "../../images/8.jpg";
import img9 from "../../images/9.jpg";

function Team() {
  React.useEffect(() => {
    /*team*/

const teamPoint1 = document.querySelector(".team__point_1");
const teamPoints = document.querySelector(".team__points");
const teamCards = document.querySelector(".team__cards");

let screenWidth = document.documentElement.clientWidth + 17;

function handleWindowResize() {
  screenWidth = document.documentElement.clientWidth + 17;
  if(!teamPoint1.classList.contains("team__point_active")) {
    Array.from(teamPoints.children).forEach(item => {
      console.log(item)
      item.classList.remove("team__point_active")
    });
    teamCards.style.transform = "translateX(-0%)";
    teamPoint1.classList.add("team__point_active");
  }
}
window.addEventListener('resize', handleWindowResize);

teamPoints.addEventListener('click', function (e) {
  if(e.target.classList.contains("team__point")) {
    Array.from(teamPoints.children).forEach(item => {
      item.classList.remove("team__point_active")
    });
    if(screenWidth >= 1200) {
      if (e.target.classList.contains("team__point_1")) {
        teamCards.style.transform = "translateX(-0%)";
        e.target.classList.add("team__point_active");
      }
      if (e.target.classList.contains("team__point_2")) {
        teamCards.style.transform = "translateX(-1200px)";
        e.target.classList.add("team__point_active");
      }
      if (e.target.classList.contains("team__point_3")) {
        teamCards.style.transform = "translateX(-2400px)";
        e.target.classList.add("team__point_active");
      }
    }
    if(screenWidth >= 800 && screenWidth < 1200) {
      if (e.target.classList.contains("team__point_1")) {
        teamCards.style.transform = "translateX(-0%)";
        e.target.classList.add("team__point_active");
      }
      if (e.target.classList.contains("team__point_2")) {
        teamCards.style.transform = "translateX(-800px)";
        e.target.classList.add("team__point_active");
      }
      if (e.target.classList.contains("team__point_3")) {
        teamCards.style.transform = "translateX(-1600px)";
        e.target.classList.add("team__point_active");
      }
      if (e.target.classList.contains("team__point_4")) {
        teamCards.style.transform = "translateX(-2400px)";
        e.target.classList.add("team__point_active");
      }
      if (e.target.classList.contains("team__point_5")) {
        teamCards.style.transform = "translateX(-3200px)";
        e.target.classList.add("team__point_active");
      }
    }
    if(screenWidth < 800) {
      const width = 280 + 30;
      if (e.target.classList.contains("team__point_1")) {
        teamCards.style.transform = "translateX(-0%)";
        e.target.classList.add("team__point_active");
      }
      if (e.target.classList.contains("team__point_2")) {
        teamCards.style.transform = `translateX(-${1*width}px)`;
        e.target.classList.add("team__point_active");
      }
      if (e.target.classList.contains("team__point_3")) {
        teamCards.style.transform = `translateX(-${2*width}px)`;
        e.target.classList.add("team__point_active");
      }
      if (e.target.classList.contains("team__point_4")) {
        teamCards.style.transform = `translateX(-${3*width}px)`;
        e.target.classList.add("team__point_active");
      }
      if (e.target.classList.contains("team__point_5")) {
        teamCards.style.transform = `translateX(-${4*width}px)`;
        e.target.classList.add("team__point_active");
      }
      if (e.target.classList.contains("team__point_6")) {
        teamCards.style.transform = `translateX(-${5*width}px)`;
        e.target.classList.add("team__point_active");
      }
      if (e.target.classList.contains("team__point_7")) {
        teamCards.style.transform = `translateX(-${6*width}px)`;
        e.target.classList.add("team__point_active");
      }
      if (e.target.classList.contains("team__point_8")) {
        teamCards.style.transform = `translateX(-${7*width}px)`;
        e.target.classList.add("team__point_active");
      }
      if (e.target.classList.contains("team__point_9")) {
        teamCards.style.transform = `translateX(-${8*width}px)`;
        e.target.classList.add("team__point_active");
      }
    }
  }
});

/*team*/
  }, []);
  return (
    <section className="team">
    <div className="team__column">
      <h2 className="team__title">Наша команда</h2>
     <div className="team__cards">

        <div className="team__card">
          <img className="team__card-image" src={img1} alt="" />
          <div className="team__card-text">
            <p className="team__card-name">Павел</p>
            <p className="team__card-add">Руководитель</p>
          </div>
        </div>
        <div className="team__card">
          <img className="team__card-image" src={img2} alt="" />
          <div className="team__card-text">
            <p className="team__card-name">Антон</p>
            <p className="team__card-add">Ведущий эксперт</p>
          </div>
        </div>
        <div className="team__card">
          <img className="team__card-image" src={img3} alt="" />
          <div className="team__card-text">
            <p className="team__card-name">Владимир</p>
            <p className="team__card-add">Преподаватель, Главный инженер</p>
          </div>
        </div>

        <div className="team__card">
          <img className="team__card-image" src={img4} alt="" />
          <div className="team__card-text">
            <p className="team__card-name">Илья</p>
            <p className="team__card-add">Преподаватель, ведущий специалист по программированию</p>
          </div>
        </div>
        <div className="team__card">
          <img className="team__card-image" src={img5} alt="" />
          <div className="team__card-text">
            <p className="team__card-name">Николай</p>
            <p className="team__card-add">Специалист</p>
          </div>
        </div>
        <div className="team__card">
          <img className="team__card-image" src={img6} alt="" />
          <div className="team__card-text">
            <p className="team__card-name">Артём</p>
            <p className="team__card-add">Специалист</p>
          </div>
        </div>

        <div className="team__card">
          <img className="team__card-image" src={img7} alt="" />
          <div className="team__card-text">
            <p className="team__card-name">Святослав</p>
            <p className="team__card-add">Преподаватель, технический эксперт</p>
          </div>
        </div>
        <div className="team__card">
          <img className="team__card-image" src={img8} alt="" />
          <div className="team__card-text">
            <p className="team__card-name">Андрей</p>
            <p className="team__card-add">Специалист</p>
          </div>
        </div>
        <div className="team__card">
          <img className="team__card-image" src={img9} alt="" />
          <div className="team__card-text">
            <p className="team__card-name">Глеб</p>
            <p className="team__card-add">Специалист</p>
          </div>
        </div>

      </div>
      <div className="team__points">
        <button className="team__point team__point_1 team__point_active"></button>
        <button className="team__point team__point_2"></button>
        <button className="team__point team__point_3"></button>
        <button className="team__point team__point_4"></button>
        <button className="team__point team__point_5"></button>
        <button className="team__point team__point_6"></button>
        <button className="team__point team__point_7"></button>
        <button className="team__point team__point_8"></button>
        <button className="team__point team__point_9"></button>
      </div>
    </div>
  </section>
  );
}

export default Team;
