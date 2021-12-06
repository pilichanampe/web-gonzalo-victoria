<template>
<div>
  <v-navigation-drawer
    v-model="nshow"
    absolute
    bottom
    temporary

  >
    <v-list
      nav
      dense
      class="text-start text-uppercase"
    >
      <v-list-item-group>
        <v-list-item to="/">
          <v-list-item-title class="d-flex justify-space-between">
            <div class="d-flex align-center justify-center">
              <span>gonzalo</span><span><strong class="primary--text">victoria.</strong></span>
            </div>
            <ThemeSwitch />
          </v-list-item-title>
        </v-list-item>
        <v-list-item to="/about">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-group class="text-end">
          <template v-slot:activator>
            <v-list-item-title class="text-start">works</v-list-item-title>
          </template>
          <v-list-item to="/discography">
            <v-list-item-title>discography</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-album</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item to="/sheets">
            <v-list-item-title>sheets</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-music-clef-treble</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item to="/papers-and-books">
            <v-list-item-title>papers & books</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-book-open-page-variant-outline</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-item to="/next-dates">
          <v-list-item-title>dates</v-list-item-title>
        </v-list-item>

        <v-list-item to="/contact">
          <v-list-item-title>contact</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>

</div>
</template>

<script>
import ThemeSwitch from './ThemeSwitch.vue';

export default {
  name: 'NavDrawer',
  components: {
    ThemeSwitch,
  },
  props: {
    nshow: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  data() {
    return {
      showDrawer: false,
    };
  },
  watch: {
    nshow(e) {
      if (e === false) {
        this.$emit('isClosed');
        console.log('drawer cerrado');
      }
    },
  },
};
</script>

<style>

</style>
