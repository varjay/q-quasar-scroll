import Vue from 'vue'
import {QVirtualScroll} from './components/virtual-scroll/index.js'
import { version } from '../package.json'

function install (Vue) {
  Vue.component('QVirtualScroll', QVirtualScroll)
}
Vue.use({ install })

export default {
  version,
}
