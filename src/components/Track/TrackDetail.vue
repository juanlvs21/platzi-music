<template>
  <div class="container">

    <transition name="fade-left">
      <PmLoader v-show="isLoading"></PmLoader>
    </transition>

    <transition name="fade-left">
      <div class="columns" v-if="track && track.album">
        <div class="column is-3 has-text-centered">
          <PmTrack :track="track"></PmTrack>
        </div>
        <div class="column is-8">
          <div class="panel">
            <div class="panel-heading">
              <h1>{{ trackTitle }}</h1>
            </div>
            <div class="panel-block">
              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <ul>
                      <li v-for="(v,k) in track" v-bind:key="k">
                        <b>{{ k }}:&nbsp;</b>
                        <span>{{ v }}</span>
                      </li>
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
    </transition>
    
    <transition name="fade-left">
      <PmNotification v-show="showNotification">
        <p slot="body">{{ messageNotification }}</p>
      </PmNotification>
    </transition>

  </div>
</template>

<script>
import PmLoader from '../shared/Loader.vue'
import PmNotification from '../shared/Notification'
import PmTrack from '../Track/Track'

import trackMixin from '../../mixins/track'

import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'PmTrackDetails',
  components: {
    PmLoader,
    PmNotification,
    PmTrack,
  },
  mixins: [ trackMixin ],
  data() {
    return {
        isLoading: true,
        showNotification: false,
        isReady: false,
        messageNotification: '',
    }
  },
  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },
  methods: {
    ...mapActions(['getTrackById'])
  },
  created() {
    this.isLoading = true
    const id = this.$route.params.id

    if (!this.track || !this.track.id || this.track.id != id) {
      this.getTrackById({id})
        .then(() => {
        this.isLoading = false
          console.log('track loaded...')
        })
        .catch(() => {
          this.messageNotification = 'Error desconocido'
          this.showNotification = true
          this.isLoading = false
        })
    }
    if (this.track.id == id) this.isLoading = false
  },
}
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px!important
}
</style>
