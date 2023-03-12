import { createApp } from 'vue'
import App from './App.vue'



import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { faThumbsUp, faSmile, faFrown, faMeh, faGrin, faLaughBeam } from '@fortawesome/free-solid-svg-icons'
library.add(faThumbsUp, faSmile, faFrown, faMeh, faGrin, faLaughBeam);

import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/stackoverflow-light.css'
createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(VueHighlightJS)
    .mount('#app')
