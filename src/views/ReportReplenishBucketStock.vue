<template>
    <b-col
        :class="menuHidden ?
                'col-12 col-sm-10 col-lg-11' :
                'd-md-block col-md-10 col-0 col-lg-10'">
        <!-- Content Title -->
        <b-row :class="menuHidden ? 'd-flex' : 'd-none d-md-flex'">
            <b-col>
                <h2 class="content__title my-3">{{ title }}</h2>
            </b-col>
        </b-row>
        <!-- Content Cards -->
        <b-row :class="menuHidden ? 'd-flex' : 'd-none d-md-flex'">
            <b-col
                v-for="card in cards"
                :key="card.key"
                cols="12"
                sm="6"
                md="4"
                lg="auto">
                <RBReportCard
                    :icon="card.icon"
                    :count="card.count"
                    :name="card.name" />
            </b-col>
        </b-row>
        <!-- Filter Component -->
        <b-row :class="menuHidden ? 'd-flex' : 'd-none d-md-flex'">
            <b-col
                cols="12"
                md="8">
                <label class="report-label my-3" for="filterMaterials">Search</label>
               <RBFilter />
            </b-col>
            <b-col
                cols="12"
                md="4">
                <label class="report-label my-3" for="export-report-btn">Export to .CSV</label>
                <RBBasePrimaryButton id="export-report"></RBBasePrimaryButton>
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
import {
    RBReportCard,
    RBFilter,
    RBBasePrimaryButton
} from '@/components'

export default {
  name: 'ReportReplenishBucket',
  components: {
      RBReportCard,
      RBFilter,
      RBBasePrimaryButton
  },
  props: {
      menuHidden: {
          type: Boolean,
          required: true
      }
  },
  data () {
      return {
          title: 'Replenish Bucket Stock',
          cards: [
            {
                id: 1,
                icon: 'fill-drip',
                count: 15,
                name: 'materials to replenish'
            },
            {
                id: 2,
                icon: 'book-open',
                count: 5,
                name: 'materials with orders'
            }
          ]
      }
  }
}
</script>

<style lang="scss">
    @import '@/assets/scss/_rb-reports.scss';
</style>
