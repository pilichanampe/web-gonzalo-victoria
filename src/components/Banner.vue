<template>
  <v-container
    fluid
    class="ma-0 pa-0 pt-15 d-flex flex-column p-relative justify-end"
    :class="$vuetify.theme.dark ? 'black' : ''"
  >
    <div
      class="
        p-absolute
        d-flex
        flex-column
        align-self-end
        flex-wrap
        p-width-complete
        px-6
      "
      :class="$vuetify.breakpoint.mdAndUp ? 'mb-15' : 'mb-6'"
      style="z-index: 1;"
      :style="$vuetify.breakpoint.lgAndUp ? 'font-size: 6rem;' : 'font-size: 3rem;'"
    >
      <div
        class="p-width-complete d-flex flex-wrap"
        :class="$vuetify.breakpoint.smAndDown ? 'justify-center' : 'justify-end'"
      >
        <span class="text-start">
          GONZALO
        </span>
        <span class="font-weight-bold primary--text text-end">
          VICTORIA
        </span>
      </div>
      <div
        :class="$vuetify.breakpoint.smAndDown ? 'text-center' : 'text-end mb-15'"
        :style="$vuetify.breakpoint.smAndUp ? 'font-size: 2rem;' : 'font-size: 1.4rem;'"
      >{{ $t('subtitle')}}</div>
    </div>
    <v-img
      v-show="$vuetify.theme.dark"
      src="../assets/img/gv-01.jpg"
      :contain="$vuetify.breakpoint.mdAndUp"

      :style="!$vuetify.breakpoint.mdAndDown ? 'left: -340px' : ''"
      max-height="900"
      min-height="500"
    ></v-img>
    <v-img
      v-if="!$vuetify.theme.dark"
      src="../assets/img/gv-doodle-01.svg"
      contain
      :style="!$vuetify.breakpoint.mdAndDown ? 'left: -340px' : ''"
      max-height="900"
      min-height="500"
    ></v-img>
  </v-container>
</template>

<script>
export default {
  name: 'Banner',

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
<style lang="scss" scoped>
.typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation:
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}
</style>
