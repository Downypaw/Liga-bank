import React from 'react';
import {useRef} from 'react';
import Slider from 'infinite-react-carousel';
import {IMAGE_WIDTH} from '../../const.js';

export default function PromoSlider() {
  const sliderRef = useRef();

  return (
    <Slider className="slider" ref={sliderRef} arrows={false} dots={true} dotsClass={'slider__controls'} autoplay={true} autoplaySpeed={4000}>
      <div
        className="slider__item slider__item--first"
        onFocus={(evt) => {
          evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.scrollLeft = 0;
          setTimeout(() => {evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.scrollLeft = 0}, 0);
          sliderRef.current.slickGoTo(0);
        }}
      >
        <div className="slider__container container">
          <h2 className="slider__headling">Лига Банк</h2>
          <p className="slider__description">Кредиты на любой случай</p>
          <a className="slider__link" href="#calculator">Рассчитать кредит</a>
        </div>
      </div>
      <div
        className="slider__item slider__item--second"
        onFocus={(evt) => {
          evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.scrollLeft = 0;
          setTimeout(() => {evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.scrollLeft = 0}, 0);
        }}
      >
        <div className="slider__container container">
          <h2 className="slider__headling">Лига Банк</h2>
          <p className="slider__description">Ваша уверенность в завтрашнем дне</p>
        </div>
      </div>
      <div
        className="slider__item slider__item--third"
        onFocus={(evt) => {
          evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.scrollLeft = 0;
          setTimeout(() => {evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.scrollLeft = 0}, 0);
          sliderRef.current.slickGoTo(2);
        }}
      >
        <div className="slider__container container">
          <h2 className="slider__headling">Лига Банк</h2>
          <p className="slider__description">Всегда рядом</p>
          <a className="slider__link" href="#offices">Найти отделение</a>
        </div>
      </div>
    </Slider>
  );
}
