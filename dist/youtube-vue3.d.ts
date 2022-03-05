declare module "youtube-vue3" {
  export const YoutubeVue3: import("vue").DefineComponent<{
    width: Number;
    height: Number;
    autoplay?: Number; // default value : 0
    videoid: String;
    loop?: Number; // default value : 0
    controls?: Number; //default value: 0
    modestbranding?: Number; //default value: 1
  }>;
}
