<template>
    <div class="filter-wrapper">
        <input
            id="filterMaterials"
            type="search"
            class="filter"
            placeholder="Start typing to filter materials.."
            v-model="filter" />
        <div class="filter__icon-wrapper">
            <font-awesome-icon
                class=""
                :icon="['fas', 'search']"
                fixed-width>
            </font-awesome-icon>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            filterTerm: ''
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');
    .filter {
        color: #dadada;
        &:focus {
            outline: none;
            border: 2px solid #3F8957 !important;
            transition: border ease-in .2s;
            // transition: width ease .4s
        }
        &-wrapper {
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            flex: auto;
        }
        &__icon-wrapper {
            margin-left: 1px;
            padding: 0.8rem;
            font-size: 1.6rem;
            border-top-right-radius: .25rem;
            border-bottom-right-radius: .25rem;
        }
    }

    input[type=search] {
        font-family: 'IBM Plex Sans', sans-serif;
        width: 100%;
        height: 4rem;
        background: #1E1E1E;
        padding: 1.35rem 1rem;
        border: 2px solid #1E1E1E;
        transition: border ease-in .1s;
        font-size: 1rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: .3rem;
        border-bottom-left-radius: .25rem;
        border-top-left-radius: .25rem;
        // transition: width ease .4s
        &::placeholder {
            text-transform: none;
             letter-spacing: .1rem;
        }
    }

    input[type=search],
    .filter__icon-wrapper {
        background: #1E1E1E;
        color: #dadada;
    }

</style>
