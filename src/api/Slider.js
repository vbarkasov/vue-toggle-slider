const sliderItems = [
  {
    'href': 'http://google.com',
    'content': '<div class="slider-item-promo">Здесь может быть ваша заявка</div>'
  },
  {
    'href': 'http://google.com',
    'content': '<div class="slider-item-promo">Здесь может быть ваша заявка</div>'
  },
  {
    'href': 'http://google.com',
    'content': '<div class="slider-item-promo">Здесь может быть ваша заявка</div>'
  },
  {
    'href': 'http://google.com',
    'content': '<div class="slider-item-content vip-item"><p class="slider-item-vip">&starf; vip</p><p><strong>Срочный выкуп</strong><br/><span>Квартира</span></p><span><span  class="slider-item-text">Сумма сделки</span><br/><span class="slider-item-sum">123 456 Р.</span></p><p><span class="slider-item-text">Стоимость недвижимости</span><br/><span class="slider-item-sum">123 456 Р.</span></p><p>К/З=57%</p><p class="slider-item-more-btn">Подробнее</p><p class="slider-item-more-text">г. Москва, поселение Рязановское, поселок Ерино, ул. Высокая...</p></div>'
  },
  {
    'href': 'http://google.com',
    'content': '<div class="slider-item-promo">Здесь может быть ваша заявка</div>'
  },
  {
    'href': 'http://google.com',
    'content': '<div class="slider-item-promo">Здесь может быть ваша заявка</div>'
  },
  {
    'href': 'http://google.com',
    'content': '<div class="slider-item-promo">Здесь может быть ваша заявка</div>'
  },
  {
    'href': 'http://google.com',
    'content': '<div class="slider-item-promo">Здесь может быть ваша заявка</div>'
  },
  {
    'href': 'http://google.com',
    'content': '<div class="slider-item-promo">Здесь может быть ваша заявка</div>'
  },
  {
    'href': 'http://google.com',
    'content': '<div class="slider-item-promo">Здесь может быть ваша заявка</div>'
  },
  {
    'href': 'http://google.com',
    'content': '<div class="slider-item-promo">Здесь может быть ваша заявка</div>'
  },
  {
    'href': 'http://google.com',
    'content': '<div class="slider-item-promo">Здесь может быть ваша заявка</div>'
  }
]

export default {
  getSliderItems () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(sliderItems)
      }, 100)
    })
  }
}
