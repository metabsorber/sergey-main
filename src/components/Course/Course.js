import React from 'react';

import Card from "../Card/Card";
import data from "../../data/main";
import SearchForm from "../SearchForm/SearchForm";

function Course() {
  const [cards, setCards] = React.useState(data.cards);
  const [readyCards, setReadyCards] = React.useState(data.cards);

  function filterCards(string, filter, sort) {
    let filtCards = cards.filter((card) => {
      return (card.title.indexOf(string) > -1 && (filter == "Нет" ? true : card.name == filter));
    });
    
    if(sort !== "Нет") {
      if(sort == "По возрастанию") {
        filtCards.sort(function(a, b) {
          return a.price - b.price;
        })
      }
      if(sort == "По убыванию") {
        filtCards.sort(function(a, b) {
          return b.price - a.price;
        })
      }
    }

    setReadyCards(filtCards);
  }

  return (
<>
<a name="course"></a>
<section className="course">
<div className="course__column">
  <div className="course__header">
    <h2 className="course__header-title">Наши курсы</h2>
  </div>
  <SearchForm filterCards={filterCards} />
  <div className="course__section course__section_pk course__section_active">
    <div className="course__text">
      
    </div>
    <div className="course__cards">

    {readyCards.map((item) => {
      return (
        <Card
          title={item.title}
          name={item.name}
          text={item.text} 
          price={item.price}
        />
      )
    })}

    </div>
  </div>
</div>
</section>
</>
  );
}

export default Course;

/*

*/