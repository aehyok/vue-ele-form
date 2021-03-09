<!--简单文本框-->
<template>
  <el-form-item :label="column.title" :prop="column.name" :rules="rules">
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in cities"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{
          item.value
        }}</span>
      </el-option>
    </el-select>
  </el-form-item>
</template>
<script>
export default {
  props: {
    column: {
      type: [Object],
      default: () => {},
    },
    data: {
      type: String,
      default: () => {},
    },
  },
  data() {
    return {
      cities: [
        {
          value: 'Beijing',
          label: '北京',
        },
        {
          value: 'Shanghai',
          label: '上海',
        },
        {
          value: 'Nanjing',
          label: '南京',
        },
        {
          value: 'Chengdu',
          label: '成都',
        },
        {
          value: 'Shenzhen',
          label: '深圳',
        },
        {
          value: 'Guangzhou',
          label: '广州',
        },
      ],
      rules: [
        {
          required: this.column.required,
          message: '请输入' + this.column.title,
        },
      ],
    }
  },
  computed: {
    value: {
      get: function() {
        return this.data
      },
      set: function(val) {
        console.log('this.select', typeof val, val)
        this.$emit('update:data', val)
      },
    },
  },
}
</script>
