<template>
  <section class="hero is-gradient">
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <div class="nav-item">
              <b class="ml-20">📻 Platzi Music</b>
            </div>
          </div>
          <div class="nav-right">
            <div class="nav-menu">

            </div>
          </div>
        </div>
      </header>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Platzi Music</h1>
        <h2 class="subtitle">Canciones que estan Vue-nisimas</h2>
        <PmPlayer></PmPlayer>
      </div>
    </div>
  </section>
</template>

<script>
import PmPlayer from '../Player/Player.vue'

export default {
  name: 'PmHeader',
  components: {
    PmPlayer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.ml-20 {
  margin-left: 20px!important;
}
.is-gradient {
  background: #00B4DB!important;
  background: -webkit-linear-gradient(to right, #0083B0, #00B4DB)!important;
  background: linear-gradient(to right, #0083B0, #00B4DB)!important;

  color: #fff;
}
.title {
  color: #fff!important;
}
.subtitle {
  color: #fff!important;
}
</style>
