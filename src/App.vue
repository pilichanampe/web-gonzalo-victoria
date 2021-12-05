<template>
  <v-app>
    <v-app-bar
      app
      :color="$vuetify.theme.light ? 'secondary' : 'main'"
      dense
    >
      <div class="d-flex align-center">
        <span>gonzalo</span><span><strong class="primary--text">victoria.</strong></span>
      </div>
      <v-spacer></v-spacer>
      <v-icon class="mr-4">mdi-weather-night</v-icon>
      <v-switch
        inset
        class="mt-5"
        color="amber"
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
      </v-switch>
      <v-icon>mdi-weather-sunny</v-icon>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import styles from './assets/styles/styles.scss'; //eslint-disable-line

export default {
  name: 'App',

  data: () => ({
    //
  }),
  mounted() {
    // console.log(styles);
  },
};
</script>
<style lang="scss">
 @import '~vuetify/src/components/VStepper/_variables.scss';
 @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;700&display=swap');

 * {
   font-family: 'Josefin Sans', sans-serif;
 }
</style>
