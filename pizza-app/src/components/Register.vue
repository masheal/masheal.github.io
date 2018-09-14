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
                        <div class="form-group">
                            <label for="confirm-password">Confirm Password</label>
                            <input type="password" class="form-control" v-model="confirmPassword">
                        </div>
                        <button type="submit" class="btn btn-block btn-success">Register</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data () {
        return { 
            email:'',
            password:'',
            confirmPassword:''
        }
    },
    methods: {
        onSubmit(){
            if(this.password === this.confirmPassword){
                const formData={
                    email:this.email,
                    password:this.password,
                    confirmPassword:this.confirmPassword
                }

                axios.post('/users.json',formData).then(res => {
                    this.$router.push({name:'loginLink'})
                })
            } else {
                alert("Passwords should be the same")
            }
        }
    }
}
</script>
