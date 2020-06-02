<template>
      <b-form-group
        class="rb-report-filter"
        label="export as spreadsheet"
        label-cols-md="4"
        label-size="md"
        label-for="downloadReport">
        <b-input-group>
            <b-button
                id="downloadReport">Download</b-button>
        </b-input-group>
    </b-form-group>
</template>

<script>
export default {
    name: 'ReportFormDownload',
    data () {
        return {

        }
    }
}
</script>

<style lang="scss">

</style>
