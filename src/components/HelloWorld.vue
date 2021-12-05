<template>
  <v-container
    fluid
    class="ma-0 pa-0 pt-15 d-flex flex-column p-relative"
    :class="$vuetify.theme.dark ? 'black' : ''"
  >
    <div
      class="
        pr-5
        mr-15
        p-absolute
        d-flex
        flex-column
        align-self-end"
      style="z-index: 1; font-size: 6rem;"
    >
      <span>GONZALO<span class="font-weight-bold primary--text">VICTORIA</span></span>
      <p
        style="font-size: 2rem;"
        class="d-flex align-self-end"
      >Guitarrista, compositor, investigador, docente</p>
    </div>
    <v-img
      v-show="$vuetify.theme.dark"
      src="../assets/img/gv-01.jpg"
      cover
      :style="!$vuetify.breakpoint.mdAndDown ? 'left: -340px' : ''"
      max-height="900"
      min-height="500"
    ></v-img>
    <v-img
      v-if="!$vuetify.theme.dark"
      src="../assets/img/gv-doodle-01.svg"
      cover
      :style="!$vuetify.breakpoint.mdAndDown ? 'left: -340px' : ''"
      max-height="900"
      min-height="500"
    ></v-img>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data() {
    return {

    };
  },
  methods: {
    setImage() {
      if (this.$vuetify.theme.light) {
        return 'gv-doodle-01.svg'; //eslint-disable-line
      }
      return 'gv-01.jpg'; //eslint-disable-line
    },
  },
  mounted() {

  },
};
</script>
