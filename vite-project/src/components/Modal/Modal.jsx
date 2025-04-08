import './Modal.css'
import licat from '../../assets/licat.png'

function Modal() {
  return(
    <section id='modal'>
      <div className='modal_wrap'>
        <div className='cheer'>
          <h1>화이팅!</h1>
          <h3>당신의 꿈을 응원합니다!</h3>
        </div>
        <div className='licat_img'>
          <img src={licat} alt="응원하는 라이캣" />
        </div>
        <div className='btn'>
          <button className="close_btn">종료하고 진짜 훈련하러 가기 GO!</button>
          <p>(그냥 닫기 버튼입니다.)</p>
        </div>
      </div>
    </section>
  );
}

export default Modal;