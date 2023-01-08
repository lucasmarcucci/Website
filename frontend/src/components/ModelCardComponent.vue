<template>
    <div class="modelcard--component mr-5">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ modelData.model_name }}</h5>
                <p class="card-text">{{ modelData.model_description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModelCardComponent',
    props: {
        modelData: Object
    }
}
</script>

<style>

.modelcard--component {
    margin-right: 40px;
}

</style>