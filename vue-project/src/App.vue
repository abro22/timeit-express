<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="content">
    <router-link to="/"></router-link>
    <router-link to="/register"></router-link>
    <router-link to="/welcome"></router-link>
    <router-link to="/profile"></router-link>
    <router-link to="/settings"></router-link>
    <router-link to="/timestamps"></router-link>
  </div>
  <RouterView v-slot="{ Component }">
    <Transition name="fade">

      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lemon&display=swap');

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>