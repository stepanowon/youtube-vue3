
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
> Online Demo : https://youtube-vue3.vercel.app/

## Screen Shot
#### by videoid
<img src="https://raw.githubusercontent.com/stepanowon/youtube-vue3/master/images/videoid.jpg" width="640" height="480" />

#### by search
<img src="https://raw.githubusercontent.com/stepanowon/youtube-vue3/master/images/search.jpg" width="640" height="480" />

#### by playlist
<img src="https://raw.githubusercontent.com/stepanowon/youtube-vue3/master/images/playlist.jpg" width="640" height="480" />

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
		<youtube-vue :videoid="video_id" :loop="loop" :autoplay="autoplay" />
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
#### NPM Registry - install
~~~
npm install --save youtube-vue
- or -
yarn add youtube-vue
~~~

#### NPM Registry - usage
~~~
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
    <YoutubeVue ref="player" :videoid="play.video_id" :width="640" :height="480" :autoplay="1" :loop="play.loop" :listType="play.listType" 
      :list="play.list" @ended="onEnded" @paused="onPaused" @played="onPlayed"/>
  </div>
</template>

<script>
import YoutubeVue from 'youtube-vue'

export default {
  name: 'App',
  data() {
    return { 
      play : { video_id:"3P1CnWI62Ik", listType:"search", list:"", loop:0 }
    }
  },
  components: {
    YoutubeVue
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
   * hl 
      - type : String
      - default value : 'en' 
      - interface language(ex:en, ko, ja)
   * loop
      - type : Number
      - default value : 0
      - a setting of 1 causes the player to play the initial video again and again
   * rel
      - type : Number
      - default value : 0
      - a setting of 1 causes the player to show related videos when playback of the initial video ends.
   * listType
	   - type : String
	   - list type : 'search', 'playlist', 'user_uploads'
   * list
      - type : String
      - If the listType parameter value is search, then the list parameter value specifies the search query.
      - If the listType parameter value is user_uploads, then the list parameter value identifies the YouTube channel whose uploaded videos will be loaded.
      - If the listType parameter value is playlist, then the list parameter value specifies a YouTube playlist ID. In the parameter value, you need to prepend the playlist ID with the letters PL as shown in the example below.
      - if you want to use this parameter, videoid parameter must not be specified. 
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



