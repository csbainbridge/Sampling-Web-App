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
            <div class="functions-wrapper">
                <report-form-filter></report-form-filter>
                    <!-- <label class="filter__label" for="filter">Filter Materials</label>
                    <input class="filter__input" id="filter" type="search" name="filter" placeholder="Search"> -->
            </div>
                <!-- <div class="functions__download-wrapper">
                    <label class="download__label" for="filter">Export to Spreadsheet</label>
                    <button class="download__input" type="button" id="button" name="download" value="Download"></button>
                </div> -->
            <!-- <report-form-download></report-form-download> -->
            <!-- Report Functions
                # Full Width (md)
                # Small All Items Stack 100% Column width
                # Child Components: Filter, Download as Spreadsheet
            -->
        </b-row>
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
                number: 89,
                name: 'Open Orders'
            }
          ]
      }
  }
}
</script>

<style lang="scss">

</style>
