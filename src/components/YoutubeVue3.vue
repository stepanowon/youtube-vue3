<template>
  <div ref="player" :id="playerid"></div>
</template>

<script>
import YouTubePlayer from "youtube-player";
import shortid from "shortid";

export default {
  name: "YoutubeVue3",
  props: {
    width: { type: Number, default: 480 },
    height: { type: Number, default: 320 },
    autoplay: { type: Number, default: 1, validator: (v) => Number(v) === 0 || Number(v) === 1 },
    videoid: { type: String, required: true },
    loop: { type: Number, default: 1, validator: (v) => Number(v) === 0 || Number(v) === 1 },
    controls: { type: Number, default: 0, validator: (v) => Number(v) === 0 || Number(v) === 1 },
    modestbranding: { type: Number, default: 1, validator: (v) => Number(v) === 0 || Number(v) === 1 },
  },
  data() {
    return {
      ready: 0,
      playerid: "",
    };
  },
  created() {
    this.playerid = "youtube-vue-player-" + shortid.generate();
  },
  mounted() {
    let playerVars = {
      autoplay: this.autoplay,
      loop: this.loop,
      controls: this.controls,
      modestbranding: this.modestbranding,
      playlist: this.video_id,
    };

    this.player = YouTubePlayer(this.playerid, {
      host: "https://www.youtube.com",
      width: this.width,
      height: this.height,
      videoId: this.videoid,
      playerVars: playerVars,
    });

    this.player.on("stateChange", (e) => {
      if (e.data === window.YT.PlayerState.ENDED) {
        this.$emit("ended");
      } else if (e.data === window.YT.PlayerState.PAUSED) {
        this.$emit("paused");
      } else if (e.data === window.YT.PlayerState.PLAYING) {
        this.$emit("played");
      }
    });
  },
  unmounted() {
    this.player.destroy();
    delete this.player;
  },
  watch: {
    videoid() {
      this.player.loadVideoById(this.videoid);
      this.player.playVideo();
    },
    list() {
      this.player.getPlaylist(this.list);
      this.player.playVideo();
    },
  },
};
</script>

<style></style>
