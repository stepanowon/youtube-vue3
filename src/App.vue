<template>
  <div id="app">
    <div>
      video_id : <input type="text" v-model="temp.video_id" /><br />
      listType : <input type="text"  v-model="temp.listType" /><br />
      list : <input type="text"  v-model="temp.list" /><br />
      loop : <input type="number"  v-model.number="temp.loop" /><br />
      <button @click="applyConfig">Apply</button>
      <button @click="playCurrentVideo">Play</button>
      <button @click="stopCurrentVideo">Stop</button>
      <button @click="pauseCurrentVideo">Pause</button>
    </div>
    <YoutubeVue3 ref="player" :videoid="play.video_id" :width="640" :height="480" :autoplay="1" :loop="play.loop" :listType="play.listType" 
      :list="play.list" @ended="onEnded" @paused="onPaused" @played="onPlayed"/>
  </div>
</template>

<script>
import YoutubeVue3 from './components/YoutubeVue3.vue'

export default {
  name: 'App',
  data() {
    return { 
      temp: { video_id:"3P1CnWI62Ik", listType:"search", list:"", loop:0 },
      play : { video_id:"3P1CnWI62Ik", listType:"search", list:"", loop:0 }
    }
  },
  components: {
    YoutubeVue3
  },
  methods: {
    applyConfig() {
      this.play = Object.assign(this.play, this.temp)
    },
    playCurrentVideo() {
      this.$refs.player.playVideo();
    },
    stopCurrentVideo() {
      this.$refs.player.stopVideo();
    },
    pauseCurrentVideo() {
      this.$refs.player.pauseVideo();
    },
    onEnded() {
      console.log("## OnEnded")
    },
    onPaused() {
      console.log("## OnPaused")
    },
    onPlayed() {
      console.log("## OnPlayed")
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.vid_input { margin:10px 10px 10px 10px; width:640px; }
</style>
