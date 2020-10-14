import YoutubeVue3 from './components/YoutubeVue3.vue'

const install = (app) => {
  app.component('youtube-vue3', YoutubeVue3)
}

export {
  YoutubeVue3
}

export default install