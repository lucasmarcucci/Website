<template>
    <div class="createmodel--view">
        <NavbarComponent/>
        <div class="container mt-5">
            <CreateModelComponent/>
        </div>
    </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import CreateModelComponent from '@/components/CreateModelComponent.vue'

export default {
    name: 'CreateModelView',
    components: {
        NavbarComponent,
        CreateModelComponent
    }
}
</script>

<style>

</style>