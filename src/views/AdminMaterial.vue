<template>
    <b-container fluid class="report px-md-0 pl-3">
        <b-row>
            <b-col cols="auto">
                <h2 class="report__title">{{ title }}</h2>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'MaterialAdministration',
    data () {
        return {
            title: 'Material Administration'
        }
    }
}
</script>

<style lang="scss">

</style>
