<template>
  <div class="content">
      <p class="is-128x128">
        <img :src="track.album.images[0].url" :alt="track.name">
      </p>
      <p>
        <b> {{ track.name }} </b>
        <small> {{ track.duration_ms }} </small>
      </p>
      <p>
        <audio :src="track.preview_url" controls></audio>
      </p>
  </div>
</template>

<script>
export default {
  name: 'PmPlayer',
  data () {
    return {
      track: {},
    }
  },
  created() {
    this.$bus.$on('set-track', (track) => {
      this.track = track
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
img {
  width: 124px;
  border-radius: 50%;
}
</style>
