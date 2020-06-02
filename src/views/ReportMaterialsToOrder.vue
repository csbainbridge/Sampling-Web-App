<template>
    <b-container fluid class="report px-md-0 pl-3">
        <b-row>
            <b-col cols="auto">
                <h2 class="report__title">{{ title }}</h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="auto" v-for="card in cards" :key="card.id">
                <rb-report-card
                    :icon="card.icon"
                    :number="card.number"
                    :name="card.name"
                    :key="card.id">
                </rb-report-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="auto" class="w-100">
                <report-form-filter></report-form-filter>
                <!-- Report Functions Component
                    # Full Width (md)
                    # Small All Items Stack 100% Column width
                    # Child Components: Filter, Download as Spreadsheet
                -->
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import RBReportCard from '@/components/RBReportCard.vue'
import RBReportFormFilter from '@/components/RBReportFormFilter.vue'
export default {
  name: 'ReportMaterialsToOrder',
  components: {
      'rb-report-card': RBReportCard,
      'report-form-filter': RBReportFormFilter
  },
  data () {
      return {
          title: 'Materials to Order',
          cards: [
            {
                id: 1,
                icon: 'box-open',
                number: 17,
                name: 'materials to order'
            },
            {
                id: 2,
                icon: 'book-open',
                number: 12,
                name: 'materials with orders'
            }
          ]
      }
  }
}
</script>

<style lang="scss">
    .report {
        color: $color-font-primary;
        &__title {
            text-transform: capitalize;
            letter-spacing: .2rem;
        }
    }
    .croda-card {
        width: 18rem;
        height: 4rem;
        & > p {
            margin-bottom: 0;
            text-align: center;
        }
    }
</style>
