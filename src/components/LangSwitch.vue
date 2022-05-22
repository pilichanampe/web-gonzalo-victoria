<template>
  <v-select
    solo
    dense
    :label="$t('language')"
    v-model="$i18n.locale"
    :items="langs"
    :item-text="item => item.label"
    :item-value="item => item.lang"
    style="max-width: 120px"
  ></v-select>
</template>

<script>
export default {
  name: 'LangSwitch',
  data() {
    return {
      langs: [
        { lang: 'en', label: 'English' },
        { lang: 'es', label: 'Español' },
        { lang: 'fr', label: 'Français' },
      ],
    };
  },
};
</script>

<style>

</style>
