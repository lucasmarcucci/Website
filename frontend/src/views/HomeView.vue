<template>
    <div class="home--view">
        <NavbarComponent/>
        <div class="container mt-5">
            <h2 class="mb-4">Our great Models</h2>
            <div class="model--cards">
                <ModelCardComponent :key="index" v-for="(model, index) in models" :modelData="model"/>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import ModelCardComponent from '@/components/ModelCardComponent.vue'
import axios from 'axios'

export default {
    name: 'HomeView',
    components: {
        NavbarComponent,
        ModelCardComponent
    },
    data() {
        return {
            models: null
        }
    },
    mounted() {
        axios.get("http://localhost:5000/models")
        .then(response => {
            this.models = response.data
            console.log(response)
            console.log(this.models)
        })
        .catch(e => {
            console.log(e)
        })
    }
}
</script>

<style>

.model--cards {
    display: flex;
    justify-content: left;
}

</style>