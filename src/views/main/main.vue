<template>
  <div>首页</div>
  {{ env }}
  {{ $store.state.name }}
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  setup() {
    const env = ref(process.env.VUE_APP_API)
    console.log(process.env.VUE_APP_API)
    return {
      env
    }
  }
})
</script>
