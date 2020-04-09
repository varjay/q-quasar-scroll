import {QVirtualScroll} from './components/virtual-scroll/index.js'

export * from './components.js'

export default {
  install (Vue) {
    Vue.component('QVirtualScroll', QVirtualScroll)
  }
}
