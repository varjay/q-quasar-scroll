export function slot (vm, slotName, otherwise) {
  return vm.$scopedSlots[slotName] !== void 0
    ? vm.$scopedSlots[slotName]()
    : otherwise
}

/**
 * Source definitely exists,
 * so it's merged with the possible slot
 */
export function mergeSlot (source, vm, slotName) {
  return vm.$scopedSlots[slotName] !== void 0
    ? source.concat(vm.$scopedSlots[slotName]())
    : source
}
