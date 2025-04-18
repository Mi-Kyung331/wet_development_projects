import './CopyRight.css';
import logo from '../../assets/logo.png'

function CopyRight() {
  return(
    <section id='copyright'>
      <div className='logo_img'>
        <img src={logo} alt="weniv" />
      </div>
      <p>
      ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다. <br />
      수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.
    </p>
    </section>
  );
}

export default CopyRight;