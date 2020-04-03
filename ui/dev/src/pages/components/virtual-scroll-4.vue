<template>
  <div view="lHh LpR fFf">
    <div>
      <div padding class="bg-white q-pr-xl">
        <div class="bg-grey-2" style="height: 60vh">
          Spacer
        </div>

        <div>List index: {{ virtualListIndex1 }}</div>
        <div class="scroll" style="max-height: 80vh" ref="virtualScrollTargetRef">
          <div class="text-h6 q-my-lg q-pa-lg bg-grey-10 text-white" style="height: 500px">
            Before list
          </div>
          <q-virtual-scroll component="q-list" :items="heavyList" separator :scroll-target="scrollTarget" @virtual-scroll="onVirtualScroll1">
            <template v-slot="{ item, index }">
              <div
                v-if="(index % 3) === 0"
                :key="index"
                clickable
              >
                <div>
                  <div class="q-px-xl">
                    Option - {{ item.label }} #{{ index }}
                  </div>
                </div>
              </div>
              <div v-else-if="(index % 5) === 0" class="bg-negative" :key="index">
                {{ item.label }} #{{ index }}
              </div>
              <div v-else class="bg-yellow q-py-lg text-center scroll" :key="index" style="max-height: 100px">
                {{ item.label }} #{{ index }}
              </div>
            </template>
          </q-virtual-scroll>
          <div class="text-h6 q-my-lg q-pa-lg bg-grey-10 text-white" style="height: 800px">
            After list
          </div>
        </div>

        <div class="q-pa-md">
          <div class="q-pa-md">
            <input
              type="number"
              :value="virtualListIndex2"
              :min="0"
              :max="99999"
              label="Scroll to index"
              input-class="text-right"
              @input="onIndexChange"
            />
          </div>

          <q-virtual-scroll
            ref="virtualListRef"
            class="q-my-md"
            style="max-height: 300px;"
            component="q-list"
            :items="heavyList"
            separator
            @virtual-scroll="onVirtualScroll2"
          >
            <template v-slot="{ item, index }">
              <div
                :key="index"
                dense
                :class="{
                  'bg-black text-white': index === virtualListIndex2,
                  'q-py-xl': index % 4 === 0
                }"
                :style="index === 99999 ? 'height: 800px' : void 0"
              >
                <div>
                  <div>
                    #{{ index }} - {{ item.label }}
                  </div>
                </div>
              </div>
            </template>
          </q-virtual-scroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const heavyList = []

for (let i = 0; i < 100000; i++) {
  heavyList.push({
    label: 'Option ' + (i + 1),
    html: 'Option <em class="text-h6">' + (i + 1) + '</em>',
    value: Math.trunc(1 + Math.random() * 99)
  })
}

Object.freeze(heavyList)

export default {
  data () {
    return {
      heavyList,
      scrollTarget: void 0,
      virtualListIndex1: 0,
      virtualListIndex2: 1200
    }
  },

  mounted () {
    this.scrollTarget = this.$refs.virtualScrollTargetRef
    this.$refs.virtualListRef.scrollTo(this.virtualListIndex2)
  },

  methods: {
    onIndexChange (index) {
      this.$refs.virtualListRef.scrollTo(index)
    },
    onVirtualScroll1 ({ index }) {
      this.virtualListIndex1 = index
    },
    onVirtualScroll2 ({ index }) {
      this.virtualListIndex2 = index
    }
  }
}
</script>
