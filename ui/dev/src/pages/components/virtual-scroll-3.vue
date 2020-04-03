<template>
  <div view="lHh LpR fFf">
    <div>
      <div padding :style-fn="offset => ({ height: ($q.screen.height - offset) + 'px' })" class="column">
        <div class="text-h6 q-my-lg">
          Virtual list with dynamic generated items ({{ size.toLocaleString() }} items)
        </div>

        <q-virtual-scroll
          class="bg-white col"
          component="q-list"
          :items-size="size"
          :items-fn="getItems"
          :virtual-scroll-item-size="5"
          separator
          ref="list"
        >
          <template v-slot="{ item, index }">
            <div :key="index">
              <div>
                <div>
                  {{ item.label }}
                </div>
              </div>

              <div side top>
                <div caption>
                  #{{ index }}
                </div>
              </div>
            </div>
          </template>
        </q-virtual-scroll>

        <div class="q-pa-md row justify-between">
          <button label="+1e5" @click="() => { size += 1e5 }" />
          <button label="+1e4" @click="() => { size += 1e4 }" />
          <button label="+1e3" @click="() => { size += 1e3 }" />
          <button label="-1e3" @click="() => { size -= size > 1e3 ? 1e3 : size }" />
          <button label="-1e4" @click="() => { size -= size > 1e4 ? 1e4 : size }" />
          <button label="-1e5" @click="() => { size -= size > 1e5 ? 1e5 : size }" />
          <button label="End" @click="() => { $refs.list.scrollTo(size) }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      size: 100
    }
  },

  methods: {
    getItems (from, size) {
      const items = []

      for (let i = 0; i < size; i++) {
        items.push({
          avatarColor: 'red',
          avatarLetter: 'A',
          label: `Item ${from + i + 1}`
        })
      }

      return Object.freeze(items)
    }
  },

  mounted () {
    this.intervalTimer = setInterval(() => {
      this.size += 1
    }, 3000)
  },

  beforeDestroy () {
    clearInterval(this.intervalTimer)
  }
}
</script>
