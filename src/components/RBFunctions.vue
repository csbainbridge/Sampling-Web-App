<template>
    <div class="header__functions d-flex">
      <RBFunctionsUser :username="username" />
    </div>
</template>

<script>
import RBFunctionsUser from '@/components/RBFunctionsUser'

export default {
    components: {
        RBFunctionsUser
    },
    props: {
        username: {
            type: String,
            required: false
        }
    },
    data () {
        return {

        }
    }
}
</script>

<style lang="scss">

</style>
