<template>
    <nav class="navigation">
        <section class="navigation__header">
            <p class="navigation__header-text">menu</p>
        </section>
        <ul class="navigation__menu">
            <router-link to="/outstanding-orders">
                <li class="navigation__menu-item">
                    <div class="navigation__menu-items-wrapper">
                        <b-icon-file-ruled variant="success" font-scale="2"></b-icon-file-ruled>
                        <span class="navigation__menu-item-name">Outstanding Orders</span>
                    </div>
                </li>
            </router-link>
            <router-link to="/replenish-sample-stock">
                <li class="navigation__menu-item">
                    <div class="navigation__menu-items-wrapper">
                        <b-icon-file-ruled variant="success" font-scale="2"></b-icon-file-ruled>
                        <span>Replenish Sampling Stock</span>
                    </div>
                </li>
            </router-link>
           <router-link to="/replenish-bucket-stock">
                <li class="navigation__menu-item">
                    <div class="navigation__menu-items-wrapper">
                        <b-icon-file-ruled variant="success" font-scale="2"></b-icon-file-ruled>
                        <span>Replenish Bucket Stock</span>
                    </div>
                </li>
           </router-link>
           <router-link to="/materials-to-order">
                <li class="navigation__menu-item">
                    <div class="navigation_menu-items-wrapper">
                        <b-icon-file-ruled variant="success" font-scale="2"></b-icon-file-ruled>
                        <span>Materials to Order</span>
                    </div>
                </li>
            </router-link>
            <router-link to="/material-administration">
                <li class="navigation__menu-item">
                    <div class="navigation__menu-items-wrapper">
                        <b-icon-pencil variant="success" font-scale="2"></b-icon-pencil>
                        <span>Material Administration</span>
                    </div>
                </li>
            </router-link>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {

    },
    data () {
        return {
            message: 'success'
        }
    }
}
</script>

<style lang="scss">
    .navigation {
        border-right: 2px solid lightgrey;
        height: 100%;
        width: 18.75rem;
        box-shadow: 0px 1px 7.5px 1px rgba(0, 0, 0, 0.30);
    &__header {
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        height: 30vh;
        background-color: rgba(0, 128, 50, 0.9);
        border-bottom: 2px solid lightgray;
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
        &-item {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-bottom: 1px solid lightgrey;
            height: 5rem;
            padding-left: $spacing-standard;
            &:hover {
                border-right: 5px solid $color-theme-light;
                background-color: whitesmoke;
            }
        }
    }
}
</style>
