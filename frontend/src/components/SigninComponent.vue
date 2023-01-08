<template>
    <div class="signin--component">
        <form class="form-signin w-100 m-auto">
            <h1 class="h3 mb-4 fw-normal">Please sign in</h1>

            <div class="form-floating">
                <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
            </div>

            <button class="w-100 btn btn-lg mt-3 btn-primary" id="signup_submit" type="submit">Sign in</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'SigninComponent'
}
</script>

<style>

.form-signin {
    max-width: 420px;
    padding: 15px;
}

.form-signin input[type="email"] {
    margin-bottom: 10px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.form-floating>.form-control, .form-floating>.form-control-plaintext {
    padding: 1rem 0.75rem;
}

</style>