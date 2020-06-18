<template>
    <div class="filter-wrapper">
        <div class="filter__icon-wrapper">
            <font-awesome-icon
                class=""
                :icon="['fas', 'search']"
                fixed-width>
            </font-awesome-icon>
        </div>
        <input
            id="filterMaterials"
            type="search"
            class="filter"
            placeholder="Start typing to filter materials.." />
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
    .filter {
        &:focus {
            width: 100%;
            outline: none;
            border: 2px solid #3F8957 !important;
            transition: border ease-in .1s;
            transition: width ease .2s
        }
        &-wrapper {
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            flex: auto;
            margin-top: 2rem;
        }
        &__icon-wrapper {
            margin-right: 1px;
            padding: 1.3rem;
            font-size: 1.6rem;
            border-top-left-radius: .25rem;
            border-bottom-left-radius: .25rem;
        }
    }

    input[type=search] {
        width: 25rem;
        height: 5rem;
        background: #1E1E1E;
        padding: 1.35rem 1rem;
        border: 2px solid #1E1E1E;
        transition: border ease-in .1s;
        font-size: 1.5rem;
        letter-spacing: .1rem;
        border-bottom-right-radius: .25rem;
        border-top-right-radius: .25rem;
        transition: width ease .2s
    }
    input[type=search],
    .filter__icon-wrapper {
        background: #1E1E1E;
        color: rgb(142, 142, 142);
    }

</style>
