<template>
    <div class="card text-dark bg-light mb-3">
        <div class="card-header">Contact Us</div>
        <div class="card-body">
            <h4 class="card-title">Contact Us</h4>
            <p class="card-text">shengma2019@u.northwestern.edu</p>
            <router-link :to="{name:'phoneNumber'}">Phone Number</router-link>
            <router-link :to="{name:'personName'}">Name</router-link>
            <router-view></router-view>
        </div>
    </div>
</template>
