<template>
  <div>
    <div>{{ data }}</div>
    <div class="text-red-500 text-5xl text-center">
      Kasa ma się dobrze
    </div>
    <div class="m-10">
      KP
      <input v-model.number="kp" type="number" placeholder="kasa przyjmnie" class="m-3 text-blue-900" />
      KW
      <input v-model.number="kw" type="number" placeholder="kasa wyda" class="m-3 text-blue-900" />
      <button class=" border-cyan-600 border-2 m-3" @click="add">
        Dodaj KP
      </button>
      <button class=" border-cyan-600 border-2 m-3" @click="sub">
        Odejmij KW
      </button>
      <!-- <div class="m-4 text-xl">
        KP - kasa przyjmnie {{ kp }}
        KW - kasa wyda - {{ kw }}
      </div> -->
      <!-- <div>
        SUMA {{ sum }}
      </div>
      <div>
        LP {{ lp }}
      </div>
      <div>
        LP {{ lp }} KP {{ kp }} KW - {{ kw }} Saldo {{ sum }}
      </div> -->
      <div>
        <table class="text-2xl text-red-600 ">
          <tr class="border-2 border-light-500">
            <th class="m-10">
              Lp
            </th>
            <th class="m-10 border-light-600 border-1">
              KP
            </th>
            <th class="m-10 border-light-600 border-1">
              KW
            </th>
            <th class="m-10 border-light-600 border-1">
              Saldo
            </th>
          </tr>
          <tr v-for="l in data.records" :key="l.id" class="border-2 border-light-500">
            <th class="m-10 border-light-600 border-1">
              {{ l.id }}
            </th>
            <th class="m-10 border-light-600 border-1">
              {{ l.fields.kp }}
            </th>
            <th class="m-10 border-light-600 border-1">
              {{ l.fields.kw }}
            </th>
            <th>{{ l.fields.sum }}</th>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'

const { data, execute } = useFetch('https://api.airtable.com/v0/appqklW2xWbWETC5F/Test',
  ({ headers: { Authorization: 'Bearer key6thRpyzI9wkOYQ' } })).get().json()

const kp = ref()
const kw = ref(0)
const sum = ref(0)
const lp = ref(0)

const linie = reactive([{
  llp: null, lkp: null, lkw: null, lsum: null,
}])

const add = () => {
  sum.value = sum.value + kp.value
  lp.value = lp.value + 1
  linie.push({ llp: lp.value, lkp: kp.value, lkw: kw.value, lsum: sum.value })

  kp.value = null
}

const sub = () => {
  sum.value = sum.value - kw.value
  lp.value = lp.value + 1
  linie.push({ llp: lp.value, lkp: kp.value, lkw: kw.value, lsum: sum.value })
  kw.value = null
}

</script>
