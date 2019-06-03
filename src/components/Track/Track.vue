<template>
  <div class="card">
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
        <small>{{ track.duration_ms }}</small>
      </div>
      <nav class="level center-element">
        <div class="level-left">
          <button class="button is-info is-small" @click="selectTrack">
            Reproducir <span class="icon is-small ml-5">▶️</span>
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PmTrack',
  props: {
    // msg: String,
    track: {
      type: Object,
      required: true,
    }
  },
  methods: {
    selectTrack() {
      this.$emit('select', this.track.id)

      this.$bus.$emit('set-track', this.track)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.ml-5 {
  margin-left: 5px!important;
}
.center-element {
  justify-content:center;
}
</style>
