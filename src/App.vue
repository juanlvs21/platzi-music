<template>
  <div id="app">
    <PmHeader></PmHeader>

    <section class="section">
      <nav class="nav has-shadow">
        <div class="container has-text-centered">
            <form v-on:submit.prevent>
              <input type="text" class="input is-medium is-rounded" placeholder="Buscar canciones" v-model='searchQuery'>
              
              <progress v-show="isLoading" class="progress is-info mt-20" max="100">30%</progress>

              <div class="mt-20">
                <button type="submit" class="button is-info is-medium mrl-5" @click="search">Buscar</button>
                <button type="text" class="button is-danger is-medium mrl-5" @click="clearSearch">&times;</button>
              </div>
          </form>
        </div>
      </nav>

      <div class="container mt-20 has-text-centered">

        <div v-show="showTotalResults && !showNotification">
          <h3 class="font-22 mb-10">{{ searchMessage }}</h3>
        </div>

        <PmNotification v-show="showNotification">
            <p slot="body">No se encontraron resultados</p>
        </PmNotification>

        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for="t in tracks" v-bind:key="t.id">
            <PmTrack :track="t" @select="setSelectedTrack" :class="{ 'is-active': t.id == selectedTrack }"></PmTrack>
          </div>
        </div>
      </div>
    </section>

    <PmFooter></PmFooter>

  </div>
</template>

<script>
// Import components
import PmFooter from './components/layout/Footer.vue'
import PmHeader from './components/layout/Header.vue'
import PmTrack from './components/Track/Track.vue'
import PmNotification from './components/shared/Notification.vue'

// Import services
import trackService from './services/track'

export default {
  name: 'app',
  components: {
    PmFooter,
    PmHeader,
    PmTrack,
    PmNotification,
  },
  data() {
    return {
      searchQuery: '',
      tracks: [],

      showTotalResults: false,
      showNotification: false,
      isLoading: false,

      selectedTrack: '',
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
      this.selectedTrack = ''

      trackService.search(this.searchQuery)
        .then( (res) => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
          this.showTotalResults = true
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
}
</script>

<style lang="scss" scoped>
.mt-20 {
  margin-top: 20px!important;
}
.mt-5 {
  margin-top: 5px!important;
}
.mb-10 {
  margin-bottom: 10px!important;
}
.mrl-5 {
  margin: 0px 5px;
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
