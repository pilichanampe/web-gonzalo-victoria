<template>
  <v-app-bar
    app
    fixed
    :color="$vuetify.theme.light ? 'secondary' : 'main'"
    dense
  >
    <div class="d-flex align-center">
      <span>gonzalo</span><span><strong class="primary--text">victoria.</strong></span>
    </div>
    <v-tabs class="ml-15">
      <v-tab to="/">Home</v-tab>
      <v-tab to="/about">About</v-tab>
      <v-menu
        bottom
        offset-y
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
              <v-list-item-title>Discography</v-list-item-title>
            </v-list-item>
            <v-list-item to="/sheets">
              <v-list-item-title>Sheets</v-list-item-title>
            </v-list-item>
            <v-list-item to="/papers-and-books">
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
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style>

</style>
