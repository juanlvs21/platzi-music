<template>
  <div id="app">
    <section class="section">
      <nav class="nav has-shadow">
        <div class="container">
          <form v-on:submit.prevent>
            <input type="text" class="input is-medium" placeholder="Buscar canciones" v-model='searchQuery'>
            <div class="mt-20">
              <button type="submit" class="button is-info is-medium margin-rl" @click="search">Buscar</button>
              <button type="text" class="button is-danger is-medium margin-rl">&times;</button>
            </div>
          </form>
          <p><small>{{ searchMessage }} </small></p>
        </div>
      </nav>
      <div class="container mt-20">
        <HelloWorld msg="Este es un componente hijo"></HelloWorld>
      </div>
      <div class="container mt-20">
        <div class="columns" v-for="t in tracks" v-bind:key="t.id">
          <div class="column">
            {{ t.name }} - {{ t.artists[0].name }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import trackService from './services/track'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      searchQuery: '',
      tracks: [],
    }
  },
  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  methods: {
    search() {
      if (!this.searchQuery) { return } // Si el query está vacio no ejecutar la petición

      trackService.search(this.searchQuery)
        .then( (res) => {
          this.tracks = res.tracks.items
        })
    },
  },
}
</script>

<style lang="scss">
.mt-20 {
  margin-top: 20px!important;
}
.margin-rl {
  margin: 0px 5px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
