import { getContentTypeList } from '@/mock/api'
export const formItemMixin = {
  created() {
    this.getList()
  },
  data() {
    return {
      list: [],
    }
  },
  methods: {
    getList() {
      const sourceType = this.column.codeTable
      switch (sourceType) {
        case 'categoryType':
          getContentTypeList().then(res => {
            this.list = res.data
            console.log(res.data, 'categoryType')
          })
          break
        default:
          break
      }
    },
  },
}
