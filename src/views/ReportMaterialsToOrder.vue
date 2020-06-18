<template>
    <b-col
        md="11"
        class="p-md-3"
        :class="menuHidden ?
                'col-12 col-sm-10 col-lg-11' :
                'd-md-block col-0 col-md-10 col-lg-10 p-0'">
        <!-- Content Title -->
        <b-row :class="menuHidden ? 'd-flex' : 'd-none d-md-flex'">
            <b-col>
                <h2 class="content__title">{{ title }}</h2>
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
            <b-col cols="12">
               <RBFilter />
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
import {
    RBReportCard,
    RBFilter
} from '@/components'

export default {
  name: 'ReportMaterialsToOrder',
  components: {
      RBReportCard,
      RBFilter
  },
  props: {
      menuHidden: {
          type: Boolean,
          required: true
      }
  },
  data () {
      return {
          title: 'Materials to Order',
          cards: [
            {
                id: 1,
                icon: 'box-open',
                count: 27,
                name: 'materials to order'
            },
            {
                id: 2,
                icon: 'book-open',
                count: 19,
                name: 'materials with orders'
            }
          ]
      }
  }
}
</script>

<style lang="scss">
    .content {
        &__title {
            color: #F7F7F7;
            font-weight: 400;
            letter-spacing: .1rem;
        }
    }
</style>
