<template>
 <b-col
  md="1"
  lg="1"
  class="d-sm-flex layout-column-left p-0 nav-toggle--transition"
  :class="menuHidden ? 'col-1 col-lg-1' : 'd-flex col-12 col-md-2 col-lg-2'">
  <!-- Navigation Component -->
  <!-- TOOD: Move to RBNavigation.vue and add router links -->
  <nav class="navigation">
    <ul class="navigation flex-no-wrap">
      <router-link to="/report/outstanding-orders" class="navigation__link navigation__link--border-none d-flex">
        <li class="navigation__link d-flex pl-2 pl-md-0"
          :class="menuHidden ?
            'flex-column pl-sm-0' :
            'flex-row flex-md-column flex-xl-row justify-content-start justify-content-md-center justify-content-xl-start pl-2'">
          <font-awesome-icon
              class="my-2 mx-3"
              :icon="['fas', 'book-open']"
              fixed-width>
          </font-awesome-icon>
          <p class="navigation__link-item-text m-0">
            {{ menuHidden ?
              'OSO' :
              'Outstanding Orders' }}
          </p>
        </li>
      </router-link>
      <router-link to="/report/replenish-sample-stock" class="navigation__link navigation__link--border-none d-flex">
        <li class="navigation__link d-flex pl-2 pl-md-0"
          :class="menuHidden ?
            'flex-column pl-sm-0' :
            'flex-row flex-md-column flex-xl-row justify-content-start justify-content-md-center justify-content-xl-start pl-2'">
          <font-awesome-icon
              class="m-2 mx-3"
              :icon="['fas', 'vial']"
              fixed-width>
            </font-awesome-icon>
          <p class="navigation__link-item-text m-0">
            {{ menuHidden ?
              'Sample Stock' :
              'Replenish Sample Stock' }}
          </p>
        </li>
      </router-link>
      <router-link to="/report/replenish-bucket-stock" class="navigation__link navigation__link--border-none d-flex">
        <li class="navigation__link d-flex pl-2 pl-md-0"
          :class="menuHidden ?
            'flex-column pl-sm-0' :
            'flex-row flex-md-column flex-xl-row justify-content-start justify-content-md-center justify-content-xl-start pl-2'">
          <font-awesome-icon
              class="m-2 mx-3"
              :icon="['fas', 'fill-drip']"
              fixed-width>
            </font-awesome-icon>
          <p class="navigation__link-item-text m-0">
            {{ menuHidden ?
              'Bucket Stock' :
              'Replenish Bucket Stock' }}
          </p>
        </li>
      </router-link>
      <router-link to="/report/materials-to-order" class="navigation__link navigation__link--border-none d-flex">
        <li class="navigation__link d-flex pl-2 pl-md-0"
          :class="menuHidden ?
            'flex-column pl-sm-0' :
            'flex-row flex-md-column flex-xl-row justify-content-start justify-content-md-center justify-content-xl-start pl-2'">
          <font-awesome-icon
              class="m-2 mx-3"
              :icon="['fas', 'box-open']"
              fixed-width>
            </font-awesome-icon>
          <p class="navigation__link-item-text m-0">
            {{ menuHidden ?
              'Order' :
              'Materials to Order' }}
          </p>
        </li>
      </router-link>
      <router-link to="/report/production-availability" class="navigation__link navigation__link--border-none d-flex">
        <li class="navigation__link d-flex pl-2 pl-md-0"
          :class="menuHidden ?
            'flex-column pl-sm-0' :
            'flex-row flex-md-column flex-xl-row justify-content-start justify-content-md-center justify-content-xl-start pl-2'">
          <font-awesome-icon
              class="m-2 mx-3"
              :icon="['fas', 'industry']"
              fixed-width>
            </font-awesome-icon>
          <p class="navigation__link-item-text m-0">
            {{ menuHidden ?
              'Production' :
              'Production Availability' }}
          </p>
        </li>
      </router-link>
      <router-link to="/settings/material-administration" class="navigation__link navigation__link--border-none d-flex">
        <li class="navigation__link d-flex pl-2 pl-md-0"
          :class="menuHidden ?
            'flex-column pl-sm-0' :
            'flex-row flex-md-column flex-xl-row justify-content-start justify-content-md-center justify-content-xl-start pl-2'">
          <font-awesome-icon
              class="m-2 mx-3"
              :icon="['fas', 'pencil-alt']"
              fixed-width>
            </font-awesome-icon>
          <p class="navigation__link-item-text m-0">
            {{ menuHidden ?
              'Admin' :
              'Material Administration' }}
          </p>
        </li>
      </router-link>
    </ul>
  </nav>
  <!-- End of Navigation Component-->
</b-col>
</template>

<script>
export default {
  props: {
    menuHidden: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

.navigation {
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    background-color: $rb-dashboard-navigation-colour;
    &__link {
      width: 100%;
      list-style: none;
      flex: 0 0 5rem;
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      border-color: #3F8957;
      color: $rb-primary-text-colour-dark-2;
      &:hover {
        z-index: 2;
        border-left: 6px solid #3F8957;
        background-color: #333333;
        color: $rb-primary-text-colour-dark-1;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        width: calc(100% + 3px);
        transition: all ease-in 0.1s;
        cursor: pointer;
      }
      &-item-text {
        font-size: 1rem;
        @media (min-width: 576px) {
          font-size: 0.6rem;
        }
        @media (min-width: 992px) {
          font-size: 0.8rem;
        }
      }
      &--border-none {
        border: none !important;
      }
    }
}

.router-link-active {
  color: #F7F7F7 !important;
}

</style>
