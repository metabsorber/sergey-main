import React from 'react';
import './SearchForm.css';

import searchFormIcon from '../../images/search-form__icon.svg';
import searchFormReset from '../../images/search-form__reset.svg';

function SearchForm(props) {
  const [reset, setReset] = React.useState(false);
  function checkValueInput(e) {
    if (e.target.value === '') {
      setReset(false);
    } else {
      setReset(true);
    }
  }

  const [movie, setMovie] = React.useState('');
  function handleChangeMovie(e) {
    setMovie(e.target.value);
    checkValueInput(e);
  }

  function clearInput() {
    setMovie('');
    setReset(false);
  }

  const [screenWidth, setScreenWidth] = React.useState(document.documentElement.clientWidth);
  function handleWindowResize() {
    setScreenWidth(document.documentElement.clientWidth);
  }
  window.addEventListener('resize', handleWindowResize);

  const [checkbox, setCheckbox] = React.useState(false);
  function handleCheckbox() {
    setCheckbox(!checkbox);
  }

  function handleSubmitButton() {
    props.filterCards(movie, filter, sort);
  }

  /*const searchForm = (
    <div className="search-form__form">
      <div className={`search-form__checkbox ${checkbox === true && 'search-form__checkbox_active'}`} onClick={handleCheckbox}>
        <div className={`search-form__checkbox-item ${checkbox === true && 'search-form__checkbox-item_active'}`}></div>
      </div>
      <p className="search-form__checkbox-title"></p>
    </div>
  );*/
  const filterRef = React.useRef();
  const [filter, setFilter] = React.useState("Нет");

  const sortRef = React.useRef();
  const [sort, setSort] = React.useState("Нет");

  const searchForm = (
  <div className="search-form__filter-overlay">
    <div className="search-form__filter">
      <p className="search-form__filter-text">Фильтрация</p>
      <select className="search-form__filter-select" name="select" size="1" ref={filterRef} onChange={ChangeFilter}>
        <option selected value="Нет">Нет</option>
        <option value="Теория">Теория</option>
        <option value="Практика">Практика</option>
        <option value="Теория + Практика">Теория + Практика</option>
      </select>
    </div>

    <div className="search-form__filter">
      <p className="search-form__filter-text">Сортировка</p>
      <select className="search-form__filter-select" name="sort" size="1" ref={sortRef} onChange={ChangeSort}>
        <option selected value="Нет">Нет</option>
        <option value="По возрастанию">По возрастанию</option>
        <option value="По убыванию">По убыванию</option>
      </select>
    </div>
  </div>
  );
  
  function ChangeFilter() {
    setFilter(filterRef.current.value);
  }
    
  function ChangeSort() {
    setSort(sortRef.current.value);
  }

  return (
    <section className="search-form">
      <div className="search-form__block">
        <div className="search-form__block-input">
          <img className="search-form__icon" src={searchFormIcon} alt="Инкона лупы" />
          <input className="search-form__input" value={movie} onChange={handleChangeMovie} type="text" placeholder="" required/>
          <img className={`search-form__reset ${reset === false ? 'search-form__reset_inactive' : ''}`} src={searchFormReset} alt="Копка, стирающая поля ввода" onClick={clearInput} />
          <div className="search-form__search" onClick={handleSubmitButton}></div>
        </div>
        {screenWidth >= 723 && searchForm}
      </div>
      {screenWidth < 723 && searchForm}
      <div className="search-form__border"></div>
    </section>
  );
}

export default SearchForm;

//          <div className="search-form__reset"></div>
