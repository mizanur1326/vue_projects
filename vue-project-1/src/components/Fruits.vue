<template>
    <div>
        <ol>
            <li v-for="x in fruits">{{x}}</li>
        </ol>
    </div>
</template>
<script>
export default {
    data(){
        return{
            fruits:["Apple", "Grape", "Guava", "Orange", "Papaya"]
        }
    }
}
</script>
<style>
    
</style>