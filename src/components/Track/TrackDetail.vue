<template>
  <div class="container">

    <PmLoader v-if="isLoading"></PmLoader>

    <div class="columns">
      <div class="column is-6 is-offset-3">
        <PmTrack :track="track"></PmTrack>
      </div>
    </div>
    
    <PmNotification v-show="showNotification">
        <p slot="body">{{ messageNotification }}</p>
    </PmNotification>

  </div>
</template>

<script>
import PmTrack from './Track.vue'
import PmLoader from '../shared/Loader.vue'
import PmNotification from '../shared/Notification'

import trackService from '../../services/track'

export default {
  name: 'PmTrackDetails',
  components: {
    PmTrack,
    PmLoader,
    PmNotification,
  },
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
