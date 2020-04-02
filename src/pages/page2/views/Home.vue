<template lang="pug">
  .main
    <div class="home">
      <h3>我是page2</h3>
    </div>
    hello-world(:msg='这是page2的天下')
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>