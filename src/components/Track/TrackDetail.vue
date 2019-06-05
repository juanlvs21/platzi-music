<template>
  <div class="container">

    <PmLoader v-if="isLoading"></PmLoader>

    <div class="columns" v-if="track && track.album">
      <div class="column is-3 has-text-centered">
        <!-- <PmTrack :track="track"></PmTrack> -->
        <figure class="media-left">
          <p class="image">
            <img :src="track.album.images[0].url" alt="">
          </p>
          <div>
            <button class="button is-info is-small mrl-5 mt-20" @click="selectTrack">
              Reproducir <span class="icon is-small ml-5">▶️</span>
            </button>
          </div>
        </figure>
      </div>
      <div class="column is-8">
        <div class="panel">
          <div class="panel-heading">
            <h1>{{ track.name }}</h1>
          </div>
          <div class="panel-block">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <ul v-for="(v,k) in track" v-bind:key="k">
                    <b>{{ k }}:&nbsp;</b>
                    <span>{{ v }}</span>
                  </ul>
                </div>
              </div>
              <nav class="level">
                <div class="level-left">
                  <a href="" class="level-item"></a>
                </div>
              </nav>
            </article>
          </div>
        </div>
      </div>
    </div>
    
    <PmNotification v-show="showNotification">
        <p slot="body">{{ messageNotification }}</p>
    </PmNotification>

  </div>
</template>

<script>
import PmLoader from '../shared/Loader.vue'
import PmNotification from '../shared/Notification'

import trackService from '../../services/track'

import trackMixin from '../../mixins/track'

export default {
  name: 'PmTrackDetails',
  components: {
    PmLoader,
    PmNotification,
  },
  mixins: [ trackMixin ],
  data() {
    return {
        track: {},
        isLoading: true,
        showNotification: false,
        messageNotification: '',
    }
  },
  created() {
    const id = this.$route.params.id
    this.isLoading = true
    trackService.getById(id)
      .then( res => {
        this.track = res
        this.isLoading = false
      })
      .catch(() => {
        this.messageNotification = 'Error desconocido'
        this.showNotification = true
        this.isLoading = false
      })
  },
}
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px!important
}
</style>
