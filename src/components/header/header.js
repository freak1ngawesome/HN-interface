// import React from 'react';
import {useState,useEffect} from 'react';
import {getNewsIds} from '../../services/get.js';
import {connect} from 'react-redux';
import {updateIds,loading} from '../../actions/index.js';
import './header.css';
import PropTypes from 'prop-types';

function Header ({updateIds,loading}) {
// стейт для работы таймера
  const [time,setTime] = useState(timer());
// после монтирования компонента устанавливаем таймер для работы часов
  useEffect(() => {
    let updateTime = setInterval(() => {
      setTime(timer());
    },
    1000);
    loading(true); // показываем загрузку
    getNewsIds().then(data => { // делаем запрос на сервер
      updateIds(data); // получаем массив id постов и обновляем store
      loading(false); // скрываем загрузку
    });
    return function clean(){
      clearInterval(updateTime);// отписка от таймера
    };
  },[time.m]);// вызов хука раз в минуту
  // функция таймер
  function timer(){
    const date = new Date();
    let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return {
      h,
      m,
    }
  };

    return (
      <>
        <header className='header'>
          <h1 className='header__label' id='header'>
            Hacker News
          </h1>
          <div className='header__timer' id='timer'>
            <span>{time.h}</span>:<span>{time.m}</span>
          </div>
        </header>
      </>
    );
};

Header.propTypes = {
  updateIds: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  updateIds,
  loading,
};


// экспорт шапки
export default connect(null,mapDispatchToProps)(Header);