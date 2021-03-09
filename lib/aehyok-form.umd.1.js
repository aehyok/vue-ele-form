((typeof self !== 'undefined' ? self : this)["webpackJsonpaehyok_form"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpaehyok_form"] || []).push([[1],{

/***/ "ed96":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9b63e576-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/formView.vue?vue&type=template&id=5196fc95&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-row',{attrs:{"gutter":20}},_vm._l((_vm.columnList),function(item,index){return _c('el-col',{key:index,attrs:{"span":_vm.columnSpan}},[(!item.type.includes('View'))?_c(item.type + 'View',{tag:"component",attrs:{"column":item,"formData":_vm.formData,"data":_vm.formData[item.name]},on:{"update:data":function($event){return _vm.$set(_vm.formData, item.name, $event)}}}):_vm._e(),(item.type.includes('View'))?_c(item.type || _vm.registerComponent,{tag:"component",attrs:{"column":item,"formData":_vm.formData,"data":_vm.formData[item.name]},on:{"update:data":function($event){return _vm.$set(_vm.formData, item.name, $event)}}}):_vm._e()],1)}),1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/input/formView.vue?vue&type=template&id=5196fc95&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./src/components/input/item/textView.vue + 4 modules
var textView = __webpack_require__("6f04");

// EXTERNAL MODULE: ./src/components/input/item/textareaView.vue + 4 modules
var textareaView = __webpack_require__("ab09");

// EXTERNAL MODULE: ./src/components/input/item/numberView.vue + 4 modules
var numberView = __webpack_require__("2242");

// EXTERNAL MODULE: ./src/components/input/item/dateView.vue + 4 modules
var dateView = __webpack_require__("a0cc");

// EXTERNAL MODULE: ./src/components/input/item/switchView.vue + 4 modules
var switchView = __webpack_require__("4236");

// EXTERNAL MODULE: ./src/components/input/item/radioView.vue + 5 modules
var radioView = __webpack_require__("ad79");

// EXTERNAL MODULE: ./src/components/input/item/checkboxView.vue + 4 modules
var checkboxView = __webpack_require__("5a69");

// EXTERNAL MODULE: ./src/components/input/item/daterangeView.vue + 4 modules
var daterangeView = __webpack_require__("99a0");

// EXTERNAL MODULE: ./src/components/input/item/selectView.vue + 4 modules
var selectView = __webpack_require__("8f7c");

// EXTERNAL MODULE: ./src/components/input/item/imageView.vue + 4 modules
var imageView = __webpack_require__("b855");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/formView.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











/* harmony default export */ var formViewvue_type_script_lang_js_ = ({
  name: 'FormView',
  components: {
    textView: textView["a" /* default */],
    textareaView: textareaView["a" /* default */],
    numberView: numberView["a" /* default */],
    dateView: dateView["a" /* default */],
    daterangeView: daterangeView["a" /* default */],
    switchView: switchView["a" /* default */],
    radioView: radioView["a" /* default */],
    checkboxView: checkboxView["a" /* default */],
    selectView: selectView["a" /* default */],
    imageView: imageView["a" /* default */]
  },
  props: {
    columnList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    formData: {
      type: Object,
      default: function _default() {}
    },
    columnSpan: {
      type: Number,
      default: 12
    }
  },
  created: function created() {
    console.log(this, 'this.formView');
  },
  filters: {
    registerComponent: function registerComponent(componentName) {
      console.log(componentName, 'this.componentName');
      return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(componentName.default); // return import(`@/components/input/item/${componentName}.vue`).then(
      //   component => {
      //     console.log(component, 'component')
      //     return Vue.extend(component.default)
      //   },
      // )
    }
  },
  methods: {}
});
// CONCATENATED MODULE: ./src/components/input/formView.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_formViewvue_type_script_lang_js_ = (formViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/input/formView.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  input_formViewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5196fc95",
  null
  
)

/* harmony default export */ var formView = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=aehyok-form.umd.1.js.map