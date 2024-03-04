<template>
  
  <router-view></router-view>
  <div class="header bg-body-tertiary">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse ms-auto" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/about">About Us</router-link>
            <router-link class="nav-link" to="/contact">Contact Us</router-link>
            <!-- <button class="nav-link" @click="myComponent= 'contact-compo'">Contact</button> -->
            <!-- <a class="nav-link disabled" aria-disabled="true">Disabled</a> -->
          </div>
        </div>
      </div>
    </nav>
  </div>

  
</template>

<script>
  export default {
    data(){
      return{
        myComponent:''
      }
    }
  }
</script>

<style>
  
</style>