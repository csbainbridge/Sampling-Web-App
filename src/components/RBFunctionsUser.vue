<template>
    <div class="header__user d-flex align-items-center">
        <p class="d-none d-md-flex m-0">{{ username }}</p>
            <font-awesome-icon
                class="header__user-icon mx-1"
                :icon="usernameWorking ?
                    ['fas', 'user-circle'] :
                    ['far', 'user-circle']"
                fixed-width>
            </font-awesome-icon>
    </div>
</template>

<script>
export default {
    data () {
        return {
            username: 'CRODA/curtis.bainbridge',
            usernameWorking: true
        }
    }
}
</script>

<style lang="scss">

</style>
