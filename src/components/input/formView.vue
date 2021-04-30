<template>
  <el-row :gutter="20">
    <template
      v-for="(item, index) in columnList"
    >
      <component-view
        :columnSpan="columnSpan"
        :column="item"
        :formData="formData"
        :key="index+'formView'"
      />
        <template v-for="(child) in item.controls ">
            <template v-if="formData[item.name] === child.value">
              <template v-for="(childColumn, columnIndex) in child.showCondition">
                <component-view
                  :columnSpan="columnSpan"
                  :column="childColumn"
                  :formData="formData"
                  :key="columnIndex+'childColumnView'"
                />
              </template>
            </template>
        </template>
    </template>
  </el-row>
</template>
<script>
import componentView from './componentView'

export default {
  name: 'formView',
  components: {
    componentView,
  },
  props: {
    columnList: {
      type: Array,
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
}
</script>
<style scoped></style>
