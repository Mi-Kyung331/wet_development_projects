import './Header.css';
import clockImg from '../../assets/clock.png'
import titleImg from '../../assets/title.png'
import quotes from '../../assets/quotes.png'

function Header() {

  return(
    <section id="contents"> 
      <div class="wrapper">
        <div class="title">
          <img src={clockImg} className='clock_img' alt="" />
          <div class="title_img">
            <img src={titleImg} alt="1만 시간의 법칙" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;