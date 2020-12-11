import { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import Comment from '../../comment/comment.js';
import { updateCurrentData,loading } from '../../../actions/index.js';
import { getNewsById } from '../../../services/get.js';
import { ButtonPrev, ButtonReload } from '../../buttons/buttons.js'
import './info.css';
// страница новости
function Info({currentData,updateCurrentData,currentLoading,loading}){
// при монтировании, если был переход с main, то кладем id в localStorage, чтобы при перезагрузке страницы в браузере, мы могли сделать запрос на новость
  useEffect(() => {
    if (Object.keys(currentData).length === 0){// если объект из пропс пришел пустой, то значит страница была перезагружена и надо взять id из localStorage и сделать повторый запрос
      const id = window.localStorage.getItem('id');
      getNewsById(id).then(data => {
        updateCurrentData(data);
      });
    } else {
      window.localStorage.setItem('id',`${currentData.id}`);
    };
  },[currentData]);
// если есть data и идет загрузка, от таймера из header то обновляем новость, и комментарии
  if (currentData && currentLoading){
    getNewsById( window.localStorage.getItem('id')).then(data => {
      loading(false);// убираем загрузку
      updateCurrentData(data);// обновляем data
    });
  };
// если есть data, kids и массив не пустой, то возвращаем массив элементов с комментами
  function loadComments(){
    if (currentData && currentData.descendants && currentData.kids.length){
      return currentData.kids.map((comment_id,index) => <Comment comment_id={comment_id} root={true} key={index}/>)
    } else {
      return 'Нет комментариев';
    }
  };
// функция для преобразования миллисекунд в формат DD:MM:YY HH:MM:SS
  function setTime(time){
    let date = new Date(time * 1000);
    return date.toLocaleString();
  };
// массив с клмментами
  const comments = loadComments();

  return (
    <section className='info__list'>
      <div className='info__header'>
        <h2 className='info__label'>{currentData.title}</h2>
        <a href={currentData.url} className='info__url' target='_blank' rel="noreferrer">{currentData.url}</a>
      </div>
      <div className='info__nav-btns'>
        <ButtonPrev/>
        <ButtonReload reload={() => {
          loading(true);
          getNewsById(currentData.id).then(data => {
            updateCurrentData(data);
          });
        }}/>
      </div>
      <hr/>
      <div className='info__block'>
        <div className='info__block_author'>Автор: <span>{currentData.by}</span> </div>
        <div className='info__block_date'>Дата и время публикации: <span>{setTime(currentData.time)}</span> </div>
        <div className='info__block_comments-count'>Количество комментариев: <span>{currentData.descendants}</span> </div>
      </div>
      <div className='info__comments'>
        {comments}
      </div>
    </section>
  )
};

const mapStateToProps = (state) => {
  return {
    currentData: state.currentData,
    currentLoading: state.loading,
  }
};

const mapDispatchToProps = {
  updateCurrentData,
  loading
};

export default memo(connect(mapStateToProps,mapDispatchToProps)(Info));