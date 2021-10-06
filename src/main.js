import {
  createApp
} from 'vue';
import {
  createClient
} from '@supabase/supabase-js';
import App from './App.vue'
let app = createApp(App);
app.config.globalProperties.$sb = createClient("https://wfznyxsorktnwezmfldw.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMjY5MDI0MiwiZXhwIjoxOTQ4MjY2MjQyfQ.DNrwFELGTURjmmzhqe46Ppejct00gjSap73ijiyeSsA");
app.mount("#app");