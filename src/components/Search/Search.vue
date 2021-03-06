<template>
  <main>
    <section class="section">
      <nav class="nav has-shadow">
        <transition name="fade-left">
          <div class="container has-text-centered" v-show="isReady">
            <input type="text" class="input is-medium is-rounded" placeholder="Buscar canciones" v-model='searchQuery' @keyup.enter="search">

            <transition name="fade-left">
              <PmLoader v-show="isLoading"></PmLoader>
            </transition>

            <div class="mt-20">
              <button class="button is-info is-medium mrl-5" @click="search">Buscar</button>
              <button class="button is-danger is-medium mrl-5" @click="clearSearch">&times;</button>
            </div>
          </div>
        </transition>
      </nav>

      <div class="container mt-20 has-text-centered">

        <div v-show="showTotalResults && !showNotification">
          <h3 class="font-22 mb-10">{{ searchMessage }}</h3>
        </div>

        <transition name="fade-left">
          <PmNotification v-show="showNotification">
            <p slot="body">{{ messageNotification }}</p>
          </PmNotification>
        </transition>

        <transition name="fade-left">
          <div class="columns is-multiline" v-show="showResult">
            <div class="column is-one-quarter" v-for="t in tracks" v-bind:key="t.id">
              <PmTrack :track="t" @select="setSelectedTrack" :class="{ 'is-active': t.id == selectedTrack }" v-blur="t.preview_url"></PmTrack>
            </div>
          </div>
        </transition>
      </div>
    </section>

  </main>
</template>

<script>
import PmTrack from '../Track/Track.vue'
import PmNotification from '../shared/Notification.vue'
import PmLoader from '../shared/Loader.vue'

import trackService from '../../services/track'

export default {
  name: 'app',
  components: {
    PmTrack,
    PmNotification,
    PmLoader,
  },
  data() {
    return {
      searchQuery: '',
      tracks: [],

      showTotalResults: false,
      showNotification: false,
      isLoading: false,
      isReady:false,
      showResult: false,

      selectedTrack: '',

      messageNotification: '',
    }
  },
  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`
    },
  },
  watch: {
    // Esta función hace que luego de 3 segundos se oculte la notificación, pero en lo personal no quiero usarlo
    // showNotification() {
    //   if (this.showNotification) {
    //     setTimeout(() => {
    //       this.showNotification = false
    //     }, 3000);
    //   }
    // },
  },
  methods: {
    search() {
      if (!this.searchQuery) { return } // Si el query está vacio no ejecutar la petición

      this.isLoading = true
      this.showTotalResults = false
      this.showNotification = false      
      this.showResult = false
      this.selectedTrack = ''

      trackService.search(this.searchQuery)
        .then((res) => {
          this.isLoading = false
          this.showNotification = res.tracks.total === 0
          if (this.showNotification) {
            this.messageNotification = 'No se encontraron resultados'
          }

          this.tracks = res.tracks.items
          this.showTotalResults = true
          this.showResult = true
        })
        .catch(() => {
          this.isLoading = false
          this.showNotification = true
          this.showResult = false
          this.messageNotification = 'No se pudo conectar al servidor'
        })
    },
    clearSearch() {
      this.tracks = []
      this.searchQuery = ''
      this.selectedTrack = ''
      this.isLoading = false
      this.showTotalResults = false
      this.showNotification = false
    },
    setSelectedTrack(id) {
      this.selectedTrack = id
    }
  },
  mounted() {
    setTimeout(() => {
      this.isReady = true
    }, 10);
  },
}
</script>

<style lang="scss" scoped>
  .mt-5 {
    margin-top: 5px!important;
  }
  .mb-10 {
    margin-bottom: 10px!important;
  }
  .font-28 {
    font-size: 28px!important;
  }
  .font-22 {
    font-size: 22px!important;
  }
  .is-active {
    border: 1px #209cee solid;
    
    -webkit-box-shadow: 0px 0px 10px 0px rgba(138,138,138,1);
    -moz-box-shadow: 0px 0px 10px 0px rgba(138,138,138,1);
    box-shadow: 0px 0px 10px 0px rgba(138,138,138,1);
  }
</style>
