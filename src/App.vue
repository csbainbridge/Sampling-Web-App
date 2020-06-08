<template>
  <div id="app">
    <!-- New Layout -->
    <b-container fluid class="h-100">
      <!-- Row Header -->
      <b-row class="flex-nowrap">
        <header class="d-flex flex-nowrap w-100 layout-header-height">
          <!-- Column Branding-->
          <b-col
            cols="1"
            sm="1"
            md="2"
            lg="1"
            class="d-flex justify-content-center align-items-center layout-column-left h-100">
            <div class="hamburger">
              <i class="fas fa-bars d-sm-none"></i>
            </div>
          </b-col>
          <b-col cols="1" class="d-none d-lg-flex align-items-center">
             <div class="logo">
              <p class="d-none d-sm-block m-0">{{ RBAppConfig.trademark }}</p>
            </div>
          </b-col>
          <!-- Column Header -->
          <!-- TODO: This requires standard cols class - might work wuthout but check when layout is complete -->
          <b-col
            cols
            md="10"
            lg="10"
            class="d-flex justify-content-between align-items-center h-100">
            <div class="header__title text-nowrap">
              {{ RBAppConfig.name }}
            </div>
            <div class="header__functions d-flex">
              <div class="header__user d-flex align-items-center">
                <p class="d-none d-md-flex m-0">{{ username }}</p>
                  <font-awesome-icon
                    class="header__user-icon mx-1"
                    :icon="['far', 'user-circle']"
                    fixed-width>
                </font-awesome-icon>
              </div>
            </div>
          </b-col>
        </header>
      </b-row>

      <!-- Row Content -->
      <b-row class="layout-content-height flex-nowrap">
        <!-- Column Navigation -->
        <b-col
          cols="1"
          md="2"
          lg="1"
          class="d-sm-flex layout-column-left p-0">
          <!-- Navigation Component -->
          <nav class="navigation">
            <ul class="navigation flex-no-wrap">
              <li class="navigation__link d-flex">
                <font-awesome-icon
                    class="my-2 mx-3"
                    :icon="['fas', 'book-open']"
                    fixed-width>
                </font-awesome-icon>
                <p class="nav__item-text d-none d-md-block d-lg-none m-0">Outstanding Orders</p>
              </li>
              <li class="navigation__link d-flex">
                <font-awesome-icon
                    class="m-2 mx-3"
                    :icon="['fas', 'vial']"
                    fixed-width>
                  </font-awesome-icon>
                <p class="nav__item-text d-none d-md-block d-lg-none m-0">Replenish Sample Stock</p>
              </li>
              <li class="navigation__link d-flex">
                 <font-awesome-icon
                    class="m-2 mx-3"
                    :icon="['fas', 'fill-drip']"
                    fixed-width>
                  </font-awesome-icon>
                <p class="nav__item-text d-none d-md-block d-lg-none m-0">Replenish Bucket Stock</p>
              </li>
              <li class="navigation__link d-flex">
                 <font-awesome-icon
                    class="m-2 mx-3"
                    :icon="['fas', 'box-open']"
                    fixed-width>
                  </font-awesome-icon>
                <p class="nav__item-text d-none d-md-block d-lg-none m-0">Materials to Order</p>
              </li>
              <li class="navigation__link d-flex">
                 <font-awesome-icon
                    class="m-2 mx-3"
                    :icon="['fas', 'industry']"
                    fixed-width>
                  </font-awesome-icon>
                <p class="nav__item-text d-none d-md-block d-lg-none m-0">Production Availability</p>
              </li>
              <li class="navigation__link d-flex">
                 <font-awesome-icon
                    class="m-2 mx-3"
                    :icon="['fas', 'pencil-alt']"
                    fixed-width>
                  </font-awesome-icon>
                <p class="nav__item-text d-none d-md-block d-lg-none m-0">Material Administration</p>
              </li>
            </ul>
          </nav>
          <!-- End of Navigation Component-->
        </b-col>
        <!-- End of Column Navigation -->
        <!-- Column Content -->
        <b-col
          cols
          md="10"
          lg="11">
          <!-- Content Title -->
          <b-row>
            <b-col>Content Title</b-col>
          </b-row>
          <!-- Content Cards -->
          <b-row>
            <b-col
              cols="12"
              sm="6"
              md="4"
              lg="auto">
              <rb-dash-card></rb-dash-card>
            </b-col>
            <b-col
              cols="12"
              sm="6"
              md="4"
              lg="auto">
              <rb-dash-card></rb-dash-card>
            </b-col>
            <b-col
              cols="12"
              sm="6"
              md="4"
              lg="auto">
              <rb-dash-card></rb-dash-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <!-- End of Row Content -->
    </b-container>
  </div>

</template>

<script>
// import RBNavigation from '@/components/RBNavigation.vue'
// import RBUserLogin from '@/components/RBUserLogin.vue'
import RBAppConfig from '@/utilities/RBAppConfig'
import RBDashCard from '@/components/RBReportCard'
// 'rb-navigation': RBNavigation,
//     'rb-user': RBUserLogin
export default {
  components: {
    'rb-dash-card': RBDashCard
  },
  data () {
    return {
      RBAppConfig,
      username: 'CRODA/curtis.bainbridge',
      menuHidden: true
    }
  }
}
</script>

<style lang="scss">
/* Global Imports */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
@import "~@/assets/scss/_rb-reports.scss";
/* New layout CSS */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body, #app {
  height: 100%;
  overflow: auto;
}

// .container-fluid > * *, .border {
//   border: 1px solid #fff;
// }

#app {
  background-image: linear-gradient(to bottom right, #373737, #191919);
}

.layout-header-height {
  height: 3rem;
}

.layout-column-left {
  display: none;
  min-width: 5rem;
}

.layout-content-height {
  min-height: 564px;
  height: calc(100% - 3rem);
} /* ## HERE ##*/

.logo > p {
  text-align: center;
  font-family: 'PT Serif', serif;
}

.hamburger {
  font-size: 1.4rem;
}

header {
  background-color: #003932;
  color: #F7F7F7;
}

.header__title {
    text-transform: uppercase;
    letter-spacing: 0.15rem;
}

.header__user-icon {
    font-size: 1.5rem;
}

.navigation {
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;

    background-color: #1E1E1E;
    color: #F7F7F7;
}
.navigation__link {
    width: 100%;
    list-style: none;
    flex: 0 0 5rem;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navigation__link:hover {
    z-index: 2;
    border-left: 6px solid #3F8957;
    background-color: #333333;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    width: calc(100% + 3px);
    transition: all ease-in 0.1s;
    cursor: pointer;
};

.card {
    height: 5rem;
}

@media (min-width: 576px) {
    .layout-left-column {
        display: flex;
    }
}

@media (min-width: 768px) {
    .nav__item-text {
        font-size: 0.6rem;
    }

}

@media (min-width: 992px) {
    .nav__item {
        padding-left: 0.5rem;
    }
    .logo {
        font-size: 1.25rem;
    }
}

@media (min-width: 1112px) {
    .nav__item-text {
        font-size: 0.8rem;
    }
}

@media (min-width: 1366px) {
    // .navigation__link {
    //     flex-direction: row;
    //     justify-content: flex-start;
    //     padding-left: 0.5rem;
    // }

    // .navigation__link > i {
    //     margin-right: 1rem !important;
    // }
}

@media (min-width: 1440px) {
    .nav__item-text {
        font-size: 0.8rem;
    }
}

// header {
//   background-color: $color-theme-dark;
//   min-height: 2rem;
//   height: 5rem;
//   box-shadow: 10px 1px 7.5px 1px rgba(0, 0, 0, 0.30);
// }

// .brand {
//     color: white;
//     font-family: $font-family-brand;
//     letter-spacing: 0.1rem;
//     line-height: 2rem;
//     margin-left: $spacing-standard;
//     text-decoration: underline;
//     padding-bottom: 5px;

//     &:hover {
//       color: white;
//     }
// }

// .croda-heading-title {
//   letter-spacing: $letter-spacing-medium;
//   text-transform: uppercase;
// }

// @media (max-width: 1072px) {
//   .croda-heading-title {
//      font-size: 1.25rem;
//   }
// }
// .fit-height {
//   height: calc(100% - 5rem) !important/* height minus height of header */
// }

</style>
