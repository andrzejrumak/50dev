<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const { t } = useI18n()
</script>

<template>
  <div>
    <img class="object-none h-36 w-full my-6" src="/50p.png">
    <p class="mt-3">
      <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
    </p>
    <div class="text-sm m-3">
      {{ t('intro.discription_50p') }}
    </div>
  </div>
</template>
