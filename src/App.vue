<template>
  <div id="app">
    <TheHeader></TheHeader>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
/*
Global Color Theme Config
*/
$color-theme-dark: #003932;
$color-theme-light: #008032;
$color-font-primary: #ffffff;
$color-background: whitesmoke;
/*
Global Font Config
Standard 16px
Large  48px
Small 12px
Extra Small 8px
*/
$size-font-standard: 1rem;
$size-font-large: $size-font-standard * 3;
$size-font-medium: $size-font-standard * 2;
$size-font-small: $size-font-standard * 0.75;
$size-font-x-small: $size-font-standard  * 0.5;
$font-family-default: 'Open Sans', sans-serif;;
$font-family-brand: 'IBM Plex Serif', serif;
/*
Spacing Config
*/
$spacing-standard: calc(1rem * 1.25);
$spacing-small: calc(1rem / 2);
#app {
  font-family: $font-family-default;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-font-primary;
}
h1 {
  font-size: $size-font-medium * 0.75;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $color-theme-dark;
  height: 3rem;
  white-space: nowrap;
  border-bottom: 3px solid $color-theme-light;
}
.header__app-branding {
  margin-left: calc(1rem * 1.25); /* 20px */
  margin-bottom: 0;
  letter-spacing: 0.2rem;
}
.header__right-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

    * {
      margin: 0;
    }

    .header__login-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 $spacing-standard 0 $spacing-standard;
      border-right: .75px solid #fff;
      border-left: .75px solid #fff;
    }

    .header__icon {
      margin-right: $spacing-small;
    }

    .header__company {
      margin: 0 calc(1rem * 1.25) 0 calc(1rem * 1.25);
      font-family: $font-family-brand;
      border-bottom: 1px solid #fff;
      letter-spacing: 0.1rem;
      line-height: 2rem;
    }
    .header__username {
      margin-right: $spacing-small;
    }
}
</style>
