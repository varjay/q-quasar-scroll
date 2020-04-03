<template>
  <div view="lHh LpR fFf">
    <div>
      <div padding class="bg-white">
        <div class="text-h6 q-my-lg q-pa-lg bg-grey-10 text-white" style="height: 500px">
          Before list
        </div>
        <q-virtual-scroll component="q-list" :items="heavyList" separator scroll-target="body">
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
      heavyList
    }
  }
}
</script>
