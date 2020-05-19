<template>
<!-- Component should have no colour styling - variables should be declared globally  -->
  <nav class="navigation">
    <section class="d-none d-md-flex h-25 navigation__header">
      <p class="navigation__header-text">menu</p>
    </section>
    <ul class="navigation__menu">
      <li class="navigation__menu-item">
        <router-link to="/outstanding-orders">
          <div class="navigation__menu-items-wrapper">
            <b-icon-file-ruled font-scale="2" variant="light"></b-icon-file-ruled>
            <span class="navigation__menu-item-text">Outstanding Orders</span>
          </div>
        </router-link>
      </li>

      <li class="navigation__menu-item">
        <router-link to="/replenish-sample-stock">
          <div class="navigation__menu-items-wrapper">
            <b-icon-file-ruled variant="light" font-scale="2"></b-icon-file-ruled>
            <span class="navigation__menu-item-text">Replenish Sampling Stock</span>
          </div>
        </router-link>
      </li>

      <li class="navigation__menu-item">
        <router-link to="/replenish-bucket-stock">
          <div class="navigation__menu-items-wrapper">
            <b-icon-file-ruled variant="light" font-scale="2"></b-icon-file-ruled>
            <span class="navigation__menu-item-text">Replenish Bucket Stock</span>
          </div>
        </router-link>
      </li>

      <li class="navigation__menu-item">
        <router-link to="/materials-to-order">
          <div class="navigation__menu-items-wrapper">
            <b-icon-file-ruled variant="light" font-scale="2"></b-icon-file-ruled>
            <span class="navigation__menu-item-text">Materials to Order</span>
          </div>
        </router-link>
      </li>

      <li class="navigation__menu-item">
        <router-link to="/material-administration">
          <div class="navigation__menu-items-wrapper">
            <b-icon-pencil variant="light" font-scale="2"></b-icon-pencil>
            <span class="navigation__menu-item-text">Material Administration</span>
          </div>
        </router-link>
      </li>
    </ul>
    <div class="navigation__user-wrapper">
        <rb-user class="d-inline d-md-none"></rb-user>
    </div>
  </nav>
</template>

<script>
import RBUser from '@/components/RB-User.vue'
export default {
  components: {
    'rb-user': RBUser
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
  box-shadow: 1px 10px 7.5px 1px rgba(0, 0, 0, 0.30);
  background-color: rgb(30, 30, 30);
//   border-right: 2px solid lightgrey;
//   height: 100%;
//   width: 18.75rem;
//   box-shadow: 0px 10px 7.5px 1px rgba(0, 0, 0, 0.3);
  @media (min-width: 768px) {
    &__header {
      height: 16rem;
    }
  }
  &__user-wrapper {
    display: flex;
    margin-top: 2rem;
    padding-left: 2rem;
    justify-content: center;
  }
  &__header {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    // height: 30vh;
    background-color: $color-theme-dark;
    // background-color: rgba(0, 128, 50, 0.9);
    // border-bottom: 2px solid rgb(61, 61, 61);
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
      height: 5rem;
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
