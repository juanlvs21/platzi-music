<template>
    <div class="container has-text-centered mt-20">
        <transition name="fade-left">
            <h1 class="title" v-show="isReady">Nosotros</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'PmAbout',
    data() {
        return {
            isReady: false,
        }
    },
    mounted() {
        setTimeout(() => {
        this.isReady = true
        }, 10);
    },
}
</script>