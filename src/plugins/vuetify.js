import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import colors from 'vuetify/lib/util/colors';
// import variables from '../assets/styles/variables.scss';

Vue.use(Vuetify);
export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: 'EF3737',
        // main: 'e1e1e1',
        secondary: 'fafafa',
        accent: 'FFFFFF',
        // error: colors.red.accent3,
      },
      dark: {
        primary: 'EF3737',
        secondary: 'fafafa',
        // main: '34eb77',
      },
    },
  },
});
