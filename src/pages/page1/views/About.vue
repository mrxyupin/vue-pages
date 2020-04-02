<template lang="pug">
  .main
    <div class="home">
      <h3>我是page1的about页面</h3>
    </div>
    hello-world(:msg='这是pageOne-about的天下')
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
