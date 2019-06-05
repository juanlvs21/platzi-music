<template>
  <div class="card" v-if="track && track.album">
    <div class="card-image">
      <figure class="image is-1by1">
        <img :src="track.album.images[0].url" alt="">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="track.album.images[0].url" alt="">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-6">
            <b>{{ track.name }}</b>
          </p>
          <p class="subtitle is-6">
            {{ track.artists[0].name }}
          </p>
        </div>
      </div>
      <div class="content">
        <small>Duración: <b>{{ track.duration_ms | ms-to-mm }}</b></small>
      </div>
      <nav class="level center-element">
        <div class="level-left">
          <button class="button is-info is-small mrl-5" @click="selectTrack">
            Reproducir <span class="icon is-small ml-5">▶️</span>
          </button>
          <button class="button is-primary is-small mrl-5" @click="goToTrack(track.id)">
            Ver más <span class="icon is-small ml-5">🌍</span>
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import trackMixin from '../../mixins/track'

export default {
  name: 'PmTrack',
  props: {
    track: {
      type: Object,
      required: true,
    }
  },
  mixins: [ trackMixin ],
  methods: {
    goToTrack(id) {
      this.$router.push({
        name: 'track',
        params: {
          id
        }
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .center-element {
    justify-content:center;
  }
</style>
