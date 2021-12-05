<template>
  <div>
    <v-icon class="mr-4">mdi-weather-night</v-icon>
    <v-switch
      inset
      class="mt-5"
      color="amber"
      @click="$vuetify.theme.dark = !$vuetify.theme.dark"
    >
    </v-switch>
    <v-icon>mdi-weather-sunny</v-icon>
  </div>
</template>

<script>
export default {
  name: 'ThemeSwitch',
}
</script>

<style>

</style>
