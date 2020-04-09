const scrollTargets = true
  ? [ null, document, document.body, document.scrollingElement, document.documentElement ]
  : []

export function getScrollTarget (el, target) {
  if (typeof target === 'string') {
    try {
      target = document.querySelector(target)
    }
    catch (err) {
      target = void 0
    }
  }

  if (target === void 0 || target === null) {
    target = el.closest('.scroll,.scroll-y,.overflow-auto')
  }
  else if (target._isVue === true && target.$el !== void 0) {
    target = target.$el
  }

  return scrollTargets.includes(target)
    ? window
    : target
}

export default {
  getScrollTarget
}
