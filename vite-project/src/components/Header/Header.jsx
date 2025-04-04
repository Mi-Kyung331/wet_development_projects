import './Header.css';
import clockImg from '../../assets/clock.png'
import titleImg from '../../assets/title.png'
import quotes from '../../assets/quotes.png'

function Header() {


  return(
    <section id="contents"> 
      <div className="wrapper">
        <div className="title">
          <img src={clockImg} className='clock_img' alt="" />
          <div className="title_img">
            <img src={titleImg} alt="1만 시간의 법칙" />
          </div>
        </div>
      </div>

      <div className='intro'>
        <div className='intro_saying'>
          "연습은 어제의 당신보다 당신을 더 낫게 만든다."
        </div>
        <div className='explain'>
          <div className='quotes'>
            <img src={quotes} alt="" />
          </div>
          <p>
            <span>1만 시간의 법칙</span>은<br />
            어떤 분야의 전문가가 되기 위해서는<br />
            최소한 1만 시간의 훈련이 필요하다는 법칙이다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Header;