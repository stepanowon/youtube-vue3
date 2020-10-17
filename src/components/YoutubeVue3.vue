<template>
  <div ref="player" id="youtube-vue-player-soma"></div>
</template>

<script>
import YouTubePlayer from 'youtube-player';

export default {
    name : "YoutubeVue3",
    props: {
        width: { type:Number, default:480 },
        height: { type:Number, default:320 },
        autoplay: { type:Number, default:1, validator: (v) => Number(v)===0||Number(v)===1 },
        videoid : { type:String, required:true },
        loop : { type:Number, default:1, validator: (v) => Number(v)===0||Number(v)===1 }
    },
    data() {
        return {
            ready : 0,
        }
    },
    mounted() {
        let playerVars = {
            autoplay:this.autoplay, 
            loop:this.loop
        }
        this.player = YouTubePlayer('youtube-vue-player-soma', {
            host: "https://www.youtube.com",
            width: this.width,
            height: this.height,
            videoId: this.videoid,
            playerVars: playerVars
        })

        this.player.on('stateChange', (e) => {
            if (e.data === window.YT.PlayerState.ENDED) {
                this.$emit('ended')
            } else if (e.data === window.YT.PlayerState.PAUSED) {
                this.$emit('paused')
            } else if (e.data === window.YT.PlayerState.PLAYING) {
                this.$emit('played')
            } 
        });        
    },
    unmounted() {
        this.player.destroy()
        delete this.player
    },
    watch : {
        videoid() {
            this.player.loadVideoById(this.videoid);
            this.player.playVideo();
        },
        list() {
            this.player.getPlaylist(this.list)
            this.player.playVideo();
        }
    }
}
</script>

<style>

</style>