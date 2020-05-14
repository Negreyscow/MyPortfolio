import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#eff0eb',
                secondary:'#484e4a',
                third: '#00a3a3',
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
