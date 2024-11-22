<template>
  <ConfirmDialog
    :title="fillAnswer ? 'Do you want to continue with the content filled in last time?' : 'Do you want to continue with the last submission?'"
    @confirm="handleSubmit"
  />
</template>
<script setup>
import { useSurveyStore } from '../../stores/survey'

import { getSurveyData } from '../../utils/storage'

import ConfirmDialog from '../ConfirmDialog.vue'

const surveyStore = useSurveyStore()
const { fillAnswer } = surveyStore.baseConf || {}

const handleSubmit = () => {
  const surveyPath = surveyStore.surveyPath
  const data = getSurveyData(surveyPath)
  surveyStore.setFormValues(data)
}
</script>
<style lang="scss" scoped></style>
