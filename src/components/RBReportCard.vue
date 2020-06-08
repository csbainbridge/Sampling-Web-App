<template>
    <div class="dash-card">
        <font-awesome-icon class="dash-card__icon" :icon="icon"></font-awesome-icon>
        <div class="dash-card__content">
            <p class="dash-card__content-count">{{ count }}</p>
            <p class="dash-card__content-text">{{ name }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            required: true,
            type: String
        },
        count: {
            required: true,
            type: Number
        },
        name: {
            required: true,
            type: String
        }
    },
    data () {
        return {

        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');
    .dash-card {
        font-family: 'IBM Plex Sans', sans-serif;;
        display: flex;
        align-items: center;
        height: 6rem;
        width: 100%;
        margin-top: 1rem;
        background-color: $dark-background-card;
        border-left: 1rem solid $card-border-color; /* or this color         #3F8957;? */
        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
        box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, .2);

        /* 05.06.2020 TODO: Add media query always 100% up until md size then max-width is  216px */
        @media (min-width: 992px) {
            width: 16rem;
        }

        &__icon {
            margin-left: 1rem;
            font-size: 3rem;
        }

        &__content {
            margin-left: 1rem;
            margin-right: 1rem;

            & > p {
                margin: 0;
            }

            &-count {
                font-size: 2.5rem;
            }

            &-text {
                font-size: .85rem;
                text-transform: uppercase;
                letter-spacing: 0.1rem;
            }
        }
    }
</style>
