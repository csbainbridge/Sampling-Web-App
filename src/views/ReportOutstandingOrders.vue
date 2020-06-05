<template>
    <b-container fluid class="report px-md-0 pl-3">
        <!-- Report Title Row -->
        <b-row>
            <b-col cols="auto">
                <h2 class="report__title">{{ title }}</h2>
            </b-col>
        </b-row>
        <!-- End of Title Row -->

        <!-- Report Cards Row -->
        <b-row>
            <!-- Render Report Cards -->
            <b-col cols="auto" v-for="card in cards" :key="card.id">
                <rb-report-card
                    :icon="card.icon"
                    :count="card.count"
                    :name="card.name"
                    :key="card.id">
                </rb-report-card>
            </b-col>
        </b-row>
        <!-- End of Report Cards Row -->

        <!-- Report Functions Row -->
        <b-row>
            <b-col cols="12" md="auto">
                <report-form-filter></report-form-filter>
            </b-col>
            <div class="functions-wrapper">
            </div>
            <!-- Report Functions
                # Full Width (md)
                # Small All Items Stack 100% Column width
                # Child Components: Filter, Download as Spreadsheet
            -->
        </b-row>
        <!-- End of Report Functions -->
    </b-container>
</template>

<script>
import RBReportCard from '@/components/RBReportCard.vue'
import RBReportFormFilter from '@/components/RBReportFormFilter.vue'
// import RBReportFormDownload from '@/components/RBReportFormDownload.vue'
export default {
  name: 'ReportOutstandingOrders',
  components: {
      'rb-report-card': RBReportCard,
      'report-form-filter': RBReportFormFilter
  },
  data () {
      return {
          title: 'Outstanding Orders',
          cards: [
            {
                id: 1,
                icon: 'book-open',
                count: 89,
                name: 'Open Orders'
            }
          ]
      }
  }
}
</script>

<style lang="scss">

</style>
