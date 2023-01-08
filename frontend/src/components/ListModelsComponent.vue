<template>
    <div class="listmodels--component">
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Product 1</td>
                    <td class="blue">Edit</td>
                    <td class="red">Delete</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Product 2</td>
                    <td class="blue">Edit</td>
                    <td class="red">Delete</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Product 3</td>
                    <td class="blue">Edit</td>
                    <td class="red">Delete</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ListModelsComponent'
}
</script>

<style>

th {
    font-weight: bold;
}

.blue {
    color: #0d6efd!important;
}

.red {
    color: #e83850!important;
}

</style>