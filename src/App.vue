<template>
  <div>
    <div>
      video_id : <input type="text" v-model="temp.video_id" /><br />
      loop : <input type="number" v-model.number="temp.loop" /><br />
      <button @click="applyConfig">Apply</button>
      <button @click="playCurrentVideo">Play</button>
      <button @click="stopCurrentVideo">Stop</button>
      <button @click="pauseCurrentVideo">Pause</button>
    </div>
    <YoutubeVue3
      ref="youtube"
      :autoplay="1"
      :videoid="play.video_id"
      :loop="play.loop"
      :width="640"
      :height="480"
      :modestbranding="1"
      :controls="1"
      @ended="onEnded"
      @paused="onPaused"
      @played="onPlayed"
    />
  </div>
</template>

<script>
import YoutubeVue3 from "@/components/YoutubeVue3";

export default {
  name: "App",
  data() {
    return {
      temp: { video_id: "3P1CnWI62Ik", loop: 1 },
      play: { video_id: "3P1CnWI62Ik", loop: 1 },
    };
  },
  components: {
    YoutubeVue3,
  },
  methods: {
    applyConfig() {
      this.play = Object.assign(this.play, this.temp);
    },
    playCurrentVideo() {
      this.$refs.youtube.player.playVideo();
    },
    stopCurrentVideo() {
      this.$refs.youtube.player.stopVideo();
    },
    pauseCurrentVideo() {
      this.$refs.youtube.player.pauseVideo();
    },
    onEnded() {
      console.log("## OnEnded");
    },
    onPaused() {
      console.log("## OnPaused");
    },
    onPlayed() {
      console.log("## OnPlayed");
    },
  },
};
</script>
