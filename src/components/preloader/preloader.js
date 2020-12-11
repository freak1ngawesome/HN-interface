import {connect} from 'react-redux';
import loader from './preloader.svg';
import './preloader.css';
import PropTypes from 'prop-types';
// тут все просто: если из стейта приходит loading и он true - показываем загрузку иначе нет
function Preloader({loading}){
  return loading ? (
    <div className='preloader' id='preloader'>
      <img src={loader} alt='loading...' className='preloader__img'/>
    </div>
  ) : null
};

Preloader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  }
};

export default connect(mapStateToProps,null)(Preloader);