<template>
  <button class="play_button" @click="togglePlay">
    <svg class="icon play_button__pause" aria-hidden="true" v-show="!isLoading&&isPlaying">
      <use xlink:href="#icon-pause"></use>
    </svg>
    <svg class="icon play_button__loading" aria-hidden="true" v-show="isLoading" @click.stop>
      <use xlink:href="#icon-loading-white"></use>
    </svg>
    <svg class="icon play_button__play" aria-hidden="true" v-show="!isLoading&&!isPlaying">
      <use xlink:href="#icon-play"></use>
    </svg>
  </button>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PlayButton',
  computed: {
    ...mapState('player', ['isPlaying', 'isLoading'])
  },
  methods: {
    togglePlay() {
      this.$store.commit('player/togglePlay', undefined, { root: true })
    }
  }
}
</script>

<style scoped lang="less">
.play_button__loading {
  animation: rotate 1s linear infinite reverse;
}
</style>
