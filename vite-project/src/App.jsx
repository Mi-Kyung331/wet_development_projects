import './App.css'
import { useState } from 'react';

import clockImg from './assets/clock.png'
import titleImg from './assets/title.png'
import quotes from './assets/quotes.png'
import click from './assets/click.png'
import loading from './assets/loading.png'

import CopyRight from './components/CopyRight/CopyRight'
import Modal from './components/Modal/Modal'

function App() {


  return (
    <div>
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

      <div class="inputs">
        <div class="field">
          <p>나는</p>
          <input type="text" id='field_value' placeholder="예) 프로그래밍" />
          <p>전문가가 될 것이다.</p>
        </div>
        <div class="time">
          <p>그래서 앞으로 매일 하루에</p>
            <input type="number" id="time_value" placeholder="예) 5"></input>           
          <p>시간씩 훈련할 것이다.</p>        
        </div>
      </div>

      <div class="start">
          <div class="btn_wrap">
            <button class="start_btn">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
            <div class="click_img">
              <img src={click} alt="" />
            </div>
          </div>
        </div>

        <div class="result_loading">
          <div class="img_wrap">
            <img src={loading} alt="로딩 중" />
          </div>
        </div>

        <div class="result">
          <div class="result_wrap">
            <div>
              당신은 <span class="field_result"></span>전문가가 되기 위해서
            </div>
            <div>
              대락 <span class="time_result"></span>일 이상 훈련하셔야 합니다!
            </div>
          </div>
          <div class="buttons">
            <div class="go">
              <button class="modal_btn">훈련하러 가기 GO!GO!</button>
            </div>
            <div class="share">
              <button class="share_btn">공유하기</button>
            </div>
          </div>
        </div>
    </section>

  <Modal />

  <CopyRight />
  </div>

  );
  
}

export default App