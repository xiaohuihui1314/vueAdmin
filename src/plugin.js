import slotComponent from '@/common/slotBox'

export default (Vue) => {
  Vue.directive('focus', {
    inserted: function (el) {
      // 聚焦元素
      el.focus()
    }
  });
  Vue.component('slotComponent', slotComponent)
}



