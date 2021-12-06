<template>
<div>
  <v-app-bar
    app
    fixed
    :color="$vuetify.theme.light ? 'secondary' : 'main'"
    dense
  >
    <div class="d-flex align-center">
      <span>gonzalo</span><span><strong class="primary--text">victoria.</strong></span>
    </div>
    <v-tabs
      class="ml-15"
      v-show="$vuetify.breakpoint.mdAndUp"
    >
      <v-tab to="/">Home</v-tab>
      <v-tab to="/about">About</v-tab>
      <v-menu
        bottom
        offset-y
        open-on-focus
      >
        <template v-slot:activator="{ on, attrs }">
          <v-tab
            v-on="on"
            v-bind="attrs"
          >
            Works
          </v-tab>
        </template>
        <v-list>
          <v-list-item-group>
            <v-list-item to="/discography">
              <v-list-item-icon>
                <v-icon>mdi-album</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Discography</v-list-item-title>
            </v-list-item>
            <v-list-item to="/sheets">
              <v-list-item-icon>
                <v-icon>mdi-music-clef-treble</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sheets</v-list-item-title>
            </v-list-item>
            <v-list-item to="/papers-and-books">
              <v-list-item-icon>
                <v-icon>mdi-book-open-page-variant-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Papers & books</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>

      <v-tab to="/next-dates">Dates</v-tab>
      <v-tab to="/contact">Contact</v-tab>
    </v-tabs>
    <v-spacer></v-spacer>
    <!-- <v-spacer></v-spacer> -->
    <ThemeSwitch v-if="!$vuetify.breakpoint.smAndDown" />
    <v-app-bar-nav-icon
      v-show="$vuetify.breakpoint.smAndDown"
      @click.stop="showDrawer = true"
    ></v-app-bar-nav-icon>
  </v-app-bar>
    <NavDrawer
      v-show="$vuetify.breakpoint.smAndDown"
      :nshow="showDrawer"
      @isClosed="showDrawer = false"
    />
</div>
</template>

<script>
import NavDrawer from './NavDrawer.vue';
import ThemeSwitch from './ThemeSwitch.vue';

export default {
  name: 'Navbar',
  components: {
    NavDrawer,
    ThemeSwitch,
  },
  data() {
    return {
      showDrawer: false,
    };
  },
};
</script>

<style>

</style>
