<template>
  <div id="app">
    <b-navbar class="header__navigation">
          <h1 class="header-nav__title">Sampling Replenishment</h1>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <p class="header-nav__branding">Croda</p>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

$color-theme-dark: #003932;
$color-theme-light: #078438;
$color-font-primary: #ffffff;
$color-background: whitesmoke;

$size-font-standard: 2rem;
$size-font-large: $size-font-standard * 1.5;
$size-font-small: $size-font-standard * 0.5;
$size-font-x-small: $size-font-standard  * 0.25;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header__navigation {
  background-color: $color-theme-dark;
  height: 2em;
}
</style>
