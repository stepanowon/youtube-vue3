
# youtube-vue 
Youtube Player Component for Vue.js 3.x.
This is based on https://developers.google.com/youtube/player_parameters?hl=en 

[![npm](https://img.shields.io/npm/v/youtube-vue.svg )](https://www.npmjs.com/package/youtube-vue)
[![npm](https://img.shields.io/npm/dm/youtube-vue.svg)](https://www.npmjs.com/package/youtube-vue)
[![GitHub stars](https://img.shields.io/github/stars/stepanowon/youtube-vue.svg?style=social&label=Stars&style=for-the-badge)](https://github.com/stepanowon/youtube-vue/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/stepanowon/youtube-vue.svg?style=social&label=Fork&style=for-the-badge)](https://github.com/stepanowon/youtube-vue/network)
[![Build Status](https://travis-ci.org/stepanowon/youtube-vue.svg?branch=master)](https://travis-ci.org/stepanowon/youtube-vue)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

------------

> Contact : stepanowon@hotmail.com   
> Author : Stephen Won(원형섭), OpenSG Inc.    
> Online Demo1 : [jsfiddle](https://jsfiddle.net/StephenWon/1e6o384t/)     
> Online Demo2 : https://youtube-vue3.vercel.app/

## Screen Shot
<img src="https://raw.githubusercontent.com/stepanowon/youtube-vue3/master/images/videoid.jpg" width="640" height="480" />

## License
MIT 
## Usage  
#### CDN - install
~~~
<script type="text/javascript" src="https://unpkg.com/vue@next"></script>
<script type="text/javascript" src="https://unpkg.com/youtube-vue3"></script>
~~~
#### CDN - usage
~~~
<div id="app">
	<div>
		<youtube-vue3 :videoid="video_id" :loop="loop" :autoplay="autoplay" />
	</div>
</div>
<script src="https://unpkg.com/vue@next"></script>
<script src="https://unpkg.com/youtube-vue3" type="text/javascript"></script>
<script type="text/javascript">
const app = Vue.createApp({
	name : "App",
	data() {
		return {
		  video_id:"3P1CnWI62Ik", loop:0, autoplay:1
		}
	},

})
YoutubeVue3.default(app)
const vm = app.mount("#app")
</script>
......
~~~
##
#### NPM - install
~~~
npm install --save youtube-vue3
- or -
yarn add youtube-vue3
~~~

#### NPM - usage
~~~
<template>
  <div>
    <div>
      video_id : <input type="text" v-model="temp.video_id" /><br />
      loop : <input type="number"  v-model.number="temp.loop" /><br />
      <button @click="applyConfig">Apply</button>
      <button @click="playCurrentVideo">Play</button>
      <button @click="stopCurrentVideo">Stop</button>
      <button @click="pauseCurrentVideo">Pause</button>
    </div>
    <YoutubeVue3 ref="youtube" :videoid="play.video_id" :loop="play.loop" :width="480" :height="320"  
      @ended="onEnded" @paused="onPaused" @played="onPlayed"/>
  </div>
</template>

<script>
import { YoutubeVue3 } from 'youtube-vue3'

export default {
  name: 'App',
  data() {
    return { 
      temp: { video_id:"3P1CnWI62Ik", loop:1 },
      play : { video_id:"3P1CnWI62Ik", loop:1 }
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
      this.$refs.youtube.player.playVideo();
    },
    stopCurrentVideo() {
      this.$refs.youtube.player.stopVideo();
    },
    pauseCurrentVideo() {
      this.$refs.youtube.player.pauseVideo();
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
~~~
##
#### Props
   * width
      - type : Number
      - width of player 
   * height 
     - type : Number
     - height of player
   * autoplay 
      - type : Number
      - default value : 0
      - autoplay of player ( 0 , 1:autoplay) 
   * videoid 
      - type : String 
      - Youtube video id
   * loop
      - type : Number
      - default value : 0
      - a setting of 1 causes the player to play the initial video again and again
##
#### methods
  * playVideo()
  * stopVideo() 
  * mute()
  * unMute()
  * setVolume(number) : number => 0~100
  * getVolume() 
  * setSize(width, height) : you can set player size on run-time

## events
  * ended : when current video is ended
  * paused : when current video is pauded 
  * played : when video is played
  * ready : when player is ready state



