// импортируем нужные зависимости
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Main from '../pages/main/main.js';
import Info from '../pages/info/info.js';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import Preloader from '../preloader/preloader.js';

import './app.css'

// оборачиваем наши компоненты в контейнер и роутер
function App() {
  return (
    <Router> 
      <Preloader/>
      <div className='container'>
        <Header/>
        <Switch>
            <Route path='/info' component={Info} />
            <Route path='/' component={Main} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
};
// экспортируем
export default App;
