<script>

// import * as actions from './actions.vue'  引入所有actions.vue中的方法和属性

export default {
    methods:{ 
        goToMenu(){ 
            //跳转到上一次浏览的页面 
            this.$router.go(-1)

            //指定跳转的地址
            this.$router.replace('./menu')

            //指定跳转路由的名字下
            this.$router.replace({name:'menuLink'})

            //通过push进行跳转
            this.$router.push('./menu')  
            this.$router.push({name:'menuLink'})  

        } 


    }
    
}

//global guard 全局守卫
router.beforeEach ((to,from,next) => {
    if (to.path == '/login' || to.path == '/register') {
        next();
    } else {
        alert ("Please Login");
        next('/login');
    }
})

// 组件独享守卫（进入组件之前）
beforeRouteEnter (to, from, next) => {
    next(vm => {
        alert("Hello " + vm.name)//vm 相当于 this。这里，网页已经被渲染
    })
}
// 组件独享守卫（离开组件之前）
beforeRouterLeave (to, from, next) => {
    if (confirm("R U leaving?") == true){
        next()
    } else {
        next(false)
    }
}

// axios
// get
this.http.get("menu.json").then(res => this.getMenuItems = res.data)

// post
this.http.post("menu.json",data).then(res => this.$router.push({name:"menuLink"}))

// fetch
// POST
fetch('https://wd0074869541ehoyhi.wilddogio.com/menu.json',{
                method:"POST",
                headers:{
                    "Content-type":'application/json'
                },
                body:JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => this.$router.push({name:'menuLink'}))
                .catch(console.log(err))

// GET
fetch('https://wd0074869541ehoyhi.wilddogio.com/menu.json')
            .then(res => {
                return res.json()
            })
            .then(data => {
                let menuArray = []
                for(let key in data){
                    data[key].id = key
                    menuArray.push(data[key])
                }
                this.getMenuItem = menuArray
                console.log(menuArray)
            })

// DELETE
fetch('https://wd0074869541ehoyhi.wilddogio.com/menu/'+item.id+'/.json',{
                method:'DELETE',
                headers:{
                    'Content-type':'application/json'
                }
            })
            .then(res => res.json())
            .then(data => this.$router.push({name:'menuLink'}))
            .catch(err => alert(err))

export const store = new Vuex.Store({
    state: {
        // 设置属性
    },
    getters: {
        // 获取属性的状态
    },
    mutations: {
        // 改变属性的状态
    },
    actions: {
        // 应用mutations
    }
})

// commit 引用mutation的方法
// dispatch 引用action的方法



</script>

