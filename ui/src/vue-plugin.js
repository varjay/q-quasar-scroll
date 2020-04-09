function install(Vue, opts = {}) {
  if (this.__qInstalled === true) { return }
  this.__qInstalled = true

  opts.components && Object.keys(opts.components).forEach(key => {
    const c = opts.components[key]
    if (typeof c === 'function') {
      Vue.component(c.options.name, c)
    }
  })
}

export default {
  install,
}
