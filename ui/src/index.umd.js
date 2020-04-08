import Vue from 'vue'

import install from './install.js'
import { version } from '../package.json'

import * as components from './components.js'

Vue.use({ install }, {
  components,
  config: window.quasarConfig || {}
})

export default {
  version,
  components,
  utils,
  ...components,
  ...plugins,
}
