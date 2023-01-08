<template>
    <div class="createmodel--component">
        <form @submit.prevent="HandleForm" class="form-signin w-100 m-auto">
            <h1 class="h3 mb-4 fw-normal">Create new model</h1>

            <div class="form-floating">
                <input type="text" class="form-control" id="floatingText" placeholder="John Doe" v-model="name">
                <label for="floatingText">Name</label>
            </div>
            <div class="form-floating">
                <textarea class="form-control model--description" id="floatingTextArea" rows="8" v-model="description"></textarea>
                <label for="floatingTextArea">Description</label>
            </div>
            <div class="form-floating">
                <input type="number" class="form-control" id="floatingPuht" placeholder="12" v-model="puht">
                <label for="floatingPuht">pUHT</label>
            </div>

            <button class="w-100 btn btn-lg mt-3 btn-primary" id="createmodel_submit" type="submit">Create</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'CreateModelComponent',
    data() {
        return {
            name: null,
            description: null,
            puht: null,
        }
    },
    methods: {
        HandleForm() {
            const data = {
                name: this.name,
                description: this.description,
                puht: this.puht
            }

            axios.post("http://localhost:5000/models", data)
            .then(response => {
                console.log(response)
            })
            .catch(e => {
                console.log(e)
            })
        }
    }
}
</script>

<style>

.form-signin {
    max-width: 420px;
    padding: 15px;
}

.form-signin input[type="text"] {
    margin-bottom: 10px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="number"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.model--description {
    margin-bottom: 10px;
    min-height: 100px!important;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-floating>.form-control, .form-floating>.form-control-plaintext {
    padding: 1rem 0.75rem;
}

</style>