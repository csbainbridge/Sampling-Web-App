<template>
    <button :id="id" class="rb-secondary-btn rb-secondary-btn--fill">{{ name }}</button>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
            default: 'Button'
        }
    }
}
</script>

<style lang="scss">
// TODO: ADD :active states to button
    .rb-secondary-btn {
        position: relative;
        height: 4rem;
        width: 100%;
        padding: 5px 5px;
        border: 2px solid $rb-primary-text-colour-dark-1;
        border-radius: .2rem;
        outline: 0;
        background: none;
        font-weight: 700;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: .3rem;
        color: $rb-primary-text-colour-dark-1;
        cursor: pointer;
        z-index: 1;
        transition: 0.1s ease-in;
        -o-transition: 0.1s ease-in;
        -ms-transition: 0.1s ease-in;
        -moz-transition: 0.1s ease-in;
        -webkit-transition: 0.1s ease-in;
        &:hover {
            color: $dark-background-card;
            font-weight: 700;
        }
        &--fill {
            background-color: transparent;
            &::before {
                content: "";
                position: absolute;
                background: $rb-primary-text-colour-dark-1;
                bottom: 0;
                left: 0;
                right: 0;
                top: 100%;
                z-index: -1;
                -webkit-transition: top 0.1s ease-in;
            }
            &:hover::before {
                top: 0;
            }
        }
    }
</style>
