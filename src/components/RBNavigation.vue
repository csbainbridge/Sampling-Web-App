<template>
  <!-- Navigation Start -->
  <nav class="navigation">
    <section class="d-none d-md-flex h-25 navigation__header">
      <p class="navigation__header-text">menu</p>
    </section>
    <ul class="navigation__menu">

      <router-link to="/report/outstanding-orders">
        <li class="navigation__menu-item">
            <div class="navigation__menu-items-wrapper">
              <b-icon-file-ruled font-scale="2" variant="light"></b-icon-file-ruled>
              <span class="navigation__menu-item-text">Outstanding Orders</span>
            </div>
        </li>
      </router-link>

      <router-link to="/report/replenish-sample-stock">
        <li class="navigation__menu-item">
            <div class="navigation__menu-items-wrapper">
              <b-icon-file-ruled variant="light" font-scale="2"></b-icon-file-ruled>
              <span class="navigation__menu-item-text">Replenish Sampling Stock</span>
            </div>
        </li>
      </router-link>

      <router-link to="/report/replenish-bucket-stock">
        <li class="navigation__menu-item">
            <div class="navigation__menu-items-wrapper">
              <b-icon-file-ruled variant="light" font-scale="2"></b-icon-file-ruled>
              <span class="navigation__menu-item-text">Replenish Bucket Stock</span>
            </div>
        </li>
      </router-link>
      <router-link to="/report/materials-to-order">
        <li class="navigation__menu-item">
            <div class="navigation__menu-items-wrapper">
              <b-icon-file-ruled variant="light" font-scale="2"></b-icon-file-ruled>
              <span class="navigation__menu-item-text">Materials to Order</span>
            </div>
        </li>
      </router-link>

      <router-link to="/report/production-availability">
        <li class="navigation__menu-item">
            <div class="navigation__menu-items-wrapper">
              <b-icon-file-ruled variant="light" font-scale="2"></b-icon-file-ruled>
              <span class="navigation__menu-item-text">Production Availability</span>
            </div>
        </li>
      </router-link>

      <router-link to="/settings/material-administration">
        <li class="navigation__menu-item">
            <div class="navigation__menu-items-wrapper">
              <b-icon-pencil variant="light" font-scale="2"></b-icon-pencil>
              <span class="navigation__menu-item-text">Material Administration</span>
            </div>
        </li>
      </router-link>

    </ul>
    <!-- Navigation end -->

    <!-- User Login -->
    <div class="navigation__user-wrapper">
        <rb-user class="d-inline d-md-none"></rb-user>
    </div>
    <!-- User Login End -->

  </nav>
</template>

<script>
import RBUserLogin from '@/components/RBUserLogin.vue'
export default {
  components: {
    'rb-user': RBUserLogin
  },
  props: {},
  data () {
    return {
      message: 'success'
    }
  }
}
</script>

<style lang="scss">

.navigation {
  height: 100%;
  min-height: 698px;
  box-shadow: 1px 10px 7.5px 1px rgba(0, 0, 0, 0.30);
  background-color: $rb-controls-dark-background-color;
  @media (min-width: 768px) {
    max-width: 24rem; /* TODO: Weather to let this take up full width of its parents column or not - looks very distorted on large displays */
    &__header {
      height: 16rem;
    }
  }
  &__user-wrapper {
    display: flex;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  &__header {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    background-color: $color-theme-dark;
    &-text {
      display: inherit;
      justify-content: flex-end;
      margin-right: $spacing-standard;
      color: #fff;
      right: 0;
      text-transform: uppercase;
      font-size: $size-font-medium;
      letter-spacing: 0.1rem;
    }
  }
  &__menu {
    color: #000;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    &-items-wrapper {
      display: flex;
      align-items: center;
    }
    & > a:hover {
      text-decoration: none;
    }
    &-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 1px solid rgb(61, 61, 61);
      height: 4rem;
      padding-left: 2rem;
      border-right: 0px solid #28a745;
      &:hover {
        border-right: 6px solid #28a745;
        background-color: rgb(68, 68, 68);
        transition: all 0.2s ease-in;
      }
      &-text {
        margin-left: $spacing-standard;
        color: $color-font-primary;
      }
    }
  }
}
</style>
