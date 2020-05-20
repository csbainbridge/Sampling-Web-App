<template>
    <b-container fluid class="report px-md-0 pl-3">
        <b-row>
            <b-col cols="12">
                <h2>{{  $route.params.report }}</h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="auto">
                <!-- TODO: Create card component
                    #For example
                    #Renders a numeric value
                    #Renders a card title

                    #Replenish Sampling Stock cards would be
                    # Card 1: "8 Materials to Replenish"
                    # Card 3: "4 Materials with orders"
                -->
                <div class="croda-card d-flex align-items-center">
                    <span class="croda-card__number">
                        {{ materials.length }}
                    </span>
                    <p>Outstanding Orders</p>
                </div>

            </b-col>
            <b-col cols="auto">
                 <div class="croda-card d-flex align-items-center">
                    <span class="croda-card__number">
                        1
                    </span>
                    <p>Materials with orders</p>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Report',
  components: {

  },
  data () {
      return {
          materials: ['EM00516', 'SW07992']
      }
  }
}
</script>

<style lang="scss">

    .report > * {
        border: 1px solid lightgray;
    }
    .report {
        color: #333333;
    }

    .croda-card {
        width: 18rem;
        height: 4rem;
    }

    .croda-card > p {
        margin-bottom: 0;
        text-align: center;
    }
</style>
