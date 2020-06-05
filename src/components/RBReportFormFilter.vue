<template>
    <div class="filter-wrapper">
        <label
            class="filter__label m-0"
            for="filterInput">
            filter
        </label>
        <b-form-input
            class="filter__input"
            v-model="filter"
            type="search"
            id="filterInput"
            placeholder="Start typing to Search..">
        </b-form-input>
    </div>
</template>

<script>
export default {
    name: 'ReportFormFilter',
    data () {
        return {
            filter: ''
        }
    }
}
</script>

<style lang="scss">
.filter {
    &-wrapper {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        @media (min-width: 768px) {
           flex-direction: row;
           align-items: center;
        }
    }

    &__label {
        letter-spacing: $letter-spacing-medium;
        text-transform: uppercase;
    }

    &__input {
        letter-spacing: $letter-spacing-medium;
        background-color: $rb-controls-dark-background-color !important;
        border: 1px solid rgb(61, 61, 61) !important;
        color: $color-font-primary !important;
        &::placeholder {
            color: $color-font-primary !important;
        }
        &:focus {
            box-shadow: 0 0 0 0.12rem rgba(225, 225, 225, 0.25) !important;
        }
    }
}
</style>
