<template>
    <div class="editmodel--component">
        <form class="form-signin w-100 m-auto">
            <h1 class="h3 mb-4 fw-normal">Edit the model</h1>

            <div class="form-floating">
                <input type="text" class="form-control" id="floatingText" placeholder="John Doe">
                <label for="floatingText">Name</label>
            </div>
            <div class="form-floating">
                <textarea class="form-control model--description" id="floatingTextArea" rows="8"></textarea>
                <label for="floatingTextArea">Description</label>
            </div>
            <div class="form-floating">
                <input type="number" class="form-control" id="floatingPuht" placeholder="12">
                <label for="floatingPuht">pUHT</label>
            </div>

            <button class="w-100 btn btn-lg mt-3 btn-primary" id="editmodel_submit" type="submit">Edit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'EditModelComponent'
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