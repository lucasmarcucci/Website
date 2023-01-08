<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SignupView from './views/SignupView.vue'
// import NavbarComponent from './components/NavbarComponent.vue'
// import HomeView from './views/HomeView.vue'
// import CreateModelView from './views/CreateModelView.vue'
</script>

<template>
    <div class="app">
        <!-- <SignupView/> -->
        <router-view/>
    </div>
</template>

<style scoped>

</style>
