import {useState,useEffect,memo} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import {getNewsById} from '../../services/get.js';
import { updateCurrentData } from '../../actions/index.js';
import './item.css';

function Item({item_id,updateCurrentData}){
// внутренний стейт кажлой новости
  const [data,setData] = useState(null);
// после монтирования компонента делаем запрос на сервер по переданному в компонент id и обновляем стейт
  useEffect(() => {
    getNewsById(item_id).then(data => setData(data));
    return () => {setData(null)} // при размонтировании "обнуляем" стейт
  },[item_id]);
// функция для преобразования миллисекунд в формат DD:MM:YY HH:MM:SS
  function setTime(time){
    let date = new Date(time * 1000);
    return date.toLocaleString();
  };
// если data есть то рендерим компонент
  return data ? (
    <div className='item'>
      <div className='item__header'>
        <Link to={{pathname: `/info/${data.id}`}}
        onClick={() => updateCurrentData(data)}
        >
          <h2 className='item__label'>{data.title}</h2>
        </Link>
        <span className='item__comments-count'>{data.descendants}</span>
      </div>
      <div className='item__info'>
        <div className='score'>
          Рейтинг: {data.score}
        </div>
        <div className='author'>
          {data.by}
        </div>
        <div className='date'>
          {setTime(data.time)}
        </div>
      </div>
    </div>
  ) : null // иначе не рендерим
};

const mapDispatchToProps = {
  updateCurrentData,
};

export default memo(connect(null,mapDispatchToProps)(Item));