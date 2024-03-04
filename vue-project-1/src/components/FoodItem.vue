<template lang="">
    <div class="box" v-on:click="foodclick">
        {{message}}<br/>
        <span>{{clicks}}</span>
        <img src="./img_quality.svg" width="50px" v-show="isFavorite">
        <h2>{{ foodName }}</h2>
        <h2>{{ foodDetails }}</h2>

    </div>
</template>
<script>
export default {
    data(){
        return{
            message: "Food Menu",
            clicks: 0,
        }
    },

    props:[
        'foodName',
        'foodDetails',
        'isFavorite',
    ],

    methods: {
        foodclick(){
            this.clicks++
        }
    }

}
</script>
<style>
    .box{
        padding: 15px;
        height: 100px;
        width: 200px;
        background-color: yellow
    }
</style>