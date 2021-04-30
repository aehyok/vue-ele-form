<template>
<el-col
  :span="columnSpan"
>
  <!--不包含View则是npm组件库中的-->
  <component
    v-if="!column.type.includes('View')"
    :is="column.type + 'View'"
    :column="column"
    :formData="formData"
    :data.sync="formData[column.name]"
    :columnSpan="columnSpan"
  />
  <component
    v-if="column.type.includes('View')"
    :is="column.type || registerComponent"
    :column="column"
    :formData="formData"
    :data.sync="formData[column.name]"
    :columnSpan="columnSpan"
  />
</el-col>
</template>
<script>
import Vue from 'vue'
import textView from '@/components/input/item/textView'
import textareaView from '@/components/input/item/textareaView'
import numberView from '@/components/input/item/numberView'
import dateView from '@/components/input/item/dateView'
import switchView from '@/components/input/item/switchView'
import radioView from '@/components/input/item/radioView'
import checkboxView from '@/components/input/item/checkboxView'
import daterangeView from '@/components/input/item/daterangeView'
import selectView from '@/components/input/item/selectView'
import imageView from '@/components/input/item/imageView'

export default {
  name: 'formView',
  components: {
    textView,
    textareaView,
    numberView,
    dateView,
    daterangeView,
    switchView,
    radioView,
    checkboxView,
    selectView,
    imageView,
  },
  props: {
    column: {
      type: Object,
      default: () => [],
    },
    formData: {
      type: Object,
      default: () => {},
    },
    columnSpan: {
      type: Number,
      default: 12,
    },
  },
  created() {
    console.log(this, 'this.formView')
  },
  filters: {
    registerComponent(componentName) {
      console.log(componentName, 'this.componentName')
      return Vue.extend(componentName.default)
      // return import(`@/components/input/item/${componentName}.vue`).then(
      //   component => {
      //     console.log(component, 'component')
      //     return Vue.extend(component.default)
      //   },
      // )
    },
  },
  methods: {},
}
</script>
<style scoped></style>
