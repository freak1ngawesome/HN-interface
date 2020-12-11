import {connect} from 'react-redux';
import Item from '../../item/item.js';
import { ButtonReload } from '../../buttons/buttons.js';
import {updateIds,loading} from '../../../actions/index.js';
import {getNewsIds} from '../../../services/get.js';
import './main.css';
import PropTypes from 'prop-types';

// главная страница с новостями
function Main({ids,updateIds,loading}){
  return (
    <section className='main__list'>
      <ButtonReload reload={() => {// обновляем список id по нажатию
        loading(true); // включаем загрузку
        getNewsIds().then(data => {
          updateIds(data);
          loading(false);// скрываем загрузку
        });
      }}/>
      {ids.map((item_id,index) => <Item item_id={item_id} key={index}/>)}
    </section>
  )
};

Main.propTypes = {
  ids: PropTypes.array.isRequired,
  updateIds: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    ids: state.ids,
  }
};
const mapDispatchToProps = {
  updateIds,
  loading,
};

export default connect(mapStateToProps,mapDispatchToProps)(Main);