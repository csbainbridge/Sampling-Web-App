<template>
    <header class="header">
      <h1 class="header__app-branding">Sampling Replenishment</h1>
      <div class="header__right-wrapper">
        <div class="header__login-wrapper">
          <b-icon-person-square class="header__icon"></b-icon-person-square>
          <p class="header__username">{{ username }}</p>
          <b-button size="sm" variant="outline-light">Logout
          </b-button>
        </div>
        <h1 class="header__company">CRODA</h1>
      </div>
        <!-- <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link> -->
    </header>
</template>

<script>
export default {
  data: function () {
    return {
      username: 'Joe Bloggs'
    }
  }
}
</script>
<style scoped>

</style>
