<template>
  <v-container fluid class="ma-0 pa-0">
    <hello-world />
  </v-container>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'Home',

  components: {
    HelloWorld,
  },
};
</script>
