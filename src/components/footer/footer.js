import './footer.css';
// просто footer
function Footer(){
  return(
    <footer className='footer'>
      <div className='footer__links'>
        <div className='footer__link'>
          <a href='https://github.com/freak1ngawesome' target='_blank' rel='noreferrer'>Github автора</a>
        </div>
        <div className='footer__link'>
          <a href='https://news.ycombinator.com/news' target='_blank' rel='noreferrer'>Hucker News</a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;