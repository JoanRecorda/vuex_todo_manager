import axios from 'axios'
import VueAxios from 'vue-axios'

import createApp from "vue";

const app = createApp({
    // root instance definition
});

app.mount("#app");
app.use(VueAxios, axios)
