import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#f5f8f7',
                secondary:'#e2e2e2',
                third: '#035466',
                accent: '#8c9eff',
                error: '#b71c1c',
                text: '#fff'
            },
        }
    },
    icons: {
        iconfont: 'fa'
    }
});
