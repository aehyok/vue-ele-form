<!--checkbox 多选框-->
<template>
  <div>
    <el-form-item :label="column.title" :prop="column.columnName">
      <el-checkbox-group v-model="value">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{
          city
        }}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  </div>
</template>
<script>
const cityOptions = ['上海', '北京', '深圳', '广州']
export default {
  props: {
    column: {
      type: [Object],
      default: () => {},
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      cities: cityOptions,
    }
  },
  computed: {
    value: {
      get: function() {
        return this.data
      },
      set: function(val) {
        this.$emit('update:data', val)
      },
    },
  },
}
</script>
