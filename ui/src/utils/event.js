export const listenOpts = {
  hasPassive: false,
  passiveCapture: true,
  notPassiveCapture: true
}

try {
  var opts = Object.defineProperty({}, 'passive', {
    get () {
      Object.assign(listenOpts, {
        hasPassive: true,
        passive: { passive: true },
        notPassive: { passive: false },
        passiveCapture: { passive: true, capture: true },
        notPassiveCapture: { passive: false, capture: true }
      })
    }
  })
  window.addEventListener('qtest', null, opts)
  window.removeEventListener('qtest', null, opts)
}
catch (e) {}

export default {
  listenOpts,
}
