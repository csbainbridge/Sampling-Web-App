<template>
    <header class="header">
      <h1 class="header__app-branding">{{ app }}</h1>
      <div class="header__right-wrapper">
        <div class="header__right-wrapper-login">
          <b-icon-person-square class="header__right-wrapper-icon"></b-icon-person-square>
          <p class="header__right-wrapper-username">Curtis Bainbridge</p>
          <b-button size="sm" variant="outline-light">Logout</b-button>
        </div>
      </div>
        <!-- <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link> -->
    </header>
</template>

<script>
export default {
  props: {
    app: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
    }
  }
}
</script>
<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $color-theme-dark;
  height: 3rem;
  white-space: nowrap;
  // box-shadow: 10px 1px 7.5px 1px rgba(0, 0, 0, 0.30);
  overflow-x: hidden;

  &__app-branding {
    //  margin-left: calc(1rem * 1.25); /* 20px */
     margin-bottom: 0;
     letter-spacing: 0.1rem;
  }
  @include media-breakpoint-down(sm) {
    &__app-branding {
      font-size: $size-font-small;
    }
 }
  &__right-wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    * {
      margin: 0;
    }

    &-login {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 $spacing-standard 0 $spacing-standard;
      // border-right: .75px solid #fff;
      // border-left: .75px solid #fff;
    }

    @include media-breakpoint-down(md) {
      &-login {
        display: none;
      }
    }
    &-icon {
       margin-right: $spacing-small;
    }

    &-company {
      margin: 0 calc(1rem * 1.25) .5rem calc(1rem * 1.25);
      font-family: $font-family-brand;
      border-bottom: 1px solid #fff;
      letter-spacing: 0.1rem;
      line-height: 2rem;
    }
    &-username {
      margin-right: $spacing-small;
    }
  }
}
</style>
