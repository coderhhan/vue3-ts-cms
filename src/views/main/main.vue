<template>
  <div>首页333</div>
  {{ env }}
  {{ $store.loginModule.state.token }}
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
// import { login } from '@/service/menu.service'
export default defineComponent({
  setup() {
    const env = ref(process.env.VUE_APP_API)
    console.log(process.env.VUE_APP_API)
    const query = {
      name: 'coderwhy',
      password: '123456'
    }
    // login(query).then((res) => {
    //   console.log(res)
    // })
    return {
      env
    }
  }
})
</script>
