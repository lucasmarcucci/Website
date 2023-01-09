<template>
    <div class="navbar--component border-bottom">
        <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3">
            <!-- <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span class="fs-4"><span class="bold">Killer</span>Bee</span>
            </a> -->
            <router-link class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none" to="/">
                <span class="fs-4"><span class="bold">Killer</span>Bee</span>
            </router-link>

            <ul class="nav nav-pills">
                <!-- <li class="nav-item bold"><a href="#" class="nav-link" aria-current="page">Home</a></li> -->
                <router-link to="/signup"><li class="nav-item bold nav-link">Sign Up</li></router-link>
                <router-link to="/signin"><li class="nav-item bold nav-link">Sign In</li></router-link>
                <router-link to="/createmodel"><li class="nav-item bold nav-link">Create Model</li></router-link>
            </ul>
        </header>
    </div>
    </div>
</template>

<script>
export default {
    name: 'NavbarComponent'
}
</script>

<style>

.navbar--component {
    background-color: #fff;
}

.bold {
    font-weight: 500;
}

</style>