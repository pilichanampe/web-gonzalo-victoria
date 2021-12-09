<template>
<div>
  <v-app-bar
    app
    fixed
    :color="$vuetify.theme.light ? 'secondary' : 'main'"
    dense
  >
    <router-link to="/" class="d-flex align-center text-decoration-none">
      <span class="white--text">
        gonzalo
      </span>
      <span><strong class="primary--text">
        victoria.
      </strong></span>
    </router-link>
    <v-tabs
      class="ml-15"
      v-show="$vuetify.breakpoint.mdAndUp"
    >
      <v-tab to="/">{{ $t('home')}}</v-tab>
      <v-tab to="/about">{{ $t('biography') }}</v-tab>
      <v-tab to="/gallery">{{ $t('gallery') }}</v-tab>
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
            {{ $t('works') }}
          </v-tab>
        </template>
        <v-list>
          <v-list-item-group>
            <v-list-item to="/discography">
              <v-list-item-icon>
                <v-icon>mdi-album</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ $t('discography') }}</v-list-item-title>
            </v-list-item>
            <v-list-item to="/sheets">
              <v-list-item-icon>
                <v-icon>mdi-music-clef-treble</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ $t('sheets') }}</v-list-item-title>
            </v-list-item>
            <v-list-item to="/papers-and-books">
              <v-list-item-icon>
                <v-icon>mdi-book-open-page-variant-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ $t('papersAndBooks') }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>

      <v-tab to="/next-dates">{{ $t('dates') }}</v-tab>
      <v-tab to="/contact">{{ $t('contact') }}</v-tab>
    </v-tabs>
    <v-spacer></v-spacer>
    <LangSwitch  class="mt-6"/>
    <!-- <ThemeSwitch v-if="!$vuetify.breakpoint.smAndDown" /> -->
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
// import ThemeSwitch from './ThemeSwitch.vue';
import LangSwitch from './LangSwitch.vue';

export default {
  name: 'Navbar',
  components: {
    NavDrawer,
    // ThemeSwitch,
    LangSwitch,
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
