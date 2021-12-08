<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import styles from './assets/styles/styles.scss'; //eslint-disable-line
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data() {
    return {

    };
  },
  mounted() {
    // console.log(styles);
  },
};
</script>
<style lang="scss">
 @import '~vuetify/src/components/VStepper/_variables.scss';
 @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;700&display=swap');

</style>
