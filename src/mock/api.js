// 引入axios
 import axios from 'axios'

 let url ='http://rap2api.taobao.org/app/mock/282580'
 // 内容类型
export const getContentTypeList = () => {
  return axios(`${url}/get/contentType`)
}
