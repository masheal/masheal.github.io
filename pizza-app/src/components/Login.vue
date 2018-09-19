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
import axios from 'axios'
export default {
    data () {
        return { 
            email:'',
            password:''
        }
    },
    beforeRouteEnter:(to, from, next) => {
        next(vm => vm.$store.dispatch("setUser",null))
    },
    methods: {
        onSubmit(){
            axios.get('/users.json').then(res => {
                const data = res.data
                const users = []
                for(let key in data){
                    const user = data[key]
                    users.push(user)
                }

                let result = users.filter((user) => {
                    return user.password === this.password && user.email === this.email
                })

                if(result != null && result.length > 0){
                    this.$store.dispatch("setUser",result[0].email)
                    this.$router.push({name:'homeLink'})
                }else{
                    alert('Wrong Account or Password')
                    this.$store.dispatch("setUser",null)
                }
            })
        }
    }
}
</script>
