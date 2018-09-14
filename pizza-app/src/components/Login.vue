<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img src="../../src/assets/register.jpg" alt="" class="mx-auto d-block">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" v-model="password">
                        </div>
                        <button type="submit" class="btn btn-block btn-success">Register</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return { 
            email:'',
            password:''
        }
    },
    methods: {
        onSubmit(){

        }
    }
}
</script>
