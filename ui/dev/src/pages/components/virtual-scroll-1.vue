<template>
  <div view="lHh LpR fFf">
    <div>
      <div padding>
        <input
          type="number"
          standout
          dense
          :min="0"
          :max="maxSize"
          input-class="text-right"
          style="width: 10em;"
          label="List size"
          :value="size"
          @input="val => { size = Math.max(0, Math.min(maxSize, parseInt(val, 10))); }"
        />
        <div class="text-h6 q-mt-lg">
          Heavy test - Different components ({{ size.toLocaleString() }} items)
        </div>
        <div class="q-my-md bg-grey-10">
          <q-virtual-scroll
            style="max-height: 300px;"
            :items="heavyList"
          >
            <template v-slot="{ item, index }">
              <div
                v-if="(index % 3) === 0"
                :key="index"
                dense
                dark
                clickable
              >
                <div>
                  <div>
                    Option - {{ item.label }} #{{ index }}
                  </div>
                </div>
              </div>
              <div v-else-if="(index % 5) === 0" class="bg-negative" :key="index">
                {{ item.label }} #{{ index }}
              </div>
              <div v-else class="bg-yellow q-py-lg text-center" :key="index">
                {{ item.label }} #{{ index }}
              </div>
            </template>
          </q-virtual-scroll>
        </div>

        <div class="text-h6 q-mt-lg row items-center justify-between">
          Heavy test - Variable size ({{ size.toLocaleString() }} items)
          <input
            type="number"
            standout
            dense
            :min="0"
            :max="maxSize - 1"
            input-class="text-right"
            label="Scroll to index"
            :value="scrollTo"
            @input="val => { scrollTo = Math.max(0, Math.min(maxSize - 1, parseInt(val, 10))); }"
            @change="$refs.vList.scrollTo(scrollTo)"
          />
        </div>
        <q-virtual-scroll component="q-list" ref="vList" :items="heavyList" separator class="q-my-md" style="max-height: 300px;">
          <template v-slot="{ item, index }">
            <div :key="index">
              <div>
                <div>
                  {{ item.label }} #{{ index }}
                </div>

                <div class="q-py-sm" v-if="(index % 5) === 0">
                  {{ item.label }}
                </div>

                <div class="q-py-md text-negative" v-if="(index % 3) === 0">
                  {{ item.value }}
                </div>

                <div class="q-py-lg text-positive" v-if="(index % 4) === 0">
                  {{ index }} - {{ item.label }} - {{ item.value }}
                </div>
              </div>
            </div>
          </template>
        </q-virtual-scroll>

        <div class="text-h6 q-mt-lg row items-center justify-between">
          Horizontal - Variable size ({{ size.toLocaleString() }} items)
          <input
            type="number"
            standout
            dense
            :min="0"
            :max="maxSize - 1"
            input-class="text-right"
            label="Scroll to index"
            :value="scrollToH"
            @input="val => { scrollToH = Math.max(0, Math.min(maxSize - 1, parseInt(val, 10))); }"
            @change="$refs.vListH.scrollTo(scrollToH)"
          />
        </div>
        <q-virtual-scroll ref="vListH" virtual-scroll-horizontal :virtual-scroll-item-size="165" :items="heavyList" class="q-my-md" style="max-width: 80vw; margin-bottom: 200vh;">
          <template v-slot="{ item, index }">
            <div class="row no-wrap items-center" :key="index">
              <div square color="warning" text-color="negative">
                {{ item.value }}
              </div>
              <div class="bg-grey-4" :class="{ 'q-pa-sm': (index % 3) === 0, 'q-pa-xl': (index % 3) === 1, 'q-pa-md': (index % 3) === 2 }">
                {{ item.label }}
              </div>
              <div class="bg-grey-10 text-white q-pa-sm">
                #{{ index }}
              </div>
              <div v-if="index < heavyList.length - 1" vertical spaced />
            </div>
          </template>
        </q-virtual-scroll>
      </div>
    </div>
  </div>
</template>

<script>
const maxSize = 100000
const heavyList = []

for (let i = 0; i < maxSize; i++) {
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
      maxSize,
      size: heavyList.length,
      heavyList,
      scrollTo: 0,
      scrollToH: 0
    }
  },

  watch: {
    size (size) {
      this.heavyList = Object.freeze(heavyList.slice(0, size))
    }
  }
}
</script>
