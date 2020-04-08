import VuePlugin from './vue-plugin.js'

import * as components from './components.js'

export * from './components.js'

export default {
  ...VuePlugin,
  install (Vue, opts) {
    VuePlugin.install(Vue, {
      components,
      ...opts
    })
  }
}
