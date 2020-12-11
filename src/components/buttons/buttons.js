import { Link } from 'react-router-dom';
import './buttons.css';
// кнопка Назад
export function ButtonPrev(){
  return(
    <div className='buttonPrev nav_btn'>
      <div>
        <Link to={{pathname: `/`}}>Назад</Link>
      </div>
      
    </div>
  )
};
// конпка Обновить
export function ButtonReload({reload}){
  return(
    <div className='buttonPrev nav_btn'>
      <div onClick={() => reload()}>Обновить</div>
    </div>
  )
};


