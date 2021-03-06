<template>
  <section class="player" v-if="music">
    <div class="player__mask" :style="playerBgImg"></div>
    <div class="player__cont">
      <h6 class="player__song_name">{{songName}}</h6>
      <img
        :src="singerImg"
        :class="isPlaying?'player__singer_img player__singer_img--active':'player__singer_img'"
      >
      <PlayerLyrics class="player__lyrics"/>
      <PlayerProgress class="player__progress"/>
      <div class="player__buttons">
        <PrevButton class="player__btn_prev"/>
        <PlayButton class="player__btn_status"/>
        <NextButton class="play__btn_next"/>
      </div>
      <button class="player__download"></button>
    </div>
  </section>
</template>

<script>
import PlayerLyrics from './PlayerLyrics'
import PlayerProgress from './PlayerProgress'
import PlayButton from './PlayButton'
import NextButton from './NextButton'
import PrevButton from './PrevButton'

import { mapState, mapGetters, mapMutations } from 'vuex'
import axios from 'axios'
import api from '../../assets/js/api'
import store from '../../store/index'
export default {
  name: 'PlayerMax',
  components: {
    PlayerLyrics,
    PlayerProgress,
    PlayButton,
    NextButton,
    PrevButton
  },
  computed: {
    ...mapState('images', ['logo__theme']),
    ...mapState('player', ['audioEl', 'isPlaying', 'song', 'music']),
    ...mapGetters('player', ['songName', 'singerName', 'singerImg']),
    playerBgImg() {
      return `background-image:url(${
        this.singerImg
      }),linear-gradient(to right, rgb(48, 67, 82), rgb(215, 210, 204));`
    }
  },
  watch: {
    'music.hash': function(newHash) {
      this.$router.replace({ query: { musicHash: newHash } })
    }
  },
  beforeRouteEnter(to, from, next) {
    //play music if musicHash exists which means this page was loaded directly
    let musicHash = to.query.musicHash
    if (!musicHash) {
      return
    }
    if (to.params.fromPlayerMed) {
      return next()
    }
    return axios
      .get(api.songInfo + musicHash)
      .then(res => {
        let data = res.data
        data.filename = data.fileName
        store.commit('player/wantPlay', { music: data, musicList: [data] })
        next()
      })
      .catch(er => alert(er))
  },
  mounted() {
    this.replaceProperty({
      paths: 'player.isPlayerMedShow',
      data: false
    })
  },
  destroyed() {
    this.replaceProperty({
      paths: 'player.isPlayerMedShow',
      data: true
    })
    this.replaceProperty({
      paths: 'player.isPlayerMedSmall',
      data: false
    })
  },
  methods: {
    ...mapMutations(['replaceProperty'])
  }
}
</script>

<style scoped lang="less">
@import (reference) '../../assets/css/constant.less';
.player {
  position: relative;
}
.player__mask {
  position: absolute;
  left: 0;
  top: 0;
  filter: blur(15px);
  width: 100%;
  height: 100%;
  display: block;
  background-repeat: no-repeat, no-repeat;
  background-size: auto 100%, auto 100%;
  background-position: center, center;
  z-index: -1;
}
.player__cont {
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
// layout with 1rem which is actual vh set by js.
// Using vh would be wrong.
.player__song_name {
  height: .calc_on_app_cont(54) [ @result];
  line-height: .calc_on_app_cont(54) [ @result];
  width: calc(100% - .calc_on_app_cont(120) [ @result]);
  box-sizing: border-box;
  margin: 0 .calc_on_app_cont(120) [ @result];
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  color: @white;
  text-align: center;
  font-size: inherit;
}
.player__singer_img {
  margin-top: .calc_on_app_cont(26) [ @result];
  height: .calc_on_app_cont(193) [ @result];
  width: .calc_on_app_cont(193) [ @result];
  flex: 0 0 auto;
  border-radius: 50%;
  animation: rotate 20s linear infinite reverse;
  animation-play-state: paused;
}
.player__singer_img--active {
  animation-play-state: running;
}
.player__lyrics {
  margin-top: .calc_on_app_cont(16) [ @result];
  height: .calc_on_app_cont(68) [ @result];
  line-height: .calc_on_app_cont(34) [ @result];
  width: 102%;
  box-sizing: border-box;
  padding: 0 60px;
}
.player__progress {
  height: .calc_on_app_cont(48) [ @result];
  width: 100%;
  box-sizing: border-box;
}
.player__buttons {
  height: .calc_on_app_cont(58) [ @result];
  display: flex;
  align-items: center;
  justify-content: center;
}
.player__btn_prev,
.play__btn_next,
.player__btn_status {
  border-radius: 50%;
  border: .calc_on_app_cont(2) [ @result] solid @white;
  margin: 0 .calc_on_app_cont(16) [ @result];
}
.player__btn_prev,
.play__btn_next {
  width: .calc_on_app_cont(42) [ @result];
  height: .calc_on_app_cont(42) [ @result];
  font-size: .calc_on_app_cont(16) [ @result];
}
.player__btn_prev /deep/ .icon {
  transform: translate(0, 0px);
}
.play__btn_next /deep/ .icon {
  transform: translate(1px, 0px);
}
.player__btn_status {
  width: .calc_on_app_cont(58) [ @result];
  height: .calc_on_app_cont(58) [ @result];
  font-size: .calc_on_app_cont(20) [ @result];
}
.player__download {
  margin-top: .calc_on_app_cont(19) [ @result] auto 0;
  height: .calc_on_app_cont(45) [ @result];
  width: .calc_on_app_cont(211) [ @result];
}
</style>
