<template>
    <form>
        <h3 class="text-muted my-5">Add New Pizza</h3>
        <div class="form-group row">
            <label class="col-sm-1">Type</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.name">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-1">Description</label>
            <div class="col-sm-11">
                <textarea rows="5" class="form-control" v-model="newPizza.description"></textarea>
            </div>
        </div>
        <p><strong>Option1</strong></p>
        <div class="form-group row">
            <label class="col-sm-1">Size</label>
            <div class="col-sm-11">
                <input class="form-control" v-model="newPizza.size1">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-1">Price</label>
            <div class="col-sm-11">
                <input class="form-control" v-model="newPizza.price1">
            </div>
        </div>
        <p><strong>Option2</strong></p>
        <div class="form-group row">
            <label class="col-sm-1">Size</label>
            <div class="col-sm-11">
                <input class="form-control" v-model="newPizza.size2">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-1">Price</label>
            <div class="col-sm-11">
                <input class="form-control" v-model="newPizza.price2">
            </div>
        </div>
        <div class="form-group row">
            <button @click="addMenuItem" type="button" class="btn btn-success btn-block">Add</button>
        </div>
    </form>
</template>
<script>
export default {
    data(){
        return{
            newPizza:{}
        }
    },
    methods:{
        addMenuItem(){
            let data = {
                name:this.newPizza.name,
                description:this.newPizza.description,
                options:[
                    {
                        size:this.newPizza.size1,
                        price:this.newPizza.price1
                    },
                    {
                        size:this.newPizza.size2,
                        price:this.newPizza.price2
                    }
                ]
            }
            // fetch('https://wd0074869541ehoyhi.wilddogio.com/menu.json',{
            //     method:"POST",
            //     headers:{
            //         "Content-type":'application/json'
            //     },
            //     body:JSON.stringify(data)
            // })
            //     .then(res => res.json())
            //     .then(data => this.$router.push({name:'menuLink'}))
            //     .catch(console.log(err))
            // this.http.post("menu.json",data)
            //          .then(res => this.$router.push({name:"menuLink"}))
            this.http.post("menu.json",data)
                     .then(res => this.$store.commit("pushToMenuItems",data))
        }
    }
}
</script>
