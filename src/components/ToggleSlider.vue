<template>
  <div>
    <div class="slider-container">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in sliderItems" :key="`slider-item-${index}`" class="slider-item" @mouseenter.native="mouseOver($event, index)" v-html="item.content">
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
    <a
      v-show="itemOverlay"
      class="item-overlay"
      v-bind:style="{ left: itemOverlayLeft + 'px', top: itemOverlayTop + 'px' }"
      @mouseleave="mouseLeave" v-html="itemOverlayHtml" :href="itemOverlayHref" target="_blank">
    </a>
  </div>
</template>

<script>
import Slider from '../api/Slider'

export default {
  name: 'ToggleSlider',
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 4,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      itemOverlay: null,
      itemOverlayLeft: 0,
      itemOverlayTop: 0,
      sliderItems: []
    }
  },
  methods: {
    mouseOver: function (event, index) {
      this.itemOverlayTop = event.target.getBoundingClientRect().top + 4
      this.itemOverlayLeft = event.target.getBoundingClientRect().left + 4
      this.itemOverlay = this.sliderItems[index]
    },
    mouseLeave: function () {
      this.itemOverlay = null
    }
  },
  computed: {
    itemOverlayHref: function () {
      if (this.itemOverlay && this.itemOverlay.hasOwnProperty('href')) {
        return this.itemOverlay.href
      } else return '#'
    },
    itemOverlayHtml: function () {
      if (this.itemOverlay && this.itemOverlay.hasOwnProperty('content')) {
        return this.itemOverlay.content
      } else return ''
    }
  },
  mounted: function () {
    Slider.getSliderItems().then(response => (this.sliderItems = response))
  }
}
</script>

<style lang="scss">
  .slider-container {
    padding-top: 19px;
    padding-left: 10%;
    padding-right: 10%;
    position: relative;
  }

  .slider-item {
    width: 134px;
    height: 183px;
    background-color: white;
    overflow: hidden;
    padding: 5px;

    .slider-item-content {
      max-height: 173px;
      overflow: hidden;
    }
  }

  .slider-item-promo {
    width: 134px;
    height: 173px;
    background-image: url('../assets/slider-item-bg-grayscale.png');
    color: white;
    padding: 63px 19px 0;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.3;
    overflow: hidden;
    box-sizing: border-box;
  }

  .slider-item-content {
    box-sizing: border-box;
    width: 134px;
    color: white;
    min-height: 173px;
    padding: 6px 11px 15px;
    background-image: url('../assets/slider-item-bg-2.png');
    text-align: left;
    font-size: 11px;

    strong {
      text-decoration: underline;
    }

    p {
      margin: 0;
      padding: 0 0 17px;
    }
  }

  .vip-line {
    .slider-item-more-btn {
      display: block;
      padding: 9px 0;
      margin: 0 -11px 0;
      text-align: center;
      background: #FFAE32;
      font-weight: bold;
      font-size: 12px;
    }

    .slider-item-more-text {
      font-size: 10px;
      padding-top: 10px;
      padding-bottom: 0;
    }

    .slider-item-sum {
      font-size: 16px;
    }

    .slider-item-vip {
      color: #FFAE32;
      padding-bottom: 15px;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    background-size: 10px 15px;
  }

  .swiper-button-prev {
    left: calc(10% - 27px)
  }

  .swiper-button-next {
    right: calc(10% - 27px)
  }

  .item-overlay {
    color: white;
    position: absolute;
    display: block;
    text-decoration: none;
    border: 1px solid gray;
    width: 134px;
    min-height: 173px;
    background: white;
    z-index: 2;
    -webkit-box-shadow: 0 0 3px 4px rgba(255,174,50,1);
    -moz-box-shadow: 0 0 3px 4px rgba(255,174,50,1);
    box-shadow: 0 0 3px 4px rgba(255,174,50,1);

    &:hover {
      color: white;
    }
  }

  .vip-item {
    -webkit-box-shadow: 0 0 3px 4px rgba(255,174,50,1);
    -moz-box-shadow: 0 0 3px 4px rgba(255,174,50,1);
    box-shadow: 0 0 3px 4px rgba(255,174,50,1);
  }

</style>
