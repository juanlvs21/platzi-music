<template>
  <div class="container">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <div class="notification is-danger has-text-centered">
            <slot name="body">Algo estuvo mal</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PmNotification',
}
</script>

<style lang="scss" scoped>

</style>
