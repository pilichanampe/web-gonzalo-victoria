<template>
  <v-btn
    v-on="$listeners"
    v-bind="btnAttrs"
    :color="$attrs.color === undefined ? btnAttrs.color : $attrs.color"
    :depressed="$attrs.depressed === undefined ? btnAttrs.depressed : $attrs.depressed"
  >
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    nprimary: { type: Boolean },
    nsecondary: { type: Boolean },
    ntext: { type: Boolean },
  },
  computed: {
    btnAttrs() {
      let attrs = {};
      if (this.nprimary) {
        attrs = {
          color: 'primary secondary--text',
        };
      } else if (this.nsecondary) {
        attrs = {
          color: 'secondary primary--text',
          depressed: true,
        };
      } else if (this.ntext) {
        attrs = {
          color: 'primary',
          text: true,
        };
      }
      return { ...attrs, ...this.$attrs };
    },
  },
};
</script>

<style>

</style>
