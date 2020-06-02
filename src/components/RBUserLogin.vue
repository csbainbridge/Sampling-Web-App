<template>
<!-- TODO: Component should have no colour styling  -->
    <p class="rb-user p-0 m-0">
        <template v-if="loggedIn">
            <div class="d-flex align-items-center flex-wrap flex-md-nowrap">
                <b-icon class="croda-rb-user-svg" icon="people-circle" font-scale="2"/>
                <span class="rb__username croda-rb-user-text">{{ username }}</span>
                <b-button class="rb__btn croda-rb-user-text" variant="outline-light">Logout</b-button>
            </div>
        </template>
        <template v-else>
            <div class="d-flex align-items-center flex-wrap flex-md-nowrap">
                <b-icon class="croda-rb-user-svg" icon="exclamation-circle" />
                <span class="rb__username croda-rb-user-text">Anonymous User</span>
                <b-button class="rb__btn btn-md-sm croda-rb-user-text" variant="outline-light">Login</b-button>
            </div>
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
    svg, .rb__username, .rb__btn {
        font-size: 1rem
    }
    .rb__username {
        margin-left: 1.25rem;
    }
    .rb__btn {
        margin-left: 1.25rem;
        margin-right: 1.25rem;
        text-transform: uppercase;
    }
    @media (max-width: 1072px) {
        .croda-rb-user-text, .croda-rb-user-svg {
            font-size: 0.85rem !important;
        }
        .rb__username {
            margin-left: 0.5rem;
        }
        .rb__btn {
            margin-left: 0.5rem;
            margin-right: 0.5rem;
        }
    }

    @media (max-width: 768px) {
        .croda-rb-user-text {
            font-size: 1rem !important;
        }
        .croda-rb-user-svg {
            font-size: 200% !important;
        }
        .rb-user {
            width: 100%;
        }
        .rb {
            &__username {
                 margin-left: 1rem;
            }
            &__btn {
                margin-left: 0;
                margin-right: 0;
                margin-top: 2rem;
                width: 45rem;
                height: 5rem;
            }
        }
    }
</style>
