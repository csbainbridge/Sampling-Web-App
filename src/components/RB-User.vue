<template>
<!-- TODO: Component should have no colour styling  -->
    <p class="rb-user p-0 m-0">
        <template v-if="loggedIn">
            <b-icon icon="people-circle" />
            <span class="rb__username">{{ username }}</span>
            <b-button class="rb__btn" variant="outline-light">Logout</b-button>
        </template>
        <template v-else>
            <b-icon icon="exclamation-circle" />
            <span class="rb__username">Anonymous User</span>
            <b-button class="rb__btn btn-md-sm" variant="outline-light">Login</b-button>
        </template>
    </p>
</template>

<script>
export default {
  data: function () {
    return {
        loggedIn: true,
        username: 'CRODA/curtis.bainbridge'
    }
  }
}
</script>

<style lang="scss">
    .rb__username {
        margin-left: .5rem;
        margin-right: .5rem;
    }
    @media (max-width: 768px) {
        .rb-user {
            width: 95%;
        }
        .rb__btn {
            margin-top: 1rem;
            width: 90%;
            height: 5rem;
      }
    }

     @media (max-width: 768px) {

     }
    .rb__btn {
        margin-right: 0.5rem;
    }
</style>
