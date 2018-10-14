<template>
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <div class="vip-line">
      <div v-if="sliderIsVisible">
        <ToggleSlider></ToggleSlider>
      </div>
      <a href="" v-on:click.prevent="toggleSlider" class="vip-link">
        <span class="vip-text" v-if="!sliderIsVisible">Vip-лента</span>
        <span class="vip-arrow">
          <span class="vip-arrow-icon" :class="{ 'vip-arrow-icon_down': sliderIsVisible }"></span>
        </span>
      </a>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>

</template>

<script>
import ToggleSlider from './ToggleSlider'

export default {
  name: 'HelloWorld',
  components: {
    ToggleSlider
  },
  data () {
    return {
      sliderIsVisible: false
    }
  },
  methods: {
    toggleSlider: function () {
      this.sliderIsVisible = !this.sliderIsVisible
    }
  }
}
</script>

<style lang="scss" scoped>
  p {
    text-align: justify;
    padding: 0 10%;
  }

  .vip-line {
    text-align: center;
    border-top: 1px solid #DEDEDE;
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    box-shadow: 0 3px 6px 0 rgba(200, 200, 200, 0.7) ;
    -moz-box-shadow: 0 3px 6px 0 rgba(200, 200, 200, 0.7) ;
    -webkit-box-shadow: 0 3px 6px 0 rgba(200, 200, 200, 0.7) ;
    -khtml-box-shadow: 0 3px 6px 0 rgba(200, 200, 200, 0.7) ;
  }

  .vip-link {
    text-decoration: none;
    display: block;
    min-height: 23px;
    padding-top: 0;
    overflow: visible;
    position: relative;

    .vip-text {
      font-size: 14px;
      font-weight: bold;
      text-decoration: none;
      color: #FFAE32;
      display: block;
      padding: 10px 0 12px;
      text-align: center;
    }

    .vip-arrow {
      display: inline-block;
      vertical-align: top;
      position: absolute;
      left: calc(50% - 22px);
      background-color: white;
      height: 13px;
      width: 43px;
      bottom: -13px;
      padding: 0;

      border-top: 0 solid #D5D5D3;
      border-left: 1px solid #e5e5e5;
      border-right: 1px solid #e5e5e5;
      box-shadow: 0 3px 6px 0 rgba(200, 200, 200, 0.7) ;
      -moz-box-shadow: 0 3px 6px 0 rgba(200, 200, 200, 0.7) ;
      -webkit-box-shadow: 0 3px 6px 0 rgba(200, 200, 200, 0.7) ;
      -khtml-box-shadow: 0 3px 6px 0 rgba(200, 200, 200, 0.7) ;

      &-icon {
        display: inline-block;
        vertical-align: top;
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 451.847 451.847'><path d='M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z' fill='#000000'/></svg>");
        position: relative;
        top: -9px;

        &_down {
          -webkit-transform: rotate(180deg);
          -moz-transform: rotate(180deg);
          -ms-transform: rotate(180deg);
          -o-transform: rotate(180deg);
          transform: rotate(180deg);
        }
      }
    }
  }
</style>
