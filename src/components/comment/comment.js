import {useState,useEffect,memo} from 'react';
import {getNewsById} from '../../services/get.js';
import './comment.css';
import PropTypes from 'prop-types';

function Comment({comment_id,root}){// получаем id комментария и показатель root, который определяет, является ли комментарий корневой
// стейт комментария
  const [data,setData] = useState(null);
// после монтирования запрашиваем данные комментария
  useEffect(() => {
    // fetch запрос по Id, затем обновления стейта
    getNewsById(comment_id).then(data => {
      setData(data);
      });
  },[comment_id]);
// функция для преобразования миллисекунд в формат DD:MM:YY HH:MM:SS
  function setTime(time){
    let date = new Date(time * 1000);
    return date.toLocaleString();
  };
// функция для сбора списка дочерних комментариев
  function loadComments(){
    // если есть data, в которой есть kids и массив не пустой
    if (data && data.kids && data.kids.length){
      // возвращаем массив компонентов
      return data.kids.map((comment_id,index) => <Comment comment_id={comment_id} key={index}/>)
    } else {
      return null;
    }
  };
  // переменная с массивом, рекурсивно вызываем комментарии
  const comments = loadComments();
  // если есть data, то грузим структуру комментария
  return data ? (
    <div className='comment' id='comment'>
      <div className='comment__header'>
        {data.by}, {setTime(data.time)}
      </div>
      <div className='comment__text' dangerouslySetInnerHTML={{__html: data.text}}></div>
      {root && data && data.kids && data.kids.length  ? <div className='comment__btn' onClick={(e) => {
        e.target.nextSibling.style.display === 'block' ?
        e.target.nextSibling.style.display = 'none' :
        e.target.nextSibling.style.display = 'block'
        // выще описана логика работы конпки показать комментарии, проверка на наличие root
      }}>Показать все комментарии</div> : null}
      <div id={root ? 'descendants root' : 'descendants'} style={root ? {display: 'none'} : {display: 'block'}}>
      {comments}
      </div>
    </div>
  ) : null // иначе не рендерим ничего
};

Comment.propTypes = {
  comment_id: PropTypes.number.isRequired,
  root: PropTypes.bool.isRequired,
};

// экспортируем компонент
export default memo(Comment);