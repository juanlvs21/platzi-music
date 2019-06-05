<template>
  <section class="hero is-gradient">    
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <p class="navbar-item">
          <b class="ml-20 text-white">📻 Platzi Music</b>
        </p>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarpm">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarpm" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <router-link to="/" class="navbar-item text-white">Buscar</router-link>
            <router-link to="/about" class="navbar-item text-white">Nosotros</router-link>
          </div>
        </div>
      </div>
    </nav>

    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title text-white">Platzi Music</h1>
        <h2 class="subtitle text-white">Canciones que estan Vue-nisimas</h2>
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
  },
  mounted() {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target
          const $target = document.getElementById(target)
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  },
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
  .text-white {
    color: #fff!important;
  }
  .navbar-item:hover {
    color: #209cee!important;
  }
  .navbar-item:focus {
    color: #209cee!important;
  }
  .router-link-exact-active {
    border: 1px white solid;
  }
  @media (max-width: 1023px){
    .navbar-item {
      color: #209cee!important;
    }
  }
</style>
