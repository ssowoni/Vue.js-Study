import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
let emitter = mitt();
let app = createApp(App)
app.config.globalProperties.emitter = emitter;
// app.config.globalProperties : 글로벌한 변수 보관함이다.모든 컴포넌트들이 갖다 쓸 수 있는 변수들

import store from './store.js'

app.use(store).mount('#app')

